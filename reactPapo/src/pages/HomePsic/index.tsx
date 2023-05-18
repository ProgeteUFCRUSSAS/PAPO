import React from 'react';





import { Footer } from "../../components/Footer"
import { PsicContent } from "../../components/HomePsicContent"
import { PsicHero } from "../../components/HomePsicHero"
import { PsicFAQ } from "../../components/HomePsicFAQ"

// Hero Feature Content Carousel

export function HomePsic() {
	return (
		<>
			<PsicHero />
				
			<PsicContent />
			<PsicFAQ />
      <Footer / >
	
		</>
	);
};


