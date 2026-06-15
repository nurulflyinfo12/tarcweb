import BannerSlider from "@/components/Home/BannerSlider";
import Introduction from "@/components/Home/Introduction";
import LuxuryExperience from "@/components/Home/LuxuryExperience";
import AtAGlance from "@/components/Home/AtAGlance";
import ExclusiveDelights from "@/components/Home/ExclusiveDelights";
import DiscoverAndReviews from "@/components/Home/DiscoverAndReviews";

export default function Home() {
  return (
    <>
      <BannerSlider />
      <Introduction />
      <LuxuryExperience />
      <AtAGlance />
      <ExclusiveDelights />
      <DiscoverAndReviews />
    </>
  );
}
