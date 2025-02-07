import About from "@/components/About";
import Blog from "@/components/Blog";
import Contact from "@/components/Contact";
import Hero from "@/components/Hero";
import Partners from "@/components/Partners";
import Projects from "@/components/Projects";
import Team from "@/components/Team";

export default async function Home() {
  let settings = null;

  try {
    const result = await fetch(process.env.URL + '/api/settings/get', {
      method: 'POST',
      body: JSON.stringify({
        settingId: '67a3061e212ec2b37e6bb299',
      }),
      cache: 'no-store',
    });
    const data = await result.json();
    settings = data[0];
    
  } catch (error) {
    settings = { title: 'Failed to load listing' };
  }

  let partners = null;

  try {
    const result = await fetch(process.env.URL + '/api/partners/get', {
      method: 'POST',
      body: JSON.stringify({
        type: 'rent',
        limit: 4,
        order: 'asc',
      }),
      cache: 'no-store',
    });
    const data = await result.json();
    partners = data;
  } catch (error) {
    partners = { title: 'Failed to load listing' };
  }

  let teams = null;

  try {
    const result = await fetch(process.env.URL + '/api/teams/get', {
      method: 'POST',
      body: JSON.stringify({
        type: 'rent',
        limit: 4,
        order: 'asc',
      }),
      cache: 'no-store',
    });
    const data = await result.json();
    teams = data;
  } catch (error) {
    teams = { title: 'Failed to load listing' };
  }

  return (
    <>
      <Hero setting={settings} />
      <About setting={settings} />
      <Projects setting={settings} />
      <Team setting={settings} teams={teams} />
      <Blog setting={settings} />
      <Contact />
      <Partners partners={partners} />
    </>
  );
}
