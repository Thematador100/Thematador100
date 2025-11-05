import React from 'react';
import { MonetizationStrategy, ProductIdea } from '../types';

interface MonetizationStrategyReportProps {
    strategy: MonetizationStrategy;
    onGeneratePlaybook: () => void;
    analysisType: 'b2b' | 'b2c'; // To pass context
}

const ProductIdeaCard: React.FC<{ idea: ProductIdea }> = ({ idea }) => (
    <div className="bg-slate-900/50 p-4 rounded-lg border border-slate-700">
        <h4 className="font-bold text-teal-400">{idea.ideaName}</h4>
        <p className="text-slate-400 text-xs mt-1">{idea.description}</p>
        
        <div className="mt-4 pt-4 border-t border-slate-800 grid grid-cols-1 md:grid-cols-2 gap-4">
            <div>
                <p className="text-xs text-slate-400 font-semibold uppercase">Profit Potential</p>
                <p className="text-amber-300 font-bold text-lg">{idea.profitPotential}</p>
            </div>
             <div>
                <p className="text-xs text-slate-400 font-semibold uppercase">AI Leverage Point</p>
                <p className="text-slate-300 text-sm">{idea.aiLeveragePoint}</p>
            </div>
        </div>
         <div className="mt-3">
            <p className="text-xs text-slate-400 font-semibold uppercase">Financial Narrative</p>
            <blockquote className="mt-1 border-l-4 border-amber-500 pl-3 italic text-slate-300 text-xs bg-slate-950 p-2 rounded-r-lg">
                {idea.financialNarrative}
            </blockquote>
        </div>

        <div className="mt-4 pt-4 border-t border-slate-800">
             <p className="text-xs text-slate-400 font-semibold uppercase mb-2">Pricing Model</p>
             <div className="space-y-3">
                {idea.pricingModel.tiers.map(tier => (
                    <div key={tier.name} className="bg-slate-950/70 p-3 rounded border border-slate-700">
                        <div className="flex justify-between items-start">
                            <div>
                                <h5 className="font-bold text-cyan-300">{tier.name}</h5>
                                <p className="text-xs text-slate-400">{tier.description}</p>
                            </div>
                            <p className="font-bold text-lg text-amber-300">{tier.pricePerMonth}</p>
                        </div>
                        <ul className="list-disc list-inside text-xs text-slate-300 mt-2 space-y-1 pl-2">
                            {tier.features.map((feature, i) => <li key={i}>{feature}</li>)}
                        </ul>
                    </div>
                ))}
                {idea.pricingModel.additionalCharges && (
                    <p className="text-center text-xs text-slate-500 italic mt-2">{idea.pricingModel.additionalCharges}</p>
                )}
             </div>
        </div>
        
        <div className="mt-4 pt-4 border-t border-slate-800">
             <p className="text-xs text-slate-400 font-semibold uppercase mb-2">Other Monetization Pathways</p>
             <div className="flex flex-wrap gap-2">
                {idea.monetizationPathways.map(path => (
                    <span key={path} className="text-xs bg-slate-700 text-slate-300 px-2 py-1 rounded-full">{path}</span>
                ))}
             </div>
        </div>
    </div>
);


const MonetizationStrategyReport: React.FC<MonetizationStrategyReportProps> = ({ strategy, onGeneratePlaybook, analysisType }) => {
    return (
        <div className="mt-12 bg-slate-800/70 rounded-xl border border-teal-500/50 shadow-2xl p-6 animate-fade-in">
            <h2 className="text-2xl font-bold text-teal-300">Monetization & Opportunity Analysis</h2>
            <p className="text-slate-400 mt-1 mb-6">An AI-generated strategic plan for the discovered <span className="font-bold">{analysisType.toUpperCase()}</span> opportunity.</p>

            <div className="space-y-8">
                <div>
                    <h3 className="text-lg font-semibold text-slate-200 mb-2">Core Opportunity</h3>
                    <p className="text-slate-300 text-sm">{strategy.coreOpportunity}</p>
                </div>

                <div className="pt-4 border-t border-slate-700">
                    <h3 className="text-lg font-semibold text-slate-200 mb-3">High-Potential Product/Service Blueprints</h3>
                    <div className="space-y-4">
                        {strategy.productIdeas.map(idea => (
                           <ProductIdeaCard key={idea.ideaName} idea={idea} />
                        ))}
                    </div>
                </div>

                <div className="pt-4 border-t border-slate-700">
                    <h3 className="text-lg font-semibold text-slate-200 mb-2">Go-to-Market Strategy</h3>
                    <ul className="list-disc list-inside text-sm text-slate-300 space-y-1">
                        {strategy.go_to_market_strategy.map((step, i) => <li key={i}>{step}</li>)}
                    </ul>
                </div>

                <div className="pt-4 border-t border-slate-700">
                    <h3 className="text-lg font-semibold text-slate-200 mb-2">Lead Source Protocol</h3>
                    <p className="text-slate-400 text-sm mb-3">A concrete, actionable plan for finding your first customers.</p>
                     <div className="bg-slate-900/50 rounded-lg border border-slate-700 overflow-hidden">
                        <table className="w-full text-sm text-left">
                            <thead className="text-xs text-slate-400 uppercase bg-slate-800">
                                <tr>
                                    <th scope="col" className="px-4 py-2 w-1/4">Platform</th>
                                    <th scope="col" className="px-4 py-2 w-1/2">Filtering Criteria</th>
                                    <th scope="col" className="px-4 py-2 w-1/4">Rationale</th>
                                </tr>
                            </thead>
                            <tbody>
                                {strategy.leadSourceProtocol.map((protocol, i) => (
                                    <tr key={i} className="border-b border-slate-700 last:border-b-0">
                                        <td className="px-4 py-3 font-semibold text-cyan-300 align-top">{protocol.sourcePlatform}</td>
                                        <td className="px-4 py-3 align-top">
                                            <ul className="list-disc list-inside text-xs text-slate-300 space-y-1">
                                                {protocol.filteringCriteria.map((crit, j) => <li key={j}>{crit}</li>)}
                                            </ul>
                                        </td>
                                        <td className="px-4 py-3 text-xs text-slate-400 italic align-top">{protocol.rationale}</td>
                                    </tr>
                                ))}
                            </tbody>
                        </table>
                    </div>
                </div>

                <div className="pt-6 border-t border-slate-700 text-center">
                    <button
                        onClick={onGeneratePlaybook}
                        className="bg-gradient-to-r from-amber-500 to-yellow-400 text-black font-bold py-3 px-6 rounded-lg hover:from-amber-600 hover:to-yellow-500 transition duration-200 shadow-lg"
                    >
                        Generate Billionaire Playbook
                    </button>
                    <p className="text-xs text-slate-500 mt-2">Generate a high-leverage strategy to monetize this intelligence.</p>
                </div>
            </div>
        </div>
    );
};

export default MonetizationStrategyReport;