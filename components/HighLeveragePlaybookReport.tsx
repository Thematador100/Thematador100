
import React from 'react';
import { HighLeveragePlaybook, B2BHighLeveragePlaybook, B2CHighLeveragePlaybook, AlphaAcquisitionPlaybook, ClientAcquisitionEngine } from '../types';
import AlphaAcquisitionPlaybookReport from './AlphaAcquisitionPlaybookReport';
import SalesPitchAssetReport from './SalesPitchAssetReport';


interface HighLeveragePlaybookReportProps {
    playbook: HighLeveragePlaybook;
    analysisType: 'b2b' | 'b2c';
    onGenerateAcquisitionPlaybook: () => void;
    alphaAcquisitionPlaybook: AlphaAcquisitionPlaybook | null;
    onDeployAgents: (play: any, sourceReportType: string) => void;
    onGenerateAIVideoFoundry: (script: string) => void;
}

const ClientAcquisitionEngineReport: React.FC<{ engine: ClientAcquisitionEngine, onDeploy: () => void }> = ({ engine, onDeploy }) => (
    <div className="pt-6 border-t border-slate-700">
        <h3 className="text-lg font-semibold text-amber-300 mb-2 border-b border-amber-400/20 pb-1">24/7 Client Acquisition Engine</h3>
        <div className="bg-purple-900/20 border border-purple-500/50 p-4 rounded-lg space-y-4">
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
    </div>
);


const B2BPlaybook: React.FC<{playbook: B2BHighLeveragePlaybook}> = ({ playbook }) => (
     <div className="space-y-8">
        <div>
            <h3 className="text-lg font-semibold text-amber-300 mb-2 border-b border-amber-400/20 pb-1">Search & Acquisition Protocol</h3>
            <div className="bg-slate-900/50 p-4 rounded-lg border border-slate-700">
                <h4 className="font-bold text-yellow-300">Alpha Signal (The 4%):</h4>
                <p className="text-slate-300 text-sm mb-2">{playbook.searchAndAcquisitionProtocol.alphaSignal}</p>
                <h4 className="font-bold text-yellow-300">Leverage Point:</h4>
                <p className="text-slate-400 text-xs italic mb-4">{playbook.searchAndAcquisitionProtocol.leveragePoint}</p>
                <h4 className="font-bold text-yellow-300">Protocol Steps:</h4>
                <ol className="list-decimal list-inside text-xs text-slate-300 mt-2 space-y-1">
                    {playbook.searchAndAcquisitionProtocol.protocolSteps.map((item, i) => <li key={i}>{item}</li>)}
                </ol>
            </div>
        </div>
    </div>
);

const B2CPlaybook: React.FC<{playbook: B2CHighLeveragePlaybook}> = ({ playbook }) => (
    <div>
        <h3 className="text-lg font-semibold text-amber-300 mb-2 border-b border-amber-400/20 pb-1">Asymmetric Wedge Strategy</h3>
        <div className="bg-slate-900/50 p-4 rounded-lg border border-slate-700">
            <h4 className="font-bold text-yellow-300">Target Micro-Tribe:</h4>
            <p className="text-slate-300 text-sm mb-4">{playbook.asymmetricWedgeStrategy.targetMicroTribe}</p>
            <div className="bg-slate-950 p-3 rounded">
                <h4 className="font-bold text-yellow-300">The Asymmetric Wedge ({playbook.asymmetricWedgeStrategy.asymmetricWedge.wedgeType}):</h4>
                <p className="text-slate-300 text-sm font-semibold mb-2">{playbook.asymmetricWedgeStrategy.asymmetricWedge.idea}</p>
                <p className="text-slate-400 text-xs italic">{playbook.asymmetricWedgeStrategy.asymmetricWedge.rationale}</p>
            </div>
            <h4 className="font-bold text-yellow-300 mt-4">Infiltration Plan:</h4>
            <ol className="list-decimal list-inside text-xs text-slate-300 mt-2 space-y-1">
                {playbook.asymmetricWedgeStrategy.infiltrationPlan.map((item, i) => <li key={i}>{item}</li>)}
            </ol>
        </div>
    </div>
);


