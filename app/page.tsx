import BannerSlider from "@/components/Home/BannerSlider";
import Introduction from "@/components/Home/Introduction";
import LuxuryExperience from "@/components/Home/LuxuryExperience";
import AtAGlance from "@/components/Home/AtAGlance";
import ExclusiveDelights from "@/components/Home/ExclusiveDelights";
import DiscoverAndReviews from "@/components/Home/DiscoverAndReviews";
import MeetingsAndEvents from "@/components/Home/MeetingsAndEvents";


export default function Home() {
  return (
    <>
      <BannerSlider />
      <Introduction />
      <LuxuryExperience />
      <AtAGlance />
      <ExclusiveDelights />
      <MeetingsAndEvents />
      <DiscoverAndReviews />
    </>
  );
}
