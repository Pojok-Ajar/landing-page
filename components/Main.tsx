import React from "react";
import { HeroContentLeft } from "./HeroHeaderLeft";
import { HeaderResponsive } from "./Header";
import Sections from "././sections/Sections";
import { Footer } from "./Footer";

const MainBody = () => {
  return (
    <div>
        <HeaderResponsive links={[
          {
            "link": "/about",
            "label": "Kenalan"
          },
          {
            "link": "/pricing",
            "label": "Benefits"
          },
          {
            "link": "/learn",
            "label": "Insight"
          },
          {
            "link": "/community",
            "label": "Gabung Komunitas"
          }
        ]} />
        <HeroContentLeft />

        <Sections />

        <Footer data={[
            {
                "title": "About",
                "links": [
                  { "label": "Features", "link": "#" },
                  { "label": "Pricing", "link": "#" },
                  { "label": "Support", "link": "#" },
                  { "label": "Forums", "link": "#" }
                ]
              },
              {
                "title": "Project",
                "links": [
                  { "label": "Contribute", "link": "#" },
                  { "label": "Media assets", "link": "#" },
                  { "label": "Changelog", "link": "#" },
                  { "label": "Releases", "link": "#" }
                ]
              },
              {
                "title": "Community",
                "links": [
                  { "label": "Join Discord", "link": "#" },
                  { "label": "Follow on Twitter", "link": "#" },
                  { "label": "Email newsletter", "link": "#" },
                  { "label": "GitHub discussions", "link": "#" }
                ]
              }
              
        ]} />
    </div>
  );
}
export default MainBody;