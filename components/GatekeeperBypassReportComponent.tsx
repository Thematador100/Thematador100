
import React from 'react';
import { GatekeeperBypassReport } from '../types';

interface GatekeeperBypassReportProps {
    report: GatekeeperBypassReport;
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

const Section: React.FC<{ title: string; children: React.ReactNode; icon?: string }> = ({ title, children, icon }) => (
    <div className="pt-6 border-t border-slate-700">
        <h3 className="text-xl font-semibold text-slate-200 mb-3 flex items-center">
             {icon && <span className="text-2xl mr-3 text-sky-400">{icon}</span>}
             {title}
        </h3>
        <div className="space-y-4">
            {children}
        </div>
    </div>
);

const GatekeeperBypassReportComponent: React.FC<GatekeeperBypassReportProps> = ({ report }) => {
    return (
        <div className="max-w-4xl mx-auto bg-slate-800/70 rounded-xl border-2 border-sky-500/50 shadow-2xl p-6 sm:p-8 animate-fade-in">
            <div className="text-center">
                 <h2 className="text-4xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-sky-400 to-blue-300">
                    🔑 Gatekeeper Bypass Protocol
                </h2>
                <p className="text-slate-400 mt-2 mb-8">An AI-generated strategy to reach high-value business opportunity seekers directly.</p>
            </div>
            
            <div className="mt-8 space-y-8">
                <Section title="Target Audience Deconstruction" icon="🎯">
                    <div className="bg-slate-900/50 p-4 rounded-lg border border-slate-700 space-y-4">
                        <div>
                            <h4 className="font-bold text-sky-300">Profile: Who are they?</h4>
                            <p className="text-slate-300 text-sm mt-1">{report.targetAudienceDeconstruction.profile}</p>
                        </div>
                        <div>
                            <h4 className="font-bold text-sky-300">Watering Holes: Where do they congregate?</h4>
                            <div className="flex flex-wrap gap-2 mt-2">
                                {report.targetAudienceDeconstruction.wateringHoles.map((hole, i) => (
                                    <span key={i} className="text-xs bg-slate-700 text-slate-300 px-2 py-1 rounded-full">{hole}</span>
                                ))}
                            </div>
                        </div>
                         <div>
                            <h4 className="font-bold text-sky-300">Pain Points & Desires: What do they want?</h4>
                            <ul className="list-disc list-inside text-sm text-slate-300 space-y-1 mt-1">
                                {report.targetAudienceDeconstruction.painPointsAndDesires.map((point, i) => <li key={i}>{point}</li>)}
                            </ul>
                        </div>
                    </div>
                </Section>

                <Section title="The 'Honeypot' Strategy" icon="🍯">
                     <div className="bg-slate-900/50 p-4 rounded-lg border border-slate-700">
                        <p className="text-xs text-sky-300 uppercase font-semibold">Core Concept:</p>
                        <p className="text-slate-300 text-sm mb-4">{report.honeypotStrategy.concept}</p>
                        
                        <h4 className="font-bold text-sky-300">Honeypot Ideas (to attract them):</h4>
                         <div className="mt-2 space-y-2">
                            {report.honeypotStrategy.honeypotIdeas.map((idea, i) => (
                                 <div key={i} className="p-3 rounded bg-slate-950 border border-slate-800">
                                    <h5 className="font-semibold text-slate-100">{idea.name}</h5>
                                    <p className="text-slate-400 text-xs mt-1">{idea.description}</p>
                                </div>
                            ))}
                         </div>
                         <h4 className="font-bold text-sky-300 mt-4">Distribution Plan:</h4>
                         <p className="text-slate-400 text-sm mt-1">{report.honeypotStrategy.distributionPlan}</p>
                     </div>
                </Section>
                
                <Section title="Profit-Split JV Protocol" icon="🤝">
                     <div className="bg-slate-900/50 p-4 rounded-lg border border-slate-700 space-y-4">
                        <div>
                            <h4 className="font-bold text-sky-300">Ideal JV Partner Profile:</h4>
                            <p className="text-slate-300 text-sm">{report.profitSplitJVProtocol.idealPartnerProfile}</p>
                        </div>
                         <div>
                            <h4 className="font-bold text-sky-300">The Irresistible Offer:</h4>
                            <blockquote className="mt-1 border-l-4 border-sky-500 pl-3 italic text-slate-300 text-xs bg-slate-950 p-2 rounded-r-lg">
                                {report.profitSplitJVProtocol.irresistibleOffer}
                            </blockquote>
                        </div>
                        <div>
                            <h4 className="font-bold text-sky-300">Outreach Script:</h4>
                            <pre className="text-slate-300 text-xs whitespace-pre-wrap font-mono bg-slate-950 p-3 rounded-md mt-1">
                                <code>{report.profitSplitJVProtocol.outreachScript}</code>
                            </pre>
                        </div>
                    </div>
                </Section>

                <Section title="Productization Roadmap" icon="🗺️">
                    <ol className="list-decimal list-inside text-sm text-slate-300 space-y-3 bg-slate-900/50 p-4 rounded-lg border border-slate-700">
                        {report.productizationRoadmap.map((step, i) => <li key={i}>{step}</li>)}
                    </ol>
                </Section>
                
                <Methodology models={report.methodology} />
            </div>
        </div>
    );
};

export default GatekeeperBypassReportComponent;
