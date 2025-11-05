
import React from 'react';
import { AlphaAcquisitionPlaybook } from '../types';

interface AlphaAcquisitionPlaybookReportProps {
    playbook: AlphaAcquisitionPlaybook;
}

const AlphaAcquisitionPlaybookReport: React.FC<AlphaAcquisitionPlaybookReportProps> = ({ playbook }) => {
    return (
        <div className="mt-12 bg-slate-900 rounded-xl border-2 border-red-500/50 shadow-2xl p-6 animate-fade-in">
            <h2 className="text-3xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-red-500 to-rose-400 text-center">
                Alpha Acquisition Playbook
            </h2>
            <p className="text-center text-slate-400 mt-1 mb-8">A battle-tested protocol for acquiring high-value leads at scale.</p>

            <div className="space-y-8">
                {/* Channel Partnership Protocol */}
                <div>
                    <h3 className="text-xl font-semibold text-red-400 mb-3 border-b border-red-400/20 pb-2">Part 1: Channel Partnership Protocol</h3>
                    <div className="bg-slate-800/50 p-4 rounded-lg border border-slate-700 space-y-4">
                        <div>
                            <h4 className="font-bold text-rose-300">Ideal Partner Profile:</h4>
                            <p className="text-slate-300 text-sm">{playbook.channelPartnershipProtocol.idealPartnerProfile}</p>
                        </div>
                         <div>
                            <h4 className="font-bold text-rose-300">AI-Powered Search Queries (to find partners):</h4>
                            <div className="space-y-2 mt-2">
                                {playbook.channelPartnershipProtocol.aiPoweredSearchQueries.map((query, i) => (
                                    <pre key={i} className="text-slate-300 text-xs whitespace-pre-wrap font-mono bg-slate-950 p-2 rounded-md"><code>{query}</code></pre>
                                ))}
                            </div>
                        </div>
                         <div>
                            <h4 className="font-bold text-rose-300">The Irresistible Partnership Offer:</h4>
                             <blockquote className="mt-2 border-l-4 border-red-500 pl-4 italic text-slate-300 text-sm bg-slate-900/50 p-3 rounded-r-lg">
                                "{playbook.channelPartnershipProtocol.irresistiblePartnershipOffer}"
                            </blockquote>
                        </div>
                    </div>
                </div>

                {/* Buying Trigger Protocol */}
                 <div>
                    <h3 className="text-xl font-semibold text-red-400 mb-3 border-b border-red-400/20 pb-2">Part 2: Buying Trigger Protocol</h3>
                     <div className="space-y-4">
                        {playbook.buyingTriggerProtocol.map((trigger, i) => (
                             <div key={i} className="bg-slate-800/50 p-4 rounded-lg border border-slate-700">
                                <p className="text-sm font-semibold text-slate-300">Trigger Event #{i+1}: <span className="font-bold text-rose-300">{trigger.triggerEvent}</span></p>
                                <div className="mt-3">
                                    <h5 className="text-xs font-semibold text-slate-400 uppercase mb-1">Signal Intelligence (Where to find it)</h5>
                                    <p className="text-xs text-slate-300 bg-slate-900 p-2 rounded">{trigger.signalIntelligence}</p>
                                </div>
                                 <div className="mt-3">
                                    <h5 className="text-xs font-semibold text-slate-400 uppercase mb-1">Strategic Approach (How to act)</h5>
                                    <p className="text-xs text-slate-300 bg-slate-900 p-2 rounded">{trigger.strategicApproach}</p>
                                </div>
                            </div>
                        ))}
                     </div>
                </div>
            </div>
        </div>
    );
};

export default AlphaAcquisitionPlaybookReport;