const HighLeveragePlaybookReport: React.FC<HighLeveragePlaybookReportProps> = ({ playbook, analysisType, onGenerateAcquisitionPlaybook, alphaAcquisitionPlaybook, onDeployAgents, onGenerateAIVideoFoundry }) => {
    return (
        <div className="mt-12 bg-slate-950 rounded-xl border-2 border-amber-400/50 shadow-2xl p-6 animate-fade-in">
            <h2 className="text-3xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-amber-400 to-yellow-300 text-center">
                The Billionaire Playbook
            </h2>
            <p className="text-center text-slate-400 mt-1 mb-8">An elite, high-leverage strategy for monetizing {analysisType.toUpperCase()} intelligence.</p>

            <div className="space-y-8">
                <div>
                    <h3 className="text-lg font-semibold text-amber-300 mb-2 border-b border-amber-400/20 pb-1">Positioning & Branding</h3>
                    <p className="text-slate-300"><strong className="font-bold text-slate-100">Persona:</strong> {playbook.brandingPersona}</p>
                    <blockquote className="mt-2 border-l-4 border-amber-500 pl-4 italic text-slate-300 text-sm bg-slate-900/50 p-3 rounded-r-lg">
                        "{playbook.positioningStatement}"
                    </blockquote>
                </div>
                
                {analysisType === 'b2b' 
                    ? <B2BPlaybook playbook={playbook as B2BHighLeveragePlaybook} /> 
                    : <B2CPlaybook playbook={playbook as B2CHighLeveragePlaybook} />
                }
                
                <ClientAcquisitionEngineReport 
                    engine={(playbook as B2BHighLeveragePlaybook).clientAcquisitionEngine} 
                    onDeploy={() => onDeployAgents((playbook as B2BHighLeveragePlaybook).clientAcquisitionEngine, 'B2B Playbook Acquisition Engine')}
                />
                
                <div>
                    <h3 className="text-lg font-semibold text-amber-300 mb-2 border-b border-amber-400/20 pb-1">Ideal High-Ticket Client Profile</h3>
                    <ul className="list-disc list-inside text-sm text-slate-300 space-y-1">
                        {playbook.idealClientProfile.map((item, i) => <li key={i}>{item}</li>)}
                    </ul>
                </div>
                
                <div>
                    <h3 className="text-lg font-semibold text-amber-300 mb-2 border-b border-amber-400/20 pb-1">The Irresistible Offer</h3>
                     <div className="bg-slate-900/50 p-4 rounded-lg border border-slate-700">
                        <h4 className="font-bold text-yellow-300">{playbook.irresistibleOffer.offerName}</h4>
                        <p className="text-amber-400 font-bold text-lg">{playbook.irresistibleOffer.pricePoint}</p>
                        <ul className="list-disc list-inside text-xs text-slate-400 mt-2 space-y-1">
                            {playbook.irresistibleOffer.components.map((item, i) => <li key={i}>{item}</li>)}
                        </ul>
                        <SalesPitchAssetReport asset={playbook.irresistibleOffer.salesPitchAsset} title="Offer Pitch Asset" />
                    </div>
                </div>

                 <div>
                    <h3 className="text-lg font-semibold text-amber-300 mb-2 border-b border-amber-400/20 pb-1">Marketing Funnel</h3>
                     <ol className="list-decimal list-inside text-sm text-slate-300 space-y-2">
                        {playbook.marketingFunnel.map((step, i) => <li key={i}><strong className="text-slate-100">Step {i+1}:</strong> {step}</li>)}
                    </ol>
                </div>

                <div className="pt-6 border-t border-amber-400/20 text-center">
                    <h3 className="text-lg font-semibold text-slate-200 mb-2">Final Wisdom</h3>
                    <p className="text-amber-300 font-bold text-xl italic">"{playbook.finalWisdom}"</p>
                </div>

                 {!alphaAcquisitionPlaybook && analysisType === 'b2b' && (
                    <div className="pt-8 border-t-2 border-dashed border-red-500/30 text-center">
                        <button
                            onClick={onGenerateAcquisitionPlaybook}
                            className="bg-gradient-to-r from-red-600 to-rose-500 text-white font-bold py-3 px-6 rounded-lg hover:from-red-700 hover:to-rose-600 transition duration-200 shadow-lg text-lg"
                        >
                            Generate Alpha Acquisition Playbook
                        </button>
                        <p className="text-xs text-slate-500 mt-2">This is the final step. Generate a concrete battle plan for finding and acquiring high-value leads at scale.</p>
                    </div>
                )}
            </div>
            {alphaAcquisitionPlaybook && <AlphaAcquisitionPlaybookReport playbook={alphaAcquisitionPlaybook} />}
        </div>
    );
};

export default HighLeveragePlaybookReport;