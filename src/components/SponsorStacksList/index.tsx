import Link from "next/link";

import { EventSponsors } from "../../data/types";
import { RoundLink } from "../RoundLink";
import { SponsorStack } from "../SponsorStack";
import { Text } from "../Text";
import styles from "./index.module.css";

export function SponsorStacksList({
  complete,
  large,
  medium,
  small,
}: EventSponsors) {
  return (
    <div className={styles.sponsorsList}>
      <Text as="h2" fontSize="extra-large" id="spon">
        Our Wonderful Sponsors
      </Text>
      <Text as="p">
        Our conferences wouldn&apos;t be possible without the generous support
        of our sponsors.
        <br />
        <br />
        Interested in becoming one?
      </Text>
      <RoundLink
        as={Link}
        className={styles.takeMeTop}
        href="/spon"
        variant="shadow"
      >
        Take me to the sponsors page
      </RoundLink>

      <SponsorStack sponsors={complete} stack="complete" />
      <SponsorStack sponsors={large} stack="large" />
      <SponsorStack sponsors={medium} stack="medium" />
      <SponsorStack sponsors={small} stack="small" />

      <Text as="div" className={styles.bottomText}>
        There are loads of great reasons to sponsor a HalfStack conference this
        year. Want to find out more?
      </Text>
      <RoundLink
        as={Link}
        className={styles.takeMeBottom}
        href="/spon"
        variant="shadow"
      >
        Take me to the sponsors page
      </RoundLink>
    </div>
  );
}