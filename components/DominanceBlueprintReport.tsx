

import React from 'react';
import { DominanceBlueprint, PhyGitalVideoStrategy, ProprietaryAiSymbiosis, SEOCompetitorAnalysis, UnfairAdvantageSalesProtocol, ValuationMultiplier, ClientAcquisitionEngine } from '../types';
import VideoWedgeStrategyReport from './VideoWedgeStrategyReport'; // Re-using for display
import SalesPitchAssetReport from './SalesPitchAssetReport';


interface DominanceBlueprintReportProps {
    blueprint: DominanceBlueprint;
    onGenerateMarketMap: () => void;
    phyGitalVideoStrategy: PhyGitalVideoStrategy | null;
    onGeneratePhygitalDemoVideo: () => void;
    onDeployAgents: (play: any, sourceReportType: string) => void;
    onGenerateFirstStrike: () => void;
}

const Methodology: React.FC<{ models: string[] | undefined }> = ({ models }) => {
    if (!models || models.length === 0) return null;
    return (
        <div className="mt-8 pt-6 border-t border-slate-700">
            <h4 className="text-xs font-semibold text-slate-500 uppercase tracking-wider mb-2">Analytical Methodology</h4>
            <div className="flex flex-wrap gap-2">
                {models.map(model => (
                    <span key={model} className="text-xs text-slate-400 bg-slate-950/50 border border-slate-700 rounded px-2 py-0.5">{model}</span>
                ))}
            </div>
        </div>
    );
};

const Section: React.FC<{ title: string; children: React.ReactNode; icon?: string; titleColor?: string }> = ({ title, children, icon, titleColor = 'text-slate-200' }) => (
    <div className="pt-6 border-t border-slate-700">
        <h3 className={`text-xl font-semibold ${titleColor} mb-3 flex items-center`}>
             {icon && <span className="text-2xl mr-3 text-amber-400">{icon}</span>}
             {title}
        </h3>
        <div className="space-y-4">
            {children}
        </div>
    </div>
);

const PhyGitalVideoStrategyReport: React.FC<{ strategy: PhyGitalVideoStrategy }> = ({ strategy }) => (
    <div className="animate-fade-in space-y-6 mt-6">
        <h3 className="text-2xl font-bold text-center text-transparent bg-clip-text bg-gradient-to-r from-pink-400 to-purple-400">
            🎬 "Billy Mays" Demo Video Strategy
        </h3>
        <div className="bg-slate-900/50 p-4 rounded-lg border border-slate-700">
            <p><strong>Title:</strong> {strategy.videoTitle}</p>
            <p><strong>Target Audience:</strong> {strategy.targetAudience}</p>
            <p><strong>Core Message:</strong> "{strategy.coreMessage}"</p>
        </div>
        {/* Re-using VideoWedgeStrategyReport for consistent script display */}
        <VideoWedgeStrategyReport strategy={{
            script: strategy.script,
            videoGenerationPrompt: strategy.aiVideoPrompt,
            distributionStrategy: strategy.distributionPlan,
        }} />
    </div>
);

