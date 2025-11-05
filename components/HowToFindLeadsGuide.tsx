
import React from 'react';

const HowToFindLeadsGuide: React.FC = () => {
  return (
    <div className="bg-slate-900/50 rounded-xl border border-blue-500/50 shadow-2xl p-6 -mt-4 mb-12">
      <h2 className="text-2xl font-bold text-blue-300">Action Plan: From Profile to Prospect</h2>
      <p className="text-slate-400 mt-2 mb-6">You have a detailed profile and lookalike archetypes. Here's the professional workflow to turn this intelligence into a list of real people.</p>
      
      <div className="space-y-6">
        <div className="flex items-start">
          <div className="flex-shrink-0 h-8 w-8 rounded-full bg-blue-600 flex items-center justify-center font-bold text-white mr-4">1</div>
          <div>
            <h3 className="font-semibold text-slate-200">Understand the 'Lookalikes'</h3>
            <p className="text-slate-400 text-sm">The generated prospects are high-fidelity <strong className="text-teal-300">archetypes</strong> designed to give you a crystal-clear picture of who to search for. They are not a directory of real individuals but a blueprint for your search.</p>
          </div>
        </div>
        <div className="flex items-start">
          <div className="flex-shrink-0 h-8 w-8 rounded-full bg-blue-600 flex items-center justify-center font-bold text-white mr-4">2</div>
          <div>
            <h3 className="font-semibold text-slate-200">Use the "Execute Search" Buttons</h3>
            <p className="text-slate-400 text-sm">This is your primary tool. Each button opens a pre-built, highly-specific LinkedIn or Google search. This is the fastest way to go from an archetype to a list of real potential leads that match the profile.</p>
          </div>
        </div>
        <div className="flex items-start">
          <div className="flex-shrink-0 h-8 w-8 rounded-full bg-blue-600 flex items-center justify-center font-bold text-white mr-4">3</div>
          <div>
            <h3 className="font-semibold text-slate-200">Refine with Your Expertise</h3>
            <p className="text-slate-400 text-sm">Use the rich <strong className="text-teal-300">Demographic & Psychographic</strong> data to conduct your own expert research. On platforms like LinkedIn Sales Navigator or specialized tools (like Property Radar for real estate), you can filter by location, industry, interests, and company size to zero in on the perfect prospects.</p>
          </div>
        </div>
         <div className="flex items-start pt-6 border-t border-blue-500/20">
          <div className="flex-shrink-0 h-8 w-8 rounded-full bg-purple-600 flex items-center justify-center font-bold text-white mr-4">4</div>
          <div>
            <h3 className="font-semibold text-slate-200">Scaling with Automation (Optional Power-User Technique)</h3>
            <p className="text-slate-400 text-sm mb-4">For users looking to build lists at a very large scale, the AI's intelligence can be paired with automation tools. This is an advanced technique; for many, the highest-quality approach is to use the pre-built search buttons for targeted, manual prospecting. However, if you need to scale, here's an example workflow using the <strong className="text-teal-300">Google Dork Query</strong> from each Lead Card.</p>
            <div className="bg-slate-950/50 border border-slate-700 p-3 rounded-lg text-xs space-y-2">
                <p className="font-bold text-purple-300">Example Workflow (using Apify):</p>
                <ol className="list-decimal list-inside text-slate-300 space-y-1">
                    <li>Find the "Google Search Scraper" actor on the Apify platform.</li>
                    <li>Copy the <strong className="text-teal-400">Google Dork Query</strong> from a generated Lead Card.</li>
                    <li>Paste this query into the scraper's input field.</li>
                    <li>Configure the scraper to extract the profile URL, name, and headline from the search results.</li>
                    <li>Run the scraper to automatically gather dozens of potential leads that match your archetype.</li>
                    <li><strong className="text-yellow-300">Pro Tip:</strong> Paste your final scraped list back into the "Prospect Scoring Engine" to get a final, AI-validated "kill list."</li>
                </ol>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default HowToFindLeadsGuide;