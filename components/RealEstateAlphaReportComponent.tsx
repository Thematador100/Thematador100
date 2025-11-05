

import React from 'react';
import { RealEstateAlphaReport, MarketOpportunityChart, DealEconomicsChart, SamplePropertyDossier, InvincibleCompanyFramework, ProprietaryAiSymbiosis, ValuationMultiplier } from '../types';

interface RealEstateAlphaReportProps {
    report: RealEstateAlphaReport;
    onDeployAgents: (play: any, sourceReportType: string) => void;
    onGenerateFirstStrike: () => void;
}

const Section: React.FC<{ title: string; children: React.ReactNode; icon?: string; accentColor?: string }> = ({ title, children, icon, accentColor = 'text-amber-400' }) => (
    <div className="pt-6 border-t border-slate-700">
        <h3 className={`text-xl font-semibold text-slate-200 mb-3 flex items-center`}>
             {icon && <span className={`text-2xl mr-3 ${accentColor}`}>{icon}</span>}
             {title}
        </h3>
        <div className="space-y-4">
            {children}
        </div>
    </div>
);

const StageCard: React.FC<{ stageNumber: number; title: string; summary: string; tasks: { taskName: string; description: string }[]; output: string; }> = ({ stageNumber, title, summary, tasks, output }) => (
    <div className="bg-slate-900/50 p-4 rounded-lg border border-slate-700">
        <h4 className="font-bold text-yellow-300">Stage {stageNumber}: {title}</h4>
        <p className="text-slate-400 text-xs mt-1 italic">{summary}</p>
        <div className="mt-3 pt-3 border-t border-slate-800">
             <p className="text-xs text-slate-400 uppercase font-semibold">AI Tasks:</p>
             <div className="mt-2 space-y-2">
                {tasks.map((task, i) => (
                    <div key={i} className="p-2 rounded bg-slate-950">
                        <h5 className="font-semibold text-slate-100 text-sm">{task.taskName}</h5>
                        <p className="text-slate-400 text-xs mt-1">{task.description}</p>
                    </div>
                ))}
             </div>
        </div>
         <div className="mt-3 pt-3 border-t border-slate-800">
             <p className="text-xs text-slate-400 uppercase font-semibold">Stage Output:</p>
             <p className="text-green-300 text-sm font-semibold mt-1">{output}</p>
        </div>
    </div>
);

const BarChart: React.FC<{ data: MarketOpportunityChart | DealEconomicsChart }> = ({ data }) => {
    // Find the maximum value in all datasets to set the scale of the chart
    const maxValue = Math.max(...data.datasets.flatMap(ds => ds.data), 0);
    // Create a safe maximum for the scale, rounding up to a "nice" number
    const chartMax = maxValue > 0 ? Math.ceil(maxValue / 10000) * 10000 : 1000;

    return (
        <div className="p-4 bg-slate-950 rounded-lg border border-slate-800 h-full flex flex-col">
            <h5 className="text-center text-xs font-semibold text-slate-300 mb-4">{data.title}</h5>
            <div className="flex-grow space-y-3 flex flex-col justify-around">
                {data.labels.map((label, index) => {
                    const value = data.datasets[0].data[index];
                    // Calculate the width of the bar as a percentage of the chart's max value
                    const widthPercentage = Math.max((value / chartMax) * 100, 0.5);

                    return (
                        <div key={index} className="flex items-center group">
                            <span 
                                className="text-xs text-slate-400 w-28 pr-2 text-right truncate group-hover:text-amber-300 transition-colors" 
                                title={label}
                            >
                                {label}
                            </span>
                            <div className="flex-grow bg-slate-700/50 rounded-full h-6 relative overflow-hidden">
                                <div
                                    className="bg-gradient-to-r from-amber-500 to-yellow-400 h-full rounded-full flex items-center justify-end pr-2 transition-all duration-500 ease-out"
                                    style={{ width: `${widthPercentage}%` }}
                                >
                                    <span className="text-black text-xs font-bold opacity-0 group-hover:opacity-100 transition-opacity">
                                        {value.toLocaleString()}
                                    </span>
                                </div>
                                <span className="absolute left-2 top-1/2 -translate-y-1/2 text-white text-xs font-semibold group-hover:opacity-0 transition-opacity">
                                    {value.toLocaleString()}
                                </span>
                            </div>
                        </div>
                    );
                })}
            </div>
        </div>
    );
};

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


