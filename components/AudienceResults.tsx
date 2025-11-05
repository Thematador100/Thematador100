import React, { useState, useMemo } from 'react';
import jsPDF from 'jspdf';
import html2canvas from 'html2canvas';
import { 
    AnalysisResult, 
    DiscoveredAudience, 
    ScoredProspect, 
    MonetizationStrategy, 
    HighLeveragePlaybook,
    B2CDiscoveredAudience,
    OpportunityBrief,
    CompetitiveDisplacementBrief,
    AlphaAcquisitionPlaybook,
    VideoStrategy,
    AIVentureBlueprint,
    AICode,
    LookalikeProspect,
    B2CMarketDeconstruction,
    DominanceBlueprint,
    PhyGitalVideoStrategy,
    LandingPageBlueprint,
    AlphaSignalReport,
    ChimericAgentReport,
    LoneWolfReport,
    GatekeeperBypassReport,
    CashflowProtocolReport,
    RealEstateAlphaReport,
    ImageFoundryResult,
    SalesCopilotResponse,
    SovereignEngineReport,
    ArchimedesProtocolReport,
    FirstStrikeReport,
    AIVideoFoundryReport,
    StrategicBrief,
    MarketMap
} from '../types';
import LeadCard from './LeadCard';
import DiscoveredAudienceCard from './DiscoveredAudienceCard';
import HowToFindLeadsGuide from './HowToFindLeadsGuide';
import ProspectScorer from './ProspectScorer';
import MonetizationStrategyReport from './MonetizationStrategyReport';
import HighLeveragePlaybookReport from './HighLeveragePlaybookReport';
import OpportunityBriefReport from './OpportunityBriefReport';
import CompetitiveDisplacementReport from './CompetitiveDisplacementReport';
import VideoWedgeStrategyReport from './VideoWedgeStrategyReport';
import AIVentureBlueprintReport from './AIVentureBlueprintReport';
import DominanceBlueprintReport from './DominanceBlueprintReport';
import AlphaSignalReportComponent from './AlphaSignalReport';
import ChimericAgentReportComponent from './ChimericAgentReport';
import LoneWolfReportComponent from './LoneWolfReport';
import GatekeeperBypassReportComponent from './GatekeeperBypassReportComponent';
import B2CDeconReport from './B2CDeconReport';
import MarketMapReport from './MarketMapReport';
import CashflowProtocolReportComponent from './CashflowProtocolReportComponent';
import RealEstateAlphaReportComponent from './RealEstateAlphaReportComponent';
import ImageFoundryReport from './ImageFoundryReport';
import SalesCopilotReportComponent from './SalesCopilotReportComponent';
import SovereignEngineReportComponent from './SovereignEngineReport';
import ArchimedesProtocolReportComponent from './ArchimedesProtocolReport';
import { FirstStrikeReportComponent } from './FirstStrikeReport';
import AIVideoFoundryReportComponent from './AIVideoFoundryReport';
import B2BAnalysisReport from './B2BAnalysisReport';


interface AudienceResultsProps {
  analysisType: Exclude<StrategicBrief['analysisType'], 'veoVideo'>;
  analysis: AnalysisResult | null;
  discovery: DiscoveredAudience[] | null;
  b2cDiscovery: B2CDiscoveredAudience[] | null;
  b2cDeconResult: B2CMarketDeconstruction | null;
  opportunityBrief: OpportunityBrief | null;
  competitiveDisplacementBrief: CompetitiveDisplacementBrief | null;
  aiVentureBlueprint: AIVentureBlueprint | null;
  dominanceBlueprint: DominanceBlueprint | null;
  alphaSignalReport: AlphaSignalReport | null;
  chimericAgentReport: ChimericAgentReport | null;
  loneWolfReport: LoneWolfReport | null;
  gatekeeperBypassReport: GatekeeperBypassReport | null;
  cashflowProtocolReport: CashflowProtocolReport | null;
  realEstateAlphaReport: RealEstateAlphaReport | null;
  imageFoundryResult: ImageFoundryResult | null;
  salesCopilotReport: SalesCopilotResponse | null;
  sovereignEngineReport: SovereignEngineReport | null;
  archimedesProtocolReport: ArchimedesProtocolReport | null;
  firstStrikeReport: FirstStrikeReport | null;
  scoredProspects: ScoredProspect[] | null;
  monetizationStrategy: MonetizationStrategy | null;
  playbook: HighLeveragePlaybook | null;
  alphaAcquisitionPlaybook: AlphaAcquisitionPlaybook | null;
  onScore: (prospectsToScore: string) => void;
  onMonetize: (audience: DiscoveredAudience | B2CDiscoveredAudience) => void;
  onGeneratePlaybook: () => void;
  onGenerateAcquisitionPlaybook: () => void;
  onRediscover: () => void;
  onValidateLeads: (prospects: LookalikeProspect[]) => void;
  activeAudience: DiscoveredAudience | B2CDiscoveredAudience | null;
  videoStrategy: VideoStrategy | null;
  phyGitalVideoStrategy: PhyGitalVideoStrategy | null;
  onGenerateVideoWedge: () => void;
  onGeneratePhygitalDemoVideo: () => void;
  generatedCode: AICode | null;
  onGenerateCode: (ultimatePrompt: string) => void;
  onGenerateCodeFromOpportunity: (brief: OpportunityBrief) => void;
  landingPageBlueprint: LandingPageBlueprint | null;
  landingPageCode: AICode | null;
  onGenerateLandingPageBlueprint: (prompt: string) => void;
  onGenerateLandingPageCode: () => void;
  onDeployAgents: (play: any, sourceReportType: string) => void;
  marketMap: MarketMap | null;
  onGenerateMarketMap: (context: any, sourceReportType: string) => void;
  onSaveProject: (projectName: string) => void;
  onGenerateFirstStrike: (context: any) => void;
  onGenerateAIVideoFoundry: (script: string) => void;
  aiVideoFoundryReport: AIVideoFoundryReport | null;
}

const AudienceResults: React.FC<AudienceResultsProps> = ({
    analysisType,
    analysis,
    discovery,
    b2cDiscovery,
    b2cDeconResult,
    opportunityBrief,
    competitiveDisplacementBrief,
    aiVentureBlueprint,
    dominanceBlueprint,
    alphaSignalReport,
    chimericAgentReport,
    loneWolfReport,
    gatekeeperBypassReport,
    cashflowProtocolReport,
    realEstateAlphaReport,
    imageFoundryResult,
    salesCopilotReport,
    sovereignEngineReport,
    archimedesProtocolReport,
    firstStrikeReport,
    scoredProspects,
    monetizationStrategy,
    playbook,
    alphaAcquisitionPlaybook,
    onScore,
    onMonetize,
    onGeneratePlaybook,
    onGenerateAcquisitionPlaybook,
    onRediscover,
    onValidateLeads,
    activeAudience,
    videoStrategy,
    phyGitalVideoStrategy,
    onGenerateVideoWedge,
    onGeneratePhygitalDemoVideo,
    generatedCode,
    onGenerateCode,
    onGenerateCodeFromOpportunity,
    landingPageBlueprint,
    landingPageCode,
    onGenerateLandingPageBlueprint,
    onGenerateLandingPageCode,
    onDeployAgents,
    marketMap,
    onGenerateMarketMap,
    onSaveProject,
    onGenerateFirstStrike,
    onGenerateAIVideoFoundry,
    aiVideoFoundryReport
}) => {
    const [selectedLeads, setSelectedLeads] = useState<Set<string>>(new Set());
    const [filter, setFilter] = useState('');
    const [advancedFilter, setAdvancedFilter] = useState('');
    const [projectName, setProjectName] = useState('');
    const [isDownloadingPdf, setIsDownloadingPdf] = useState(false);

    const handleToggleLead = (fullName: string) => {
        setSelectedLeads(prev => {
            const newSet = new Set(prev);
            if (newSet.has(fullName)) {
                newSet.delete(fullName);
            } else {
                newSet.add(fullName);
            }
            return newSet;
        });
    };

    const handleValidateSelectedLeads = () => {
        if (analysis?.lookalikeProspects && selectedLeads.size > 0) {
            const prospectsToValidate = analysis.lookalikeProspects.filter(p => selectedLeads.has(p.fullName));
            onValidateLeads(prospectsToValidate);
        }
    };

    const hasAnyResult = useMemo(() => [
        analysis, discovery, b2cDiscovery, b2cDeconResult, opportunityBrief, competitiveDisplacementBrief,
        aiVentureBlueprint, dominanceBlueprint, alphaSignalReport, chimericAgentReport, loneWolfReport,
        gatekeeperBypassReport, cashflowProtocolReport, realEstateAlphaReport, imageFoundryResult,
        salesCopilotReport, sovereignEngineReport, archimedesProtocolReport, marketMap, firstStrikeReport,
        aiVideoFoundryReport
    ].some(res => res !== null), [
        analysis, discovery, b2cDiscovery, b2cDeconResult, opportunityBrief, competitiveDisplacementBrief,
        aiVentureBlueprint, dominanceBlueprint, alphaSignalReport, chimericAgentReport, loneWolfReport,
        gatekeeperBypassReport, cashflowProtocolReport, realEstateAlphaReport, imageFoundryResult,
        salesCopilotReport, sovereignEngineReport, archimedesProtocolReport, marketMap, firstStrikeReport,
        aiVideoFoundryReport
    ]);
    
    const handleSaveProjectInternal = () => {
        if (projectName.trim()) {
            onSaveProject(projectName);
            setProjectName('');
            alert('Project saved successfully!');
        }
    };

    const handleDownloadPdf = () => {
        setIsDownloadingPdf(true);
        const input = document.getElementById('results-container');
        if (input) {
            html2canvas(input, {
                scale: 2,
                backgroundColor: '#0f172a', // bg-slate-900
                ignoreElements: (element) => element.classList.contains('no-print'),
            }).then((canvas) => {
                const imgData = canvas.toDataURL('image/png');
                const pdf = new jsPDF({
                    orientation: 'p',
                    unit: 'px',
                    format: [canvas.width, canvas.height],
                });
                pdf.addImage(imgData, 'PNG', 0, 0, canvas.width, canvas.height);
                pdf.save("AudienceAI_Report.pdf");
                setIsDownloadingPdf(false);
            }).catch(err => {
                console.error("Error generating PDF:", err);
                setIsDownloadingPdf(false);
            });
        } else {
            setIsDownloadingPdf(false);
        }
    };
    
    if (!hasAnyResult) {
        return null;
    }

    return (
        <div id="results-container" className="space-y-12">
            {analysis && (
                <>
                    <B2BAnalysisReport analysis={analysis} />
                    <HowToFindLeadsGuide />
                    <div className="max-w-4xl mx-auto">
                        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                            {analysis.lookalikeProspects.map((prospect, index) => (
                                <LeadCard 
                                    key={index} 
                                    prospect={prospect}
                                    isSelected={selectedLeads.has(prospect.fullName)}
                                    onToggleSelect={handleToggleLead}
                                    filter={filter}
                                    advancedFilter={advancedFilter}
                                />
                            ))}
                        </div>
                        {analysis.lookalikeProspects.length > 0 && (
                             <div className="mt-6 text-center">
                                <button
                                    onClick={handleValidateSelectedLeads}
                                    disabled={selectedLeads.size === 0}
                                    className="bg-green-600 text-white font-bold py-2 px-4 rounded-md hover:bg-green-700 disabled:bg-slate-600 disabled:cursor-not-allowed transition"
                                >
                                    Validate {selectedLeads.size} Selected Lead{selectedLeads.size !== 1 && 's'}
                                </button>
                            </div>
                        )}
                    </div>
                    <ProspectScorer onScore={onScore} scoredProspects={scoredProspects} />
                </>
            )}

            {discovery && (
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                    {discovery.map((audience, index) => (
                       <DiscoveredAudienceCard 
                          key={index} 
                          audience={audience} 
                          index={index}
                          analysisType="b2b"
                          onMonetize={onMonetize}
                          activeAudienceName={activeAudience?.audienceName}
                       />
                    ))}
                </div>
            )}
            
            {b2cDiscovery && (
                 <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                    {b2cDiscovery.map((audience, index) => (
                       <DiscoveredAudienceCard 
                          key={index} 
                          audience={audience} 
                          index={index}
                          analysisType="b2c"
                          onMonetize={onMonetize}
                          activeAudienceName={activeAudience?.audienceName}
                       />
                    ))}
                </div>
            )}
            
            {b2cDeconResult && <B2CDeconReport brief={b2cDeconResult} onGenerateMarketMap={() => onGenerateMarketMap(b2cDeconResult, 'B2C Deconstruction')} />}
            
            {opportunityBrief && <OpportunityBriefReport brief={opportunityBrief} generatedCode={generatedCode} onGenerateCodeFromOpportunity={onGenerateCodeFromOpportunity} landingPageBlueprint={landingPageBlueprint} landingPageCode={landingPageCode} onGenerateLandingPageBlueprint={onGenerateLandingPageBlueprint} onGenerateLandingPageCode={onGenerateLandingPageCode} onGenerateAIVideoFoundry={onGenerateAIVideoFoundry} />}
            
            {competitiveDisplacementBrief && <CompetitiveDisplacementReport brief={competitiveDisplacementBrief} onGenerateVideoWedge={onGenerateVideoWedge} videoStrategy={videoStrategy} onGenerateMarketMap={() => onGenerateMarketMap(competitiveDisplacementBrief, 'Competitive Displacement')} />}

            {aiVentureBlueprint && <AIVentureBlueprintReport blueprint={aiVentureBlueprint} onGenerateCode={onGenerateCode} generatedCode={generatedCode} />}
            
            {dominanceBlueprint && <DominanceBlueprintReport blueprint={dominanceBlueprint} onGenerateMarketMap={() => onGenerateMarketMap(dominanceBlueprint, 'Dominance Blueprint')} phyGitalVideoStrategy={phyGitalVideoStrategy} onGeneratePhygitalDemoVideo={onGeneratePhygitalDemoVideo} onDeployAgents={onDeployAgents} onGenerateFirstStrike={() => onGenerateFirstStrike(dominanceBlueprint)} />}
            
            {alphaSignalReport && <AlphaSignalReportComponent report={alphaSignalReport} onDeployAgents={onDeployAgents} />}
            
            {chimericAgentReport && <ChimericAgentReportComponent report={chimericAgentReport} onDeployAgents={onDeployAgents} />}

            {loneWolfReport && <LoneWolfReportComponent report={loneWolfReport} onDeployAgents={onDeployAgents} />}

            {gatekeeperBypassReport && <GatekeeperBypassReportComponent report={gatekeeperBypassReport} />}
            
            {cashflowProtocolReport && <CashflowProtocolReportComponent report={cashflowProtocolReport} onDeployAgents={onDeployAgents} />}
            
            {realEstateAlphaReport && <RealEstateAlphaReportComponent report={realEstateAlphaReport} onDeployAgents={onDeployAgents} onGenerateFirstStrike={() => onGenerateFirstStrike(realEstateAlphaReport)} />}

            {imageFoundryResult && <ImageFoundryReport result={imageFoundryResult} />}
            
            {salesCopilotReport && <SalesCopilotReportComponent report={salesCopilotReport} />}

            {sovereignEngineReport && <SovereignEngineReportComponent report={sovereignEngineReport} />}

            {archimedesProtocolReport && <ArchimedesProtocolReportComponent report={archimedesProtocolReport} onDeployAgents={onDeployAgents} />}
            
            {firstStrikeReport && <FirstStrikeReportComponent report={firstStrikeReport} />}

            {aiVideoFoundryReport && <AIVideoFoundryReportComponent report={aiVideoFoundryReport} />}

            {monetizationStrategy && <MonetizationStrategyReport strategy={monetizationStrategy} onGeneratePlaybook={onGeneratePlaybook} analysisType={analysisType as 'b2b' | 'b2c'} />}
            
            {playbook && <HighLeveragePlaybookReport playbook={playbook} analysisType={analysisType as 'b2b' | 'b2c'} onGenerateAcquisitionPlaybook={onGenerateAcquisitionPlaybook} alphaAcquisitionPlaybook={alphaAcquisitionPlaybook} onDeployAgents={onDeployAgents} onGenerateAIVideoFoundry={onGenerateAIVideoFoundry} />}

            {marketMap && <MarketMapReport report={marketMap} />}

            {hasAnyResult && (
                <div className="bg-slate-900/50 p-6 rounded-lg border border-slate-700 mt-8 text-center no-print">
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-start">
                        {/* Save Project */}
                        <div>
                            <h3 className="text-lg font-semibold text-slate-100">Save Project</h3>
                            <p className="text-xs text-slate-400 mt-1 mb-3">Save this entire session, including your inputs and all generated results, to load later.</p>
                            <div className="flex gap-2 max-w-sm mx-auto">
                                <input
                                    type="text"
                                    value={projectName}
                                    onChange={(e) => setProjectName(e.target.value)}
                                    placeholder="Enter project name..."
                                    className="flex-grow bg-slate-800 border border-slate-600 rounded-md p-2 text-sm text-slate-200"
                                />
                                <button
                                    onClick={handleSaveProjectInternal}
                                    disabled={!projectName.trim()}
                                    className="bg-blue-600 hover:bg-blue-700 text-white font-semibold py-2 px-4 rounded-md transition disabled:bg-slate-600"
                                >
                                    Save
                                </button>
                            </div>
                        </div>

                        {/* Download PDF */}
                        <div>
                            <h3 className="text-lg font-semibold text-slate-100">Download PDF</h3>
                            <p className="text-xs text-slate-400 mt-1 mb-3">Export a high-quality PDF of the currently visible reports for sharing or archiving.</p>
                            <button
                                onClick={handleDownloadPdf}
                                disabled={isDownloadingPdf}
                                className="bg-green-600 hover:bg-green-700 text-white font-semibold py-2 px-4 rounded-md transition flex items-center justify-center mx-auto disabled:bg-slate-600"
                            >
                                {isDownloadingPdf ? (
                                    <>
                                        <svg className="animate-spin -ml-1 mr-3 h-5 w-5 text-white" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24"><circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle><path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path></svg>
                                        Generating PDF...
                                    </>
                                ) : (
                                    'Download Report as PDF'
                                )}
                            </button>
                        </div>
                    </div>
                </div>
            )}
        </div>
    );
};

export default AudienceResults;