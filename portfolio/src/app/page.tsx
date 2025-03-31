import ClientAboutView from "@/components/client-view/about";
import ClientContactView from "@/components/client-view/contact";
import ClientExperieanceAndEducationView from "@/components/client-view/experience";
import ClientHomeView from "@/components/client-view/home";
import ClientProjectView from "@/components/client-view/project";
import { extractAllData } from "@/services";

export default async function Home() {
  const homeSectionData = await extractAllData("home");
  const aboutSectionData = await extractAllData("about");
  const experieanceSectionData = await extractAllData("experience");
  const educationSectionData = await extractAllData("education");
  const projectSectionData = await extractAllData("project");

  return (
    <div className="Home">
      <ClientHomeView data={homeSectionData} />
      <ClientAboutView data={aboutSectionData} />
      <ClientExperieanceAndEducationView
        experienceData={experieanceSectionData}
        educationData={educationSectionData}
      />
      <ClientProjectView data={projectSectionData} />
      <ClientContactView />
    </div>
  );
}