const ClientAcquisitionEngineReport: React.FC<{ engine: ClientAcquisitionEngine, onDeploy: () => void }> = ({ engine, onDeploy }) => (
    <div className="bg-purple-900/20 border border-purple-500/50 p-4 rounded-lg space-y-4">
        <h4 className="text-xl font-bold text-purple-300 text-center">24/7 Client Acquisition Engine</h4>
        
        <div className="bg-slate-900/50 p-3 rounded-lg">
            <h5 className="font-bold text-cyan-300">Traction Channel Analysis (Weinberg)</h5>
            <div className="mt-2 space-y-2">
                {engine.tractionChannelAnalysis.map((channel, i) => (
                    <div key={i} className="p-2 rounded bg-slate-950">
                        <p className="font-semibold text-slate-100 text-sm">{channel.channel}</p>
                        <p className="text-slate-400 text-xs mt-1 italic">{channel.rationale}</p>
                    </div>
                ))}
            </div>
        </div>
        
        <div className="bg-slate-900/50 p-3 rounded-lg">
            <h5 className="font-bold text-cyan-300">"Dream 100" Protocol (Brunson)</h5>
             <div className="mt-2 space-y-2">
                {engine.dream100Protocol.map((target, i) => (
                    <div key={i} className="p-2 rounded bg-slate-950">
                        <p className="font-semibold text-slate-100 text-sm">{target.targetDescription}</p>
                        <p className="text-slate-400 text-xs mt-1 italic">{target.rationale}</p>
                    </div>
                ))}
            </div>
        </div>
        
        <div className="bg-slate-900/50 p-3 rounded-lg">
            <h5 className="font-bold text-cyan-300">Strategic Partnership Protocol (Serling)</h5>
            <p className="text-xs text-slate-400 mt-1">Partner Profile: <span className="font-semibold text-slate-200">{engine.strategicPartnershipProtocol.idealPartnerProfile}</span></p>
            <p className="text-xs text-slate-400 mt-1">Irresistible Offer: <span className="font-semibold text-slate-200">"{engine.strategicPartnershipProtocol.irresistibleOffer}"</span></p>
            <blockquote className="mt-2 border-l-2 border-cyan-400 pl-2 text-xs text-slate-300 italic">Outreach Angle: {engine.strategicPartnershipProtocol.outreachAngle}</blockquote>
        </div>
        
        <div className="text-center pt-4 border-t border-slate-800">
            <button
                onClick={onDeploy}
                className="bg-purple-600 text-white font-bold py-2 px-4 rounded-md hover:bg-purple-700 transition"
            >
                Deploy Acquisition Agents
            </button>
        </div>
    </div>
);


const UnfairAdvantageSalesProtocolReport: React.FC<{ protocol: UnfairAdvantageSalesProtocol }> = ({ protocol }) => (
    <div className="bg-red-900/20 border border-red-500/50 p-4 rounded-lg space-y-4">
        <h4 className="text-xl font-bold text-red-300 text-center">Unfair Advantage Sales Protocol</h4>
        {/* Agora Angle */}
        <div className="bg-slate-900/50 p-3 rounded-lg">
            <h5 className="font-bold text-rose-300">The Agora Angle (Market-Aware Copy)</h5>
            <p className="text-xs text-slate-400 mt-1">Sophistication: <span className="font-semibold text-slate-200">{protocol.agoraAngle.marketSophisticationLevel}</span></p>
            <p className="text-xs text-slate-400 mt-1">Headline/Hook: <span className="font-semibold text-slate-200">"{protocol.agoraAngle.headlineAndHook}"</span></p>
            <blockquote className="mt-2 border-l-2 border-rose-400 pl-2 text-xs text-slate-300 italic">Core Angle: {protocol.agoraAngle.coreBodyCopyAngle}</blockquote>
        </div>
        {/* Belfort Straight Line */}
        <div className="bg-slate-900/50 p-3 rounded-lg">
            <h5 className="font-bold text-rose-300">The Belfort "Straight Line" Sequence</h5>
            <p className="text-xs text-slate-400 mt-1 italic">Opening: "{protocol.belfortStraightLine.openingScript}"</p>
            <p className="text-xs text-slate-400 mt-2">Intel Questions:</p>
            <ul className="list-disc list-inside text-xs text-slate-300 space-y-1 mt-1 pl-2">
                {protocol.belfortStraightLine.intelligenceGatheringQuestions.map((q, i) => <li key={i}>{q}</li>)}
            </ul>
        </div>
        {/* Fladlien Offer Stack */}
        <div className="bg-slate-900/50 p-3 rounded-lg">
            <h5 className="font-bold text-rose-300">The Fladlien/Popeil Irresistible Offer Stack</h5>
            <p className="text-xs text-slate-200 mt-1 font-semibold">Core: {protocol.fladlienOfferStack.coreOffer}</p>
            <div className="mt-2 space-y-1">
                {protocol.fladlienOfferStack.premiumBonuses.map((b, i) => <p key={i} className="text-xs text-slate-300">+ {b.name} <span className="text-amber-300">(Value: {b.value})</span></p>)}
            </div>
            <p className="text-xs text-slate-200 mt-2">Risk Reversal: <span className="font-semibold text-green-300">{protocol.fladlienOfferStack.riskReversal}</span></p>
            <p className="text-xs text-slate-200 mt-1">Urgency: <span className="font-semibold text-yellow-300">{protocol.fladlienOfferStack.urgencyDriver}</span></p>
        </div>
        {/* Bleeding Neck */}
        <div className="bg-slate-900/50 p-3 rounded-lg">
            <h5 className="font-bold text-rose-300">"Bleeding Neck" Qualification Filter</h5>
             <ul className="list-disc list-inside text-xs text-slate-300 space-y-1 mt-1">
                {protocol.bleedingNeckQualification.filterQuestions.map((q, i) => <li key={i}>{q}</li>)}
            </ul>
        </div>
    </div>
);