const RealEstateAlphaReportComponent: React.FC<RealEstateAlphaReportProps> = ({ report, onDeployAgents, onGenerateFirstStrike }) => {
     const { esotericAlpha, uploadedDataAnalysis, dealFlowEngine, investorPlaybook, dataVisualizationSuite, aiAgentProtocol, proprietaryAiSymbiosis, valuationMultiplier } = report;

    return (
        <div className="max-w-4xl mx-auto bg-slate-800/70 rounded-xl border-2 border-amber-500/50 shadow-2xl p-6 sm:p-8 animate-fade-in">
            <div className="text-center">
                <h2 className="text-4xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-amber-400 to-yellow-300">
                    🏠 Real Estate Alpha Protocol
                </h2>
                <p className="text-slate-400 mt-2 mb-8">A Hedge Fund-Grade Blueprint for Dominating Niche Real Estate Markets.</p>
            </div>

            <div className="mt-8 space-y-8">
                <Section title={esotericAlpha.title} icon="🤫" accentColor="text-red-400">
                    <div className="bg-slate-900/50 p-4 rounded-lg border border-slate-700">
                        <p className="text-slate-300 text-sm mb-4">{esotericAlpha.description}</p>
                        <div className="space-y-3">
                            {esotericAlpha.strategies.map((s, i) => (
                                <div key={i} className="p-3 rounded bg-slate-950 border border-slate-800">
                                    <h5 className="font-semibold text-slate-100">{s.name} <span className="text-xs text-slate-500">({s.source})</span></h5>
                                    <p className="text-slate-400 text-xs mt-1">{s.strategy}</p>
                                </div>
                            ))}
                        </div>
                    </div>
                </Section>
                
                {uploadedDataAnalysis && (
                     <Section title="Proprietary Data Analysis" icon="📈">
                        <div className="bg-slate-900/50 p-4 rounded-lg border border-slate-700">
                            <h4 className="font-bold text-yellow-300">Summary of Your Data:</h4>
                            <p className="text-slate-300 text-sm mt-1">{uploadedDataAnalysis.summary}</p>
                             <h4 className="font-bold text-yellow-300 mt-3">Actionable Insights:</h4>
                             <ul className="list-disc list-inside text-sm text-slate-300 space-y-1 mt-2">
                                {uploadedDataAnalysis.insights.map((insight, i) => <li key={i}>{insight}</li>)}
                            </ul>
                        </div>
                    </Section>
                )}

                <Section title="The 'AI Rainmaker' Deal Flow Engine" icon="🌧️">
                    <StageCard stageNumber={1} title="The Harvester" {...dealFlowEngine.harvester} />
                    <StageCard stageNumber={2} title="The Validator" {...dealFlowEngine.validator} />
                    <StageCard stageNumber={3} title="The Dossier" {...dealFlowEngine.dossier} />
                </Section>

                 <Section title="Data & Visualizations" icon="📊">
                    <div className="grid grid-cols-1 lg:grid-cols-2 gap-4">
                        <BarChart data={dataVisualizationSuite.marketOpportunityChart} />
                        <BarChart data={dataVisualizationSuite.dealEconomicsChart} />
                    </div>
                     <div className="bg-slate-900/50 p-4 rounded-lg border border-slate-700 mt-4">
                        <h4 className="font-bold text-yellow-300 mb-3 text-center">Sample Property Dossier</h4>
                        <div className="grid grid-cols-1 md:grid-cols-2 gap-4 items-center">
                            <img src={dataVisualizationSuite.samplePropertyDossier.imageUrl} alt="Sample Property" className="rounded-lg w-full h-auto object-cover border-2 border-slate-700" />
                            <div>
                                <h5 className="font-semibold text-slate-100">{dataVisualizationSuite.samplePropertyDossier.address}</h5>
                                <div className="grid grid-cols-2 gap-2 text-xs mt-2">
                                    {dataVisualizationSuite.samplePropertyDossier.stats.map(s => <div key={s.label} className="bg-slate-800 p-1.5 rounded"><p className="text-slate-400">{s.label}</p><p className="font-bold text-slate-200">{s.value}</p></div>)}
                                </div>
                            </div>
                        </div>
                         <div className="mt-3 pt-3 border-t border-slate-800">
                             <h5 className="font-semibold text-slate-100 text-sm">Investment Thesis</h5>
                             <p className="text-xs text-slate-300 mt-1">{dataVisualizationSuite.samplePropertyDossier.investmentThesis}</p>
                        </div>
                    </div>
                </Section>
                
                <Section title={investorPlaybook.title} icon="♟️">
                     <ol className="list-decimal list-inside text-sm text-slate-300 space-y-3 bg-slate-900/50 p-4 rounded-lg border border-slate-700">
                        {investorPlaybook.steps.map((step, i) => <li key={i}><strong className="text-slate-100">{step.stepName}:</strong> {step.description}</li>)}
                    </ol>
                </Section>
                
                <Section title={proprietaryAiSymbiosis.title} icon="🤖" accentColor="text-indigo-400">
                    <ProprietaryAIReport symbiosis={proprietaryAiSymbiosis} />
                </Section>
                <Section title={valuationMultiplier.title} icon="💰" accentColor="text-green-400">
                    <ValuationMultiplierReport valuation={valuationMultiplier} />
                </Section>


                <div className="pt-8 mt-8 border-t-2 border-dashed border-purple-500/30 text-center no-print">
                    <h3 className="text-lg font-semibold text-purple-300 mb-2">AI Agent Protocol & Deployment</h3>
                    <p className="text-xs text-slate-400 mb-4 max-w-lg mx-auto">{aiAgentProtocol.protocol}</p>
                    <button
                        onClick={() => onDeployAgents(report, 'Real Estate Alpha Protocol')}
                        className="bg-purple-600 text-white font-bold py-3 px-6 rounded-lg hover:bg-purple-700 transition"
                    >
                        Deploy AI Agent Workforce
                    </button>
                    <p className="text-xs text-slate-500 mt-2">Instantiate your AI workforce to accelerate this protocol.</p>
                </div>

                <div className="mt-8 pt-8 border-t-2 border-dashed border-red-500/30 text-center no-print">
                    <button
                        onClick={onGenerateFirstStrike}
                        className="bg-gradient-to-r from-red-600 to-rose-500 text-white font-bold py-3 px-6 rounded-lg hover:from-red-700 hover:to-rose-600 transition duration-200 shadow-lg text-lg"
                    >
                        Generate First Strike Protocol
                    </button>
                    <p className="text-xs text-slate-500 mt-2">Bridge the gap from strategy to execution. Find your first 3-5 targets now.</p>
                </div>

            </div>
        </div>
    );
};

export default RealEstateAlphaReportComponent;