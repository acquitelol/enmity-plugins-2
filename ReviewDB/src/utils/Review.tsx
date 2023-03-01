import { Image, Text, TouchableOpacity, View } from "enmity/components";
import { bulk, filters } from "enmity/metro";
import { Profiles, React } from 'enmity/metro/common';
import styles from "./StyleSheet";
import { ReviewContentProps } from "./types";
import { Users } from 'enmity/metro/common';

const [
  { ProfileGradientCard }, // used to render a card with the external colors being the user's profile theme. requires padding tobe set as a result.
  ProfileFetcher
] = bulk(
  filters.byProps("ProfileGradientCard"),
  filters.byProps("fetchProfile")
);

interface ReviewProps {
    item: ReviewContentProps;
    onSubmit: Function;
}

export default ({ item, onSubmit }: ReviewProps) => {
    // This was a lot easier than i thought, it automatically uses the correct profile theme colors when rendered.
    // if the user has no profile theme colors or this is not rendered inside of a profile, then the fallback color will be used.
    return <ProfileGradientCard style={styles.reviewContainer} fallbackBackground={styles.fallback.color}>
        <TouchableOpacity onPress={onSubmit}>
            <View style={{ padding: 8 }}>
                <TouchableOpacity 
                    onPress={() => {
                        Users.getUser(item["senderdiscordid"])
                            ? Profiles.showUserProfile({ userId: item["senderdiscordid"]})
                            : ProfileFetcher.getUser(item["senderdiscordid"]).then(() => Profiles.showUserProfile({ userId: item["senderdiscordid"] }))
                    }} 
                    style={styles.avatarContainer}
                >
                    <Image
                        loading="lazy"
                        style={styles.authorAvatar}
                        source={{
                            uri: (item["profile_photo"] as string)?.replace("?size=128", "?size=48"),
                        }}
                    />
                    <View style={{ marginLeft: 6 }}>
                        <Text style={[styles.mainText, styles.authorName]}>
                            {item["username"]}
                        </Text>
                    </View>
                </TouchableOpacity>
                <Text style={styles.messageContent}>
                    {item["comment"] ?? "Invalid message content."}
                </Text>
            </View>
        </TouchableOpacity>
    </ProfileGradientCard>
}