const ProprietaryAIReport: React.FC<{ symbiosis: ProprietaryAiSymbiosis }> = ({ symbiosis }) => (
     <div className="bg-indigo-900/20 border border-indigo-500/50 p-4 rounded-lg space-y-4">
        <h4 className="text-xl font-bold text-indigo-300 text-center">{symbiosis.title}</h4>
        
        {/* AI Advancement Core */}
        <div className="bg-slate-900/50 p-3 rounded-lg">
            <h5 className="font-bold text-cyan-300">AI Advancement Core (The "Skunkworks")</h5>
            <p className="text-xs text-slate-400 mt-1">{symbiosis.aiAdvancementCore.description}</p>
            <p className="text-xs text-slate-300 mt-2">Mission: <span className="italic">{symbiosis.aiAdvancementCore.mission}</span></p>
            <p className="text-xs text-slate-300 mt-2">Team: <span className="font-semibold">{symbiosis.aiAdvancementCore.teamComposition.join(', ')}</span></p>
        </div>
        
        {/* Weaponized Methodologies */}
        <div className="bg-slate-900/50 p-3 rounded-lg">
            <h5 className="font-bold text-cyan-300">Weaponized Methodologies ("SWAT Team" Tools)</h5>
            <div className="space-y-3 mt-2">
                {symbiosis.weaponizedMethodologies.map((tool, index) => (
                    <div key={index} className="p-2 bg-slate-950 rounded border border-slate-800">
                        <p className="text-sm text-slate-200 font-semibold">{tool.toolName} <span className="text-xs text-slate-500">({tool.vertical})</span></p>
                        <p className="text-xs text-slate-400 mt-1">{tool.description}</p>
                        <p className="text-xs text-slate-300 mt-2">Impact: <span className="italic">{tool.impact}</span></p>
                    </div>
                ))}
            </div>
        </div>
        
        {/* Talent Academy Transformation */}
        <div className="bg-slate-900/50 p-3 rounded-lg">
            <h5 className="font-bold text-cyan-300">Talent Academy Transformation</h5>
            <p className="text-xs text-slate-400 mt-1">{symbiosis.talentAcademyTransformation.description}</p>
            <div className="mt-2 p-2 bg-slate-950 rounded">
                <p className="text-xs text-slate-200 font-semibold">{symbiosis.talentAcademyTransformation.aiTutorsAndSimulators.name}</p>
                <p className="text-xs text-slate-400">{symbiosis.talentAcademyTransformation.aiTutorsAndSimulators.description}</p>
            </div>
             <p className="text-xs text-slate-300 mt-2">Vetting: <span className="italic">{symbiosis.talentAcademyTransformation.aiPoweredVetting}</span></p>
             <p className="text-xs text-slate-300 mt-2">Impact: <span className="italic">{symbiosis.talentAcademyTransformation.impact}</span></p>
        </div>
        
        {/* AI Only Products */}
        <div className="bg-slate-900/50 p-3 rounded-lg">
            <h5 className="font-bold text-cyan-300">New AI-Only Products (Data Moat Monetization)</h5>
            <p className="text-xs text-slate-400 mt-1">{symbiosis.aiOnlyProducts.dataMoatStrategy}</p>
            <div className="mt-2 p-2 bg-slate-950 rounded">
                <p className="text-sm text-slate-200 font-semibold">{symbiosis.aiOnlyProducts.exampleProduct.name}</p>
                <p className="text-xs text-slate-400">{symbiosis.aiOnlyProducts.exampleProduct.description}</p>
                <p className="text-xs text-slate-300 mt-2">Impact: <span className="italic">{symbiosis.aiOnlyProducts.exampleProduct.impact}</span></p>
            </div>
        </div>
    </div>
);

const ValuationMultiplierReport: React.FC<{ valuation: ValuationMultiplier }> = ({ valuation }) => (
    <div className="bg-green-900/20 border border-green-500/50 p-4 rounded-lg space-y-4">
        <h4 className="text-xl font-bold text-green-300 text-center">{valuation.title}</h4>
        <p className="text-center text-xs text-slate-400 -mt-2">{valuation.multipleExpansionEvent}</p>
        <div className="bg-slate-900/50 p-3 rounded-lg">
            <h5 className="font-bold text-lime-300">Valuation Impact Analysis (The "Multiple Stack")</h5>
            <div className="mt-2 space-y-2">
                <p className="text-xs text-slate-300">Base Multiple (Services): <span className="font-semibold text-lg text-slate-100">{valuation.valuationImpactAnalysis.baseMultiple}</span></p>
                {valuation.valuationImpactAnalysis.premiumMultiples.map((p, i) => (
                    <div key={i} className="pl-4 border-l-2 border-slate-700">
                        <p className="text-xs text-slate-300">+ {p.name}: <span className="font-semibold text-lg text-slate-100">{p.value}</span></p>
                        <p className="text-xs text-slate-400 italic">{p.rationale}</p>
                    </div>
                ))}
                <p className="text-sm text-slate-100 pt-2 border-t border-slate-700">Final Multiple Range: <span className="font-bold text-2xl text-green-400">{valuation.valuationImpactAnalysis.finalMultipleRange}</span></p>
            </div>
            <div className="mt-3 pt-3 border-t border-slate-700">
                <h5 className="text-xs text-lime-300 uppercase font-semibold">Example Valuation:</h5>
                <p className="text-xs text-slate-300 italic mt-1">{valuation.valuationImpactAnalysis.exampleValuation}</p>
            </div>
        </div>
    </div>
);

const SEOCompetitorAnalysisReport: React.FC<{ analysis: SEOCompetitorAnalysis }> = ({ analysis }) => (
    <div className="mt-4 bg-slate-950 p-4 rounded-lg border-2 border-dashed border-purple-500/50">
        <h5 className="font-bold text-purple-300 text-center">SEO Counter-Intelligence Report</h5>
        <p className="text-xs text-slate-400 text-center mb-4">vs. {analysis.competitorUrl}</p>
        
        <div>
            <h6 className="font-semibold text-slate-200 text-sm">Identified Weaknesses:</h6>
            <div className="mt-2 space-y-2">
                {analysis.weaknesses.map((item, i) => (
                    <div key={i} className="p-2 bg-slate-800 rounded">
                        <p className="font-semibold text-slate-300 text-xs">{item.weakness}</p>
                        <p className="text-slate-400 text-[10px] italic mt-1">{item.explanation}</p>
                    </div>
                ))}
            </div>
        </div>

        <div className="mt-4">
            <h6 className="font-semibold text-slate-200 text-sm">Recommended Counter-Strategies:</h6>
            <div className="mt-2 space-y-2">
                {analysis.counterStrategies.map((item, i) => (
                    <div key={i} className="p-2 bg-slate-800 rounded">
                        <p className="font-semibold text-slate-300 text-xs">{item.strategy}</p>
                        <ol className="list-decimal list-inside text-slate-400 text-[10px] mt-1 space-y-1 pl-2">
                            {item.actionableSteps.map((step, j) => <li key={j}>{step}</li>)}
                        </ol>
                    </div>
                ))}
            </div>
        </div>
    </div>
);


const DominanceBlueprintReport: React.FC<DominanceBlueprintReportProps> = ({ blueprint, onGenerateMarketMap, phyGitalVideoStrategy, onGeneratePhygitalDemoVideo, onDeployAgents, onGenerateFirstStrike }) => {
    return (
        <div className="max-w-4xl mx-auto bg-slate-800/70 rounded-xl border-2 border-amber-500/50 shadow-2xl p-6 sm:p-8 animate-fade-in">
            <div className="text-center">
                 <h2 className="text-4xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-amber-400 to-yellow-300">
                    👑 Dominance Blueprint
                </h2>
                <p className="text-slate-400 mt-2 mb-8">A God-Tier Strategic Plan for Absolute Market Domination.</p>
                {blueprint.conceptualImageUrl && (
                    <img src={blueprint.conceptualImageUrl} alt="Conceptual image for the business" className="rounded-lg mb-6 border-2 border-slate-700 shadow-lg" />
                )}
                 <div className="bg-slate-900/50 p-4 rounded-lg border border-slate-700">
                    <h3 className="text-lg font-semibold text-amber-300">Executive Summary</h3>
                    <p className="text-slate-300 text-sm mt-2">{blueprint.executiveSummary}</p>
                </div>
            </div>
            
            <div className="mt-8 space-y-8">
                <Section title="Market Forecast & Future Trends" icon="🔮">
                    {blueprint.marketForecast.map((forecast, i) => (
                        <div key={i} className="bg-slate-900/50 p-3 rounded-lg border border-slate-700">
                            <h4 className="font-bold text-yellow-300">{forecast.trend}</h4>
                            <p className="text-slate-400 text-xs mt-1 italic">{forecast.rationale}</p>
                        </div>
                    ))}
                </Section>

                <Section title="Asymmetric Domination Strategy" icon="🎯">
                     <div className="bg-slate-900/50 p-4 rounded-lg border border-slate-700">
                        <p className="text-xs text-yellow-300 uppercase font-semibold">Core Strategy:</p>
                        <p className="text-slate-200 text-sm font-semibold mb-3">{blueprint.asymmetricDominationStrategy.coreStrategy}</p>
                        <p className="text-xs text-slate-400 italic">{blueprint.asymmetricDominationStrategy.rationale}</p>
                     </div>
                     <div className="bg-slate-900/50 p-4 rounded-lg border border-slate-700">
                         <p className="text-xs text-yellow-300 uppercase font-semibold">Clever Tactics:</p>
                         <div className="mt-2 space-y-2">
                            {blueprint.asymmetricDominationStrategy.cleverTactics.map((tactic, i) => (
                                 <div key={i} className="p-2 rounded bg-slate-950">
                                    <h5 className="font-semibold text-slate-100">{tactic.tacticName}</h5>
                                    <p className="text-slate-400 text-xs mt-1">{tactic.description}</p>
                                </div>
                            ))}
                         </div>
                     </div>
                </Section>
                
                <Section title="Unfair Advantage Sales Protocol" icon="🔥" titleColor="text-red-400">
                    <UnfairAdvantageSalesProtocolReport protocol={blueprint.unfairAdvantageSalesProtocol} />
                </Section>

                <Section title="24/7 Client Acquisition Engine" icon="🤖" titleColor="text-purple-400">
                    <ClientAcquisitionEngineReport 
                        engine={blueprint.clientAcquisitionEngine} 
                        onDeploy={() => onDeployAgents(blueprint.clientAcquisitionEngine, 'Dominance Blueprint Acquisition Engine')}
                    />
                </Section>

                <Section title="First 100 Customers Protocol" icon="🚀">
                    <ol className="list-decimal list-inside text-sm text-slate-300 space-y-2 bg-slate-900/50 p-4 rounded-lg border border-slate-700">
                        {blueprint.first100CustomersProtocol.map((step, i) => <li key={i}>{step}</li>)}
                    </ol>
                </Section>

                 <Section title="Moat Building Sequence" icon="🏰">
                    {blueprint.moatBuildingSequence.map((phase, i) => (
                         <div key={i} className="bg-slate-900/50 p-3 rounded-lg border border-slate-700">
                            <h4 className="font-bold text-yellow-300">{phase.phase}</h4>
                            <p className="text-slate-300 text-sm mt-1">{phase.description}</p>
                        </div>
                    ))}
                </Section>
                
                 {blueprint.phygitalSynergyProtocol && (
                    <Section title="Phy-gital Synergy Protocol" icon="🔗">
                        <div className="bg-slate-900/50 p-4 rounded-lg border border-slate-700 space-y-3">
                            <div>
                                <h4 className="font-bold text-yellow-300">Field Operator Toolkit:</h4>
                                <ul className="list-disc list-inside text-xs text-slate-300 mt-1">
                                    {blueprint.phygitalSynergyProtocol.fieldOperatorToolkit.map(item => <li key={item}>{item}</li>)}
                                </ul>
                            </div>
                            <div>
                                <h4 className="font-bold text-yellow-300">The Data Flywheel Effect:</h4>
                                <p className="text-slate-400 text-xs italic mt-1">{blueprint.phygitalSynergyProtocol.dataFlywheelEffect}</p>
                            </div>
                        </div>
                    </Section>
                )}

                 <Section title="AI-Powered SEO Protocol" icon="📈">
                    <div className="bg-slate-900/50 p-4 rounded-lg border border-slate-700 space-y-4">
                        <div>
                            <h4 className="font-bold text-yellow-300 text-sm">Keyword Cluster Analysis</h4>
                             <div className="space-y-2 mt-2">
                                {blueprint.aiPoweredSEOProtocol.keywordClusterAnalysis.map(cluster => (
                                    <div key={cluster.clusterName} className="p-2 bg-slate-950 rounded border border-slate-800">
                                        <div className="flex justify-between items-center">
                                            <p className="font-semibold text-slate-200 text-xs">{cluster.clusterName}</p>
                                            <span className="text-[10px] bg-slate-700 text-slate-300 px-2 py-0.5 rounded-full">{cluster.searchIntent}</span>
                                        </div>
                                        <p className="text-slate-400 text-[10px] mt-1">{cluster.keywords.join(', ')}</p>
                                    </div>
                                ))}
                            </div>
                        </div>
                        <div>
                            <h4 className="font-bold text-yellow-300 text-sm">Programmatic SEO Angle</h4>
                            <div className="p-2 bg-slate-950 rounded mt-1">
                                <p className="font-semibold text-slate-200 text-xs">{blueprint.aiPoweredSEOProtocol.programmaticSEOAngle.angleName}</p>
                                <p className="text-slate-400 text-[10px] mt-1">{blueprint.aiPoweredSEOProtocol.programmaticSEOAngle.description}</p>
                            </div>
                        </div>
                    </div>
                     {blueprint.aiPoweredSEOProtocol.competitorAnalysis && (
                        <SEOCompetitorAnalysisReport analysis={blueprint.aiPoweredSEOProtocol.competitorAnalysis} />
                    )}
                </Section>

                <Section title={blueprint.proprietaryAiSymbiosis.title} icon="🤖" titleColor="text-indigo-400">
                    <ProprietaryAIReport symbiosis={blueprint.proprietaryAiSymbiosis} />
                </Section>
                 <Section title={blueprint.valuationMultiplier.title} icon="💰" titleColor="text-green-400">
                    <ValuationMultiplierReport valuation={blueprint.valuationMultiplier} />
                </Section>

                <Section title="Consulting & Monetization Angle" icon=" briefcase">
                    <div className="bg-slate-900/50 p-4 rounded-lg border border-slate-700 space-y-4">
                        <div>
                           <p className="text-xs text-cyan-300 uppercase font-semibold">Your Positioning Statement (as Consultant):</p>
                           <blockquote className="mt-1 border-l-4 border-cyan-500 pl-3 italic text-slate-300 text-xs bg-slate-950 p-2 rounded-r-lg">{blueprint.consultingAngle.positioningStatement}</blockquote>
                        </div>
                        <div>
                           <p className="text-xs text-cyan-300 uppercase font-semibold">Prospect's New Positioning:</p>
                           <p className="text-slate-300 text-sm">{blueprint.consultingAngle.prospectPositioning}</p>
                        </div>
                        <div>
                           <p className="text-xs text-cyan-300 uppercase font-semibold">Outreach Angle:</p>
                           <p className="text-slate-300 text-sm">{blueprint.consultingAngle.outreachAngle}</p>
                        </div>
                        <div>
                           <p className="text-xs text-cyan-300 uppercase font-semibold">Pricing Recommendation:</p>
                           <div className="mt-2 space-y-2">
                             {blueprint.consultingAngle.pricingRecommendation.map((tier, i) => (
                                <div key={i} className="p-2 rounded bg-slate-950 flex justify-between items-center">
                                    <div>
                                        <h5 className="font-semibold text-slate-100">{tier.tier}</h5>
                                        <p className="text-slate-400 text-xs mt-1">{tier.description}</p>
                                    </div>
                                    <p className="font-bold text-lg text-amber-300">{tier.price}</p>
                                </div>
                             ))}
                           </div>
                        </div>
                         <SalesPitchAssetReport asset={blueprint.consultingAngle.salesPitchAsset} title="Consulting Pitch Asset" />
                    </div>
                </Section>
                
                <Methodology models={blueprint.methodology} />

                {blueprint.phygitalSynergyProtocol && (
                    <div className="pt-8 mt-8 border-t-2 border-dashed border-pink-500/30 text-center no-print">
                        {!phyGitalVideoStrategy ? (
                             <button
                                onClick={onGeneratePhygitalDemoVideo}
                                className="bg-gradient-to-r from-pink-600 to-purple-500 text-white font-bold py-3 px-6 rounded-lg hover:from-pink-700 hover:to-purple-600 transition duration-200 shadow-lg"
                            >
                                Generate "Billy Mays" Style Demo Video
                            </button>
                        ) : (
                           <PhyGitalVideoStrategyReport strategy={phyGitalVideoStrategy} />
                        )}
                        <p className="text-xs text-slate-500 mt-2">Generate a high-energy, direct-response video script and AI prompt to demonstrate your service.</p>
                    </div>
                )}

                 <div className="mt-8 pt-8 border-t-2 border-dashed border-cyan-500/30 text-center no-print">
                    <button
                        onClick={onGenerateMarketMap}
                        className="bg-gradient-to-r from-cyan-500 to-blue-500 text-white font-bold py-3 px-6 rounded-lg hover:from-cyan-600 hover:to-blue-600 transition duration-200 shadow-lg"
                    >
                        Generate Full Market Map
                    </button>
                    <p className="text-xs text-slate-500 mt-2">Expand this blueprint to the entire market landscape.</p>
                </div>

                <div className="mt-8 pt-8 border-t-2 border-dashed border-red-500/30 text-center no-print">
                    <button
                        onClick={onGenerateFirstStrike}
                        className="bg-gradient-to-r from-red-600 to-rose-500 text-white font-bold py-3 px-6 rounded-lg hover:from-red-700 hover:to-rose-600 transition duration-200 shadow-lg text-lg"
                    >
                        Generate First Strike Protocol
                    </button>
                    <p className="text-xs text-slate-500 mt-2">Bridge the gap from strategy to execution. The AI will find your first 3-5 hyper-targeted prospects to contact now.</p>
                </div>
            </div>
        </div>
    );
};

export default DominanceBlueprintReport;