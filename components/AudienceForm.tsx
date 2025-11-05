
import React, { useState, useRef, useEffect, useCallback } from 'react';
import { StrategicBrief } from '../types';

interface AudienceFormProps {
  onGenerate: (brief: StrategicBrief) => void;
  isLoading: boolean;
  searchHistory: StrategicBrief[];
  isTurboMode: boolean;
  setIsTurboMode: (isTurbo: boolean) => void;
  analysisType: StrategicBrief['analysisType'];
  setAnalysisType: (type: StrategicBrief['analysisType']) => void;
  briefToLoad: StrategicBrief | null;
}

const getBriefDescription = (brief: StrategicBrief): string => {
    switch (brief.analysisType) {
        case 'b2b':
            const detail = brief.industry || brief.contextualUrl || (brief.prospectList ? 'a customer list' : '');
            return `B2B ${brief.goal === 'expand' ? 'Expansion' : 'Discovery'}: ${detail || 'analysis'}`;
        case 'b2c':
            return `B2C Discovery: ${brief.productCategory || 'analysis'}`;
        case 'b2cDecon':
            return `B2C Decon: ${brief.passionsAndHobbies || 'analysis'}`;
        case 'starvingCrowd':
            return `Aspirin Finder: ${brief.areaOfInterest || 'analysis'}`;
        case 'competitiveDisplacement':
            return `Comp. Displacement: ${brief.contextualUrl}`;
        case 'aiVentureArchitect':
            return `AI Venture Architect: ${brief.businessConcept?.substring(0, 30)}...`;
        case 'videoStrategy':
             return `Video Strategy: ${brief.serviceDescription?.substring(0, 30)}...`;
        case 'veoVideo':
             return `VEO Video Generation`;
        case 'dominanceBlueprint':
            return `Dominance Blueprint: ${brief.businessConcept?.substring(0, 30)}...`;
        case 'alphaSignal':
            return `Alpha Signal: ${brief.revenueTarget} in ${brief.timeframe}`;
        case 'chimericAgent':
            return `Chimeric Agent: ${brief.subjectProfile?.substring(0, 30)}...`;
        case 'loneWolf':
            return `Lone Wolf Protocol`;
        case 'b2bPlaybook':
            return `B2B Playbook: ${brief.discoveryHypothesis?.substring(0, 30)}...`;
        case 'gatekeeperBypass':
            return `Gatekeeper Bypass: ${brief.opportunityDescription?.substring(0, 30)}...`;
        case 'cashflowProtocol':
            return `Rapid Cashflow: ${brief.coreSkill || 'analysis'}`;
        case 'realEstateAlpha':
            return `Real Estate Alpha: ${brief.realEstateNiche}`;
        case 'imageFoundry':
            return `Image Foundry: ${brief.prompt?.substring(0, 30)}...`;
        case 'salesCopilot':
            return `AI Sales Co-pilot: ${brief.prospectObjection?.substring(0, 30)}...`;
        case 'sovereignEngine':
            return `Sovereign Engine: ${brief.workflowDescription?.substring(0, 30)}...`;
        case 'archimedesProtocol':
            return `Archimedes Protocol: Master Gamelan`;
        case 'aiVideoFoundry':
            return `AI Video Foundry: ${brief.script?.substring(0, 30)}...`;
        default:
            return `${brief.analysisType} analysis`;
    }
};

const ModuleButton: React.FC<{
    type: StrategicBrief['analysisType'];
    currentType: StrategicBrief['analysisType'];
    onClick: (type: StrategicBrief['analysisType']) => void;
    color: string;
    children: React.ReactNode;
}> = ({ type, currentType, onClick, color, children }) => {
    const isActive = currentType === type;
    const colorClasses = {
        fuchsia: 'bg-fuchsia-600 border-fuchsia-500 ring-fuchsia-500',
        red: 'bg-red-600 border-red-500 ring-red-500',
        orange: 'bg-orange-600 border-orange-500 ring-orange-500',
        amber: 'bg-amber-500 border-amber-500 ring-amber-500',
        teal: 'bg-teal-600 border-teal-500 ring-teal-500',
        green: 'bg-green-600 border-green-500 ring-green-500',
        indigo: 'bg-indigo-600 border-indigo-500 ring-indigo-500',
        purple: 'bg-purple-600 border-purple-500 ring-purple-500',
        blue: 'bg-blue-600 border-blue-500 ring-blue-500',
        sky: 'bg-sky-600 border-sky-500 ring-sky-500',
    };
    
    const activeClass = `${colorClasses[color as keyof typeof colorClasses] || colorClasses.indigo} text-white ring-2 z-10`;
    const inactiveClass = 'bg-slate-800 text-slate-300 border-slate-700 hover:bg-slate-700';

    return (
        <button
            type="button"
            onClick={() => onClick(type)}
            className={`w-full py-2 px-2 text-xs sm:text-sm font-medium rounded-md transition border ${isActive ? activeClass : inactiveClass}`}
        >
            {children}
        </button>
    );
};


const AudienceForm: React.FC<AudienceFormProps> = ({ onGenerate, isLoading, searchHistory, isTurboMode, setIsTurboMode, analysisType, setAnalysisType, briefToLoad }) => {
  const [goal, setGoal] = useState<'discover' | 'expand'>('discover');
  
  const [contextualUrl, setContextualUrl] = useState('');
  const [b2bBrief, setB2bBrief] = useState({ industry: '', prospectList: '' });
  const [b2bCompetitorUrl, setB2bCompetitorUrl] = useState('');
  const [b2cBrief, setB2cBrief] = useState<{
      productCategory: string;
      influentialBrands: string;
      customerPersonas: string;
      competitorBrands: string;
      definingInterests: string;
      passionsAndHobbies: string;
      influencersTheyTrust: string;
      knownB2CTriggers: { trigger: string; implication: string; }[];
  }>({ 
      productCategory: '', 
      influentialBrands: '', 
      customerPersonas: '', 
      competitorBrands: '',
      definingInterests: '',
      passionsAndHobbies: '',
      influencersTheyTrust: '',
      knownB2CTriggers: []
  });
  const [currentTrigger, setCurrentTrigger] = useState({ trigger: '', implication: '' });
  const [starvingCrowdBrief, setStarvingCrowdBrief] = useState({ areaOfInterest: '', targetDemographic: '' });
  const [competitiveDisplacementBrief, setCompetitiveDisplacementBrief] = useState({ contextualUrl: ''});
  const [videoStrategyBrief, setVideoStrategyBrief] = useState({ serviceDescription: ''});
  const [aiVentureArchitectBrief, setAiVentureArchitectBrief] = useState({ businessConcept: '' });
  const [dominanceBlueprintBrief, setDominanceBlueprintBrief] = useState({ businessConcept: '', competitorUrl: '' });
  const [alphaSignalBrief, setAlphaSignalBrief] = useState({ revenueTarget: '', timeframe: '', areaOfInterest: '' });
  const [chimericAgentBrief, setChimericAgentBrief] = useState({ subjectProfile: '' });
  const [playbookBrief, setPlaybookBrief] = useState({ discoveryHypothesis: '' });
  const [gatekeeperBypassBrief, setGatekeeperBypassBrief] = useState({ opportunityDescription: '' });
  const [cashflowProtocolBrief, setCashflowProtocolBrief] = useState({ coreSkill: '' });
  const [realEstateAlphaBrief, setRealEstateAlphaBrief] = useState<Pick<StrategicBrief, 'realEstateNiche' | 'strategicLens' | 'customStrategicLens' | 'businessConcept' | 'uploadedData'>>({ realEstateNiche: 'taxDeeds', strategicLens: 'autoSelect', customStrategicLens: '', businessConcept: '', uploadedData: '' });
  const [imageFoundryBrief, setImageFoundryBrief] = useState({ prompt: '' });
  const [aiVideoFoundryBrief, setAIVideoFoundryBrief] = useState({ script: '' });
  const [salesCopilotBrief, setSalesCopilotBrief] = useState({ salesContext: '', prospectObjection: '' });
  const [sovereignEngineBrief, setSovereignEngineBrief] = useState({ workflowDescription: '', initialInput: '' });
  
  const fileInputRef = useRef<HTMLInputElement>(null);
  const realEstateFileInputRef = useRef<HTMLInputElement>(null);

  const populateFormFromBrief = useCallback((brief: StrategicBrief) => {
    setAnalysisType(brief.analysisType);
    setGoal(brief.goal || 'discover');
    setContextualUrl(brief.contextualUrl || '');
    setB2bBrief({
        industry: brief.industry || '',
        prospectList: brief.prospectList || ''
    });
    setB2bCompetitorUrl(brief.competitorUrl || '');
    setB2cBrief({
        productCategory: brief.productCategory || '',
        influentialBrands: brief.influentialBrands || '',
        customerPersonas: brief.customerPersonas || '',
        competitorBrands: brief.competitorBrands || '',
        definingInterests: brief.definingInterests || '',
        passionsAndHobbies: brief.passionsAndHobbies || '',
        influencersTheyTrust: brief.influencersTheyTrust || '',
        knownB2CTriggers: brief.knownB2CTriggers || []
    });
    setStarvingCrowdBrief({
        areaOfInterest: brief.areaOfInterest || '',
        targetDemographic: brief.targetDemographic || '',
    });
    setCompetitiveDisplacementBrief({
        contextualUrl: brief.contextualUrl || ''
    });
    setVideoStrategyBrief({
        serviceDescription: brief.serviceDescription || ''
    });
    setAiVentureArchitectBrief({
        businessConcept: brief.businessConcept || ''
    });
    setDominanceBlueprintBrief({
        businessConcept: brief.businessConcept || '',
        competitorUrl: brief.competitorUrl || ''
    });
    setAlphaSignalBrief({
        revenueTarget: brief.revenueTarget || '',
        timeframe: brief.timeframe || '',
        areaOfInterest: brief.areaOfInterest || ''
    });
    setChimericAgentBrief({
        subjectProfile: brief.subjectProfile || ''
    });
    setPlaybookBrief({
        discoveryHypothesis: brief.discoveryHypothesis || ''
    });
    setGatekeeperBypassBrief({
        opportunityDescription: brief.opportunityDescription || ''
    });
    setCashflowProtocolBrief({
        coreSkill: brief.coreSkill || ''
    });
    setRealEstateAlphaBrief({
        realEstateNiche: brief.realEstateNiche || 'taxDeeds',
        strategicLens: brief.strategicLens || 'autoSelect',
        customStrategicLens: brief.customStrategicLens || '',
        businessConcept: brief.businessConcept || '',
        uploadedData: brief.uploadedData || ''
    });
    setImageFoundryBrief({
        prompt: brief.prompt || ''
    });
    setAIVideoFoundryBrief({
        script: brief.script || ''
    });
    setSalesCopilotBrief({
        salesContext: brief.salesContext || '',
        prospectObjection: brief.prospectObjection || ''
    });
    setSovereignEngineBrief({
        workflowDescription: brief.workflowDescription || '',
        initialInput: brief.initialInput || ''
    });
  }, [setAnalysisType]);
  
    useEffect(() => {
        if (briefToLoad) {
            populateFormFromBrief(briefToLoad);
        }
    }, [briefToLoad, populateFormFromBrief]);


  const handleRerunSearch = (brief: StrategicBrief) => {
    populateFormFromBrief(brief);
    onGenerate(brief);
  };


  // Load state from localStorage on initial mount
  useEffect(() => {
    const savedState = localStorage.getItem('audienceFormState');
    if(savedState){
        try {
            const parsed = JSON.parse(savedState);
            setAnalysisType(parsed.analysisType || 'starvingCrowd');
            setGoal(parsed.goal || 'discover');
            setContextualUrl(parsed.contextualUrl || '');
            setB2bBrief(parsed.b2bBrief || { industry: '', prospectList: '' });
            setB2bCompetitorUrl(parsed.b2bCompetitorUrl || '');
            setB2cBrief(parsed.b2cBrief || { productCategory: '', influentialBrands: '', customerPersonas: '', competitorBrands: '', definingInterests: '', passionsAndHobbies: '', influencersTheyTrust: '', knownB2CTriggers: [] });
            setStarvingCrowdBrief(parsed.starvingCrowdBrief || { areaOfInterest: '', targetDemographic: '' });
            setCompetitiveDisplacementBrief(parsed.competitiveDisplacementBrief || { contextualUrl: '' });
            setVideoStrategyBrief(parsed.videoStrategyBrief || { serviceDescription: '' });
            setAiVentureArchitectBrief(parsed.aiVentureArchitectBrief || { businessConcept: '' });
            setDominanceBlueprintBrief(parsed.dominanceBlueprintBrief || { businessConcept: '', competitorUrl: '' });
            setAlphaSignalBrief(parsed.alphaSignalBrief || { revenueTarget: '', timeframe: '', areaOfInterest: '' });
            setChimericAgentBrief(parsed.chimericAgentBrief || { subjectProfile: '' });
            setPlaybookBrief(parsed.playbookBrief || { discoveryHypothesis: '' });
            setGatekeeperBypassBrief(parsed.gatekeeperBypassBrief || { opportunityDescription: '' });
            setCashflowProtocolBrief(parsed.cashflowProtocolBrief || { coreSkill: '' });
            setRealEstateAlphaBrief(parsed.realEstateAlphaBrief || { realEstateNiche: 'taxDeeds', strategicLens: 'autoSelect', customStrategicLens: '', businessConcept: '', uploadedData: '' });
            setImageFoundryBrief(parsed.imageFoundryBrief || { prompt: '' });
            setAIVideoFoundryBrief(parsed.aiVideoFoundryBrief || { script: '' });
            setSalesCopilotBrief(parsed.salesCopilotBrief || { salesContext: '', prospectObjection: '' });
            setSovereignEngineBrief(parsed.sovereignEngineBrief || { workflowDescription: '', initialInput: '' });
            setIsTurboMode(parsed.isTurboMode || false);
        } catch (e) {
            console.error("Failed to parse saved form state:", e);
            // Do not remove the item, to prevent data loss on transient errors.
        }
    }
  }, [setAnalysisType, setIsTurboMode]);

  // Save state to localStorage whenever it changes
  useEffect(() => {
    const formState = {
        analysisType, goal, contextualUrl, b2bBrief, b2bCompetitorUrl, b2cBrief, starvingCrowdBrief, competitiveDisplacementBrief, videoStrategyBrief, aiVentureArchitectBrief, dominanceBlueprintBrief, alphaSignalBrief, chimericAgentBrief, playbookBrief, gatekeeperBypassBrief, cashflowProtocolBrief, realEstateAlphaBrief, imageFoundryBrief, aiVideoFoundryBrief, salesCopilotBrief, sovereignEngineBrief, isTurboMode
    };
    localStorage.setItem('audienceFormState', JSON.stringify(formState));
  }, [analysisType, goal, contextualUrl, b2bBrief, b2bCompetitorUrl, b2cBrief, starvingCrowdBrief, competitiveDisplacementBrief, videoStrategyBrief, aiVentureArchitectBrief, dominanceBlueprintBrief, alphaSignalBrief, chimericAgentBrief, playbookBrief, gatekeeperBypassBrief, cashflowProtocolBrief, realEstateAlphaBrief, imageFoundryBrief, aiVideoFoundryBrief, salesCopilotBrief, sovereignEngineBrief, isTurboMode]);
  
  const getInvalidReason = () => {
      if (isLoading) return null;
      switch(analysisType) {
        case 'b2b':
            const hasB2BContext = contextualUrl.trim() !== '' || b2bBrief.industry.trim() !== '' || b2bCompetitorUrl.trim() !== '';
            if (goal === 'expand' && b2bBrief.prospectList.trim() === '') return "Please provide a 'Golden Customer' list to expand.";
            if (goal === 'discover' && !hasB2BContext) return "Please provide an Industry, your URL, or a Competitor URL.";
            break;
        case 'b2c':
            if (b2cBrief.passionsAndHobbies.trim() === '') return "Please provide Passions and Hobbies for B2C analysis.";
            break;
        case 'b2cDecon':
            if (b2cBrief.passionsAndHobbies.trim() === '' && b2cBrief.productCategory.trim() === '') return "Please provide a Product Category or Passions and Hobbies.";
            break;
        case 'starvingCrowd':
            if (starvingCrowdBrief.areaOfInterest.trim() === '' && contextualUrl.trim() === '') return "Please provide an Area of Interest or a URL to analyze.";
            break;
        case 'competitiveDisplacement':
            if (competitiveDisplacementBrief.contextualUrl.trim() === '') return "Please provide a Target Competitor URL to displace.";
            break;
        case 'videoStrategy':
             if(videoStrategyBrief.serviceDescription.trim() === '') return "Please describe the service for the video strategy.";
             break;
        case 'aiVentureArchitect':
             if (aiVentureArchitectBrief.businessConcept.trim() === '') return "Please describe the Business Concept to architect.";
             break;
        case 'dominanceBlueprint':
             if (dominanceBlueprintBrief.businessConcept.trim() === '') return "Please describe the Business Concept for the Dominance Blueprint.";
             break;
        case 'alphaSignal':
            if (alphaSignalBrief.revenueTarget.trim() === '' || alphaSignalBrief.timeframe.trim() === '' || alphaSignalBrief.areaOfInterest.trim() === '') return "Please complete all fields for the Alpha Signal Protocol.";
            break;
        case 'chimericAgent':
            if (chimericAgentBrief.subjectProfile.trim() === '') return "Please provide a Subject Profile for the Chimeric Agent.";
            break;
        case 'b2bPlaybook':
            if (playbookBrief.discoveryHypothesis.trim() === '') return "Please provide a Core Market Hypothesis.";
            break;
        case 'gatekeeperBypass':
            if (gatekeeperBypassBrief.opportunityDescription.trim() === '') return "Please describe the business opportunity to promote.";
            break;
        case 'cashflowProtocol':
            if (cashflowProtocolBrief.coreSkill.trim() === '') return "Please enter your core skill.";
            break;
        case 'realEstateAlpha':
            if (!realEstateAlphaBrief.realEstateNiche || !realEstateAlphaBrief.strategicLens) return "Please select a niche and strategic lens.";
            if (realEstateAlphaBrief.strategicLens === 'custom' && !realEstateAlphaBrief.customStrategicLens?.trim()) return "Please enter your custom strategic lens.";
            if (!realEstateAlphaBrief.businessConcept?.trim()) return "Please provide a detailed Business Concept for the platform.";
            break;
        case 'imageFoundry':
            if (imageFoundryBrief.prompt.trim() === '') return "Please enter a prompt for the image.";
            break;
        case 'aiVideoFoundry':
            if (aiVideoFoundryBrief.script.trim() === '') return "Please enter a script for the video foundry.";
            break;
        case 'salesCopilot':
            if (salesCopilotBrief.prospectObjection.trim() === '') return "Please enter the prospect's objection or question.";
            break;
        case 'sovereignEngine':
            if (sovereignEngineBrief.workflowDescription.trim() === '') return "Please describe the workflow to automate.";
            break;
        case 'loneWolf':
        case 'veoVideo':
        case 'archimedesProtocol':
            return null; // No inputs required for these
      }
      return null;
  }

  const isFormValid = () => getInvalidReason() === null;

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (isFormValid()) {
      let brief: StrategicBrief = { analysisType };
      switch(analysisType) {
          case 'b2b':
            brief = { ...brief, goal, ...b2bBrief, contextualUrl, competitorUrl: b2bCompetitorUrl };
            break;
          case 'b2c':
            brief = { ...brief, goal: 'discover', ...b2cBrief, contextualUrl };
            break;
          case 'b2cDecon':
            brief = { ...brief, goal: 'discover', productCategory: b2cBrief.productCategory, passionsAndHobbies: b2cBrief.passionsAndHobbies };
            break;
          case 'starvingCrowd':
            brief = { ...brief, ...starvingCrowdBrief, contextualUrl };
            break;
          case 'competitiveDisplacement':
            brief = { ...brief, contextualUrl: competitiveDisplacementBrief.contextualUrl };
            break;
          case 'videoStrategy':
            brief = { ...brief, ...videoStrategyBrief };
            break;
          case 'aiVentureArchitect':
            brief = { ...brief, ...aiVentureArchitectBrief };
            break;
          case 'dominanceBlueprint':
            brief = { ...brief, ...dominanceBlueprintBrief };
            break;
          case 'alphaSignal':
            brief = { ...brief, ...alphaSignalBrief };
            break;
          case 'chimericAgent':
            brief = { ...brief, ...chimericAgentBrief };
            break;
          case 'b2bPlaybook':
            brief = { ...brief, ...playbookBrief };
            break;
          case 'gatekeeperBypass':
            brief = { ...brief, ...gatekeeperBypassBrief };
            break;
          case 'cashflowProtocol':
            brief = { ...brief, ...cashflowProtocolBrief };
            break;
          case 'realEstateAlpha':
            brief = { ...brief, ...realEstateAlphaBrief };
            break;
          case 'imageFoundry':
            brief = { ...brief, ...imageFoundryBrief };
            break;
          case 'aiVideoFoundry':
            brief = { ...brief, ...aiVideoFoundryBrief };
            break;
          case 'salesCopilot':
            brief = { ...brief, ...salesCopilotBrief };
            break;
          case 'sovereignEngine':
            brief = { ...brief, ...sovereignEngineBrief };
            break;
          case 'loneWolf':
          case 'veoVideo':
          case 'archimedesProtocol':
            // No extra data needed
            break; 
      }
      onGenerate(brief);
    }
  };
  
  const handleModuleChange = (type: StrategicBrief['analysisType']) => {
      setAnalysisType(type);
      if (type === 'veoVideo') {
          onGenerate({ analysisType: 'veoVideo' });
      }
  }

  const handleFileChange = (event: React.ChangeEvent<HTMLInputElement>, isRealEstate: boolean = false) => {
    const file = event.target.files?.[0];
    if (file) {
      const reader = new FileReader();
      reader.onload = (e) => {
        const text = e.target?.result as string;
        if (isRealEstate) {
            setRealEstateAlphaBrief(prev => ({ ...prev, uploadedData: text }));
        } else {
            setB2bBrief(prev => ({ ...prev, prospectList: text }));
        }
      };
      reader.readAsText(file);
    }
  };
  
  const handleUploadClick = (isRealEstate: boolean = false) => {
      if(isRealEstate) {
          realEstateFileInputRef.current?.click();
      } else {
          fileInputRef.current?.click();
      }
  };

  const handleAddTrigger = () => {
    if (currentTrigger.trigger.trim() && currentTrigger.implication.trim()) {
        setB2cBrief(p => ({
            ...p,
            knownB2CTriggers: [...(p.knownB2CTriggers || []), currentTrigger]
        }));
        setCurrentTrigger({ trigger: '', implication: '' });
    }
  };

  const handleRemoveTrigger = (indexToRemove: number) => {
    setB2cBrief(p => ({
        ...p,
        knownB2CTriggers: (p.knownB2CTriggers || []).filter((_, index) => index !== indexToRemove)
    }));
  };

  const getButtonText = () => {
    if (isLoading) return "Analyzing...";
    switch(analysisType) {
        case 'b2b':
            return goal === 'expand' ? "Analyze & Find Lookalikes" : "Discover B2B Audiences";
        case 'b2c':
            return "Discover Consumer Tribes";
        case 'b2cDecon':
            return "Deconstruct B2C Market";
        case 'starvingCrowd':
            return "Find Monetizable Pain";
        case 'competitiveDisplacement':
            return "Generate Displacement Brief";
        case 'veoVideo':
            return "Switch to Video Module";
        case 'videoStrategy':
            return "Generate Video Strategy";
        case 'aiVentureArchitect':
            return "Architect AI Venture";
        case 'dominanceBlueprint':
            return "Generate Dominance Blueprint";
        case 'alphaSignal':
            return "Generate Alpha Signal";
        case 'chimericAgent':
            return "Deploy Chimeric Agent";
        case 'loneWolf':
            return "Generate Lone Wolf Plays";
        case 'b2bPlaybook':
            return "Generate B2B Playbook";
        case 'gatekeeperBypass':
            return "Generate Bypass Protocol";
        case 'cashflowProtocol':
            return "Generate Cashflow Protocol";
        case 'realEstateAlpha':
            return "Generate Real Estate Alpha";
        case 'imageFoundry':
            return "Generate Image";
        case 'aiVideoFoundry':
            return "Generate Video Blueprint";
        case 'salesCopilot':
            return "Get Suggested Response";
        case 'sovereignEngine':
            return "Execute Workflow";
        case 'archimedesProtocol':
            return "Generate Master Gamelan";
    }
    return "Generate";
  }
  
  const invalidReason = getInvalidReason();

  return (
    <>
    <form onSubmit={handleSubmit} className="space-y-6 bg-slate-800/50 p-6 rounded-lg border border-slate-700 shadow-xl">
      <p className="text-center text-slate-400 -mt-2 mb-2 text-lg">Identify a high-value problem for a 'starving crowd' and architect an AI solution.</p>
      
       <div>
        <label className="block text-sm font-medium text-slate-300 mb-2">Analysis Module</label>
            <div className="space-y-4">
                <div>
                    <h4 className="text-xs font-semibold text-slate-400 uppercase tracking-wider mb-2 text-center">Master Plans</h4>
                     <div className="grid grid-cols-1 gap-2">
                         <ModuleButton type="archimedesProtocol" currentType={analysisType} onClick={handleModuleChange} color="amber">🏛️ Archimedes Protocol</ModuleButton>
                    </div>
                </div>
                <div>
                    <h4 className="text-xs font-semibold text-slate-400 uppercase tracking-wider mb-2 text-center">1. Find Your "Starving Crowd"</h4>
                    <div className="grid grid-cols-1 sm:grid-cols-4 gap-2">
                        <ModuleButton type="starvingCrowd" currentType={analysisType} onClick={handleModuleChange} color="green">💊 Aspirin Finder</ModuleButton>
                        <ModuleButton type="cashflowProtocol" currentType={analysisType} onClick={handleModuleChange} color="green">💰 Rapid Cashflow</ModuleButton>
                        <ModuleButton type="loneWolf" currentType={analysisType} onClick={handleModuleChange} color="orange">🐺 Lone Wolf</ModuleButton>
                        <ModuleButton type="alphaSignal" currentType={analysisType} onClick={handleModuleChange} color="red">⚡ Alpha Signal</ModuleButton>
                    </div>
                </div>
                <div>
                    <h4 className="text-xs font-semibold text-slate-400 uppercase tracking-wider mb-2 text-center">2. Build Your Blueprint</h4>
                    <div className="grid grid-cols-1 sm:grid-cols-4 gap-2">
                        <ModuleButton type="dominanceBlueprint" currentType={analysisType} onClick={handleModuleChange} color="amber">👑 Dominance</ModuleButton>
                        <ModuleButton type="realEstateAlpha" currentType={analysisType} onClick={handleModuleChange} color="amber">🏠 Real Estate Alpha</ModuleButton>
                        <ModuleButton type="chimericAgent" currentType={analysisType} onClick={handleModuleChange} color="fuchsia">🧬 Chimeric Agent</ModuleButton>
                        <ModuleButton type="gatekeeperBypass" currentType={analysisType} onClick={handleModuleChange} color="sky">🔑 Gatekeeper Bypass</ModuleButton>
                    </div>
                </div>
                <div>
                    <h4 className="text-xs font-semibold text-slate-400 uppercase tracking-wider mb-2 text-center">3. Research & Displace</h4>
                     <div className="grid grid-cols-1 sm:grid-cols-5 gap-2">
                        <ModuleButton type="b2b" currentType={analysisType} onClick={handleModuleChange} color="indigo">🏢 B2B</ModuleButton>
                        <ModuleButton type="b2c" currentType={analysisType} onClick={handleModuleChange} color="indigo">🛍️ B2C</ModuleButton>
                        <ModuleButton type="b2cDecon" currentType={analysisType} onClick={handleModuleChange} color="indigo">🔬 B2C Decon</ModuleButton>
                        <ModuleButton type="competitiveDisplacement" currentType={analysisType} onClick={handleModuleChange} color="purple">🎯 Comp. Displace</ModuleButton>
                        <ModuleButton type="aiVentureArchitect" currentType={analysisType} onClick={handleModuleChange} color="teal">🏗️ AI Venture</ModuleButton>
                    </div>
                </div>
                <div>
                    <h4 className="text-xs font-semibold text-slate-400 uppercase tracking-wider mb-2 text-center">4. Create Media Assets</h4>
                    <div className="grid grid-cols-1 sm:grid-cols-4 gap-2">
                        <ModuleButton type="imageFoundry" currentType={analysisType} onClick={handleModuleChange} color="blue">🖼️ Image Foundry</ModuleButton>
                        <ModuleButton type="videoStrategy" currentType={analysisType} onClick={handleModuleChange} color="blue">🎬 Video Strategy</ModuleButton>
                        <ModuleButton type="veoVideo" currentType={analysisType} onClick={handleModuleChange} color="blue">🎥 VEO Video</ModuleButton>
                        <ModuleButton type="aiVideoFoundry" currentType={analysisType} onClick={handleModuleChange} color="blue">🏭 AI Video Foundry</ModuleButton>
                    </div>
                </div>
                 <div>
                    <h4 className="text-xs font-semibold text-slate-400 uppercase tracking-wider mb-2 text-center">5. Execution & Closing</h4>
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-2">
                        <ModuleButton type="salesCopilot" currentType={analysisType} onClick={handleModuleChange} color="red">🤝 AI Sales Co-pilot</ModuleButton>
                        <ModuleButton type="sovereignEngine" currentType={analysisType} onClick={handleModuleChange} color="red">🤖 Sovereign Engine</ModuleButton>
                    </div>
                </div>
            </div>
      </div>

       <div className="flex items-center justify-center space-x-3 py-2">
            <label htmlFor="turbo-mode-toggle" className="text-sm font-medium text-slate-300">
                Standard Quality
            </label>
            <button
                type="button"
                role="switch"
                aria-checked={isTurboMode}
                id="turbo-mode-toggle"
                onClick={() => setIsTurboMode(!isTurboMode)}
                className={`${
                    isTurboMode ? 'bg-teal-500' : 'bg-slate-600'
                } relative inline-flex h-6 w-11 flex-shrink-0 cursor-pointer rounded-full border-2 border-transparent transition-colors duration-200 ease-in-out focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2 focus:ring-offset-slate-800`}
            >
                <span
                    aria-hidden="true"
                    className={`${
                        isTurboMode ? 'translate-x-5' : 'translate-x-0'
                    } pointer-events-none inline-block h-5 w-5 transform rounded-full bg-white shadow ring-0 transition duration-200 ease-in-out`}
                />
            </button>
            <label htmlFor="turbo-mode-toggle" className="text-sm font-medium text-slate-300">
                Turbo Speed
            </label>
        </div>

        <hr className="border-slate-700" />
        
        {/* LONE WOLF / ARCHIMEDES FORMS */}
        {(analysisType === 'loneWolf' || analysisType === 'archimedesProtocol') && (
             <div className="space-y-4 animate-fade-in text-center">
                 <p className="text-slate-400">This module requires no input.</p>
                 <p className="text-sm text-slate-300">
                    {analysisType === 'loneWolf' 
                        ? "The AI will generate a portfolio of high-leverage business plays for a solo operator, designed for immediate monetization with minimal friction."
                        : "The AI will generate the ultimate master gamelan for building an Empire of Leverage."
                    }
                 </p>
                 <p className="text-xs text-slate-500">Click the button below to generate your protocol.</p>
            </div>
        )}

        {/* CHIMERIC AGENT FORM */}
        {analysisType === 'chimericAgent' && (
            <div className="space-y-4 animate-fade-in">
                 <p className="text-sm text-slate-400 text-center -mb-2">Provide a subject for Total Synthesis. The AI will generate high-stakes solutions tailored to them.</p>
                <div>
                    <label htmlFor="subjectProfile" className="block text-sm font-medium text-slate-300">Subject Profile *</label>
                    <textarea id="subjectProfile" rows={4} value={chimericAgentBrief.subjectProfile} onChange={e => setChimericAgentBrief(p => ({...p, subjectProfile: e.target.value}))} className="mt-1 w-full bg-slate-800 border border-slate-600 rounded-md p-2 text-slate-200" placeholder="Enter a person's name, company, URL, or a summary of their assets, network, and goals..." />
                </div>
            </div>
        )}

        {/* GATEKEEPER BYPASS FORM */}
        {analysisType === 'gatekeeperBypass' && (
            <div className="space-y-4 animate-fade-in">
                 <p className="text-sm text-slate-400 text-center -mb-2">Describe the opportunity you want to sell. The AI will generate a protocol to bypass gatekeepers and reach opportunity seekers directly.</p>
                <div>
                    <label htmlFor="opportunityDescription" className="block text-sm font-medium text-slate-300">Business Opportunity Description *</label>
                    <textarea id="opportunityDescription" rows={4} value={gatekeeperBypassBrief.opportunityDescription} onChange={e => setGatekeeperBypassBrief(p => ({...p, opportunityDescription: e.target.value}))} className="mt-1 w-full bg-slate-800 border border-slate-600 rounded-md p-2 text-slate-200" placeholder="e.g., A franchise model for an AI-powered mobile car inspection service. A portfolio of 'Lone Wolf' business plays. A 'business-in-a-box' for starting a niche marketing agency." />
                </div>
            </div>
        )}

        {/* CASHFLOW PROTOCOL FORM */}
        {analysisType === 'cashflowProtocol' && (
            <div className="space-y-4 animate-fade-in">
                 <p className="text-sm text-slate-400 text-center -mb-2">The AI will act as your deal coach and give you a 48-hour plan to close a high-ticket client.</p>
                <div>
                    <label htmlFor="coreSkill" className="block text-sm font-medium text-slate-300">Your Core Skill *</label>
                    <input type="text" id="coreSkill" value={cashflowProtocolBrief.coreSkill} onChange={e => setCashflowProtocolBrief(p => ({...p, coreSkill: e.target.value}))} className="mt-1 w-full bg-slate-800 border border-slate-600 rounded-md p-2 text-slate-200" placeholder="e.g., 'Writing compelling sales copy', 'Building web applications', 'Running Facebook Ads'" />
                </div>
            </div>
        )}

        {/* REAL ESTATE ALPHA FORM */}
        {analysisType === 'realEstateAlpha' && (
            <div className="space-y-4 animate-fade-in">
                <p className="text-sm text-slate-400 text-center -mb-2">Architect a blueprint for a market-dominating real estate technology platform.</p>
                <div>
                    <label htmlFor="realEstateBusinessConcept" className="block text-sm font-medium text-slate-300">Business Concept *</label>
                    <textarea 
                        id="realEstateBusinessConcept" 
                        rows={4} 
                        value={realEstateAlphaBrief.businessConcept} 
                        onChange={e => setRealEstateAlphaBrief(p => ({...p, businessConcept: e.target.value}))} 
                        className="mt-1 w-full bg-slate-800 border border-slate-600 rounded-md p-2 text-slate-200" 
                        placeholder="e.g., An 'Auction Alpha Intelligence Suite' that ingests nationwide tax deed data, uses computer vision to verify assets on satellite imagery, automatically checks for lease agreements, and scores deals for investors..." 
                    />
                </div>
                <div>
                    <label htmlFor="realEstateNiche" className="block text-sm font-medium text-slate-300">High-Value Real Estate Niche *</label>
                    <select id="realEstateNiche" value={realEstateAlphaBrief.realEstateNiche} onChange={e => setRealEstateAlphaBrief(p => ({...p, realEstateNiche: e.target.value as any}))} className="mt-1 w-full bg-slate-800 border border-slate-600 rounded-md p-2 text-slate-200">
                        <option value="taxDeeds">Tax Deeds & Liens</option>
                        <option value="probate">Probate & Inherited Properties</option>
                        <option value="preForeclosure">Pre-Foreclosures</option>
                        <option value="postForeclosure">Post-Foreclosures (REO)</option>
                        <option value="commercialFlips">Commercial Flips</option>
                        <option value="partitions">Partition Actions</option>
                        <option value="eminentDomain">Eminent Domain Takings</option>
                        <option value="hoaLiens">HOA Superliens</option>
                    </select>
                </div>
                <div>
                    <label htmlFor="strategicLens" className="block text-sm font-medium text-slate-300">Strategic Lens *</label>
                    <select id="strategicLens" value={realEstateAlphaBrief.strategicLens} onChange={e => setRealEstateAlphaBrief(p => ({...p, strategicLens: e.target.value as any}))} className="mt-1 w-full bg-slate-800 border border-slate-600 rounded-md p-2 text-slate-200">
                        <option value="autoSelect">Auto-Select by AI</option>
                        <option value="48LawsOfPower">The 48 Laws of Power (Robert Greene)</option>
                        <option value="herosJourney">The Hero's Journey (Joseph Campbell)</option>
                        <option value="buyThenBuild">Buy Then Build (Walker Deibel)</option>
                        <option value="custom">Custom...</option>
                    </select>
                    <p className="text-xs text-slate-400 mt-1">This lens will shape the platform's core strategy, narrative, and competitive moat.</p>
                </div>
                {realEstateAlphaBrief.strategicLens === 'custom' && (
                    <div className="animate-fade-in">
                         <label htmlFor="customStrategicLens" className="block text-sm font-medium text-slate-300">Custom Strategic Lens *</label>
                         <input type="text" id="customStrategicLens" value={realEstateAlphaBrief.customStrategicLens} onChange={e => setRealEstateAlphaBrief(p => ({...p, customStrategicLens: e.target.value}))} className="mt-1 w-full bg-slate-800 border border-slate-600 rounded-md p-2 text-slate-200" placeholder="Enter your own strategic framework or book title" />
                    </div>
                )}
                 <div>
                    <label htmlFor="realEstateData" className="block text-sm font-medium text-slate-300">Your Proprietary Data (Optional)</label>
                    <p className="text-xs text-slate-400 mb-2">Upload a CSV or text file. The AI will analyze it and incorporate insights into its strategy.</p>
                    <input type="file" ref={realEstateFileInputRef} onChange={(e) => handleFileChange(e, true)} className="hidden" accept=".txt,.csv" />
                    <button type="button" onClick={() => handleUploadClick(true)} className="mt-2 text-sm text-blue-400 hover:underline">
                        {realEstateAlphaBrief.uploadedData ? 'Replace File' : 'Upload File'}
                    </button>
                    {realEstateAlphaBrief.uploadedData && <span className="text-xs text-slate-500 ml-2">File loaded.</span>}
                </div>
            </div>
        )}
        
        {/* SALES CO-PILOT FORM */}
        {analysisType === 'salesCopilot' && (
            <div className="space-y-4 animate-fade-in">
                <p className="text-sm text-slate-400 text-center -mb-2">Get real-time, psychologically-tuned scripts to handle any sales objection.</p>
                <div>
                    <label htmlFor="salesContext" className="block text-sm font-medium text-slate-300">Sales Context (Optional)</label>
                    <textarea id="salesContext" rows={3} value={salesCopilotBrief.salesContext} onChange={e => setSalesCopilotBrief(p => ({...p, salesContext: e.target.value}))} className="mt-1 w-full bg-slate-800 border border-slate-600 rounded-md p-2 text-slate-200" placeholder="e.g., 'Selling a $5,000/mo marketing retainer to a local gym owner. I've already done a demo, this is the follow-up call.'" />
                </div>
                <div>
                    <label htmlFor="prospectObjection" className="block text-sm font-medium text-slate-300">Prospect's Objection or Question *</label>
                    <input type="text" id="prospectObjection" value={salesCopilotBrief.prospectObjection} onChange={e => setSalesCopilotBrief(p => ({...p, prospectObjection: e.target.value}))} className="mt-1 w-full bg-slate-800 border border-slate-600 rounded-md p-2 text-slate-200" placeholder="e.g., 'That seems too expensive.' or 'How is this different from my current provider?'" />
                </div>
            </div>
        )}
        
        {/* SOVEREIGN ENGINE FORM */}
        {analysisType === 'sovereignEngine' && (
            <div className="space-y-4 animate-fade-in">
                <p className="text-sm text-slate-400 text-center -mb-2">Describe a multi-step workflow in natural language. The AI will execute it and deliver the final assets.</p>
                <div>
                    <label htmlFor="workflowDescription" className="block text-sm font-medium text-slate-300">Workflow Description *</label>
                    <textarea id="workflowDescription" rows={4} value={sovereignEngineBrief.workflowDescription} onChange={e => setSovereignEngineBrief(p => ({...p, workflowDescription: e.target.value}))} className="mt-1 w-full bg-slate-800 border border-slate-600 rounded-md p-2 text-slate-200" placeholder="e.g., 'Take a business idea, generate a Dominance Blueprint, extract the core sales angle, and use it to write the script for a 'Billy Mays' style demo video.'" />
                </div>
                 <div>
                    <label htmlFor="initialInput" className="block text-sm font-medium text-slate-300">Initial Input Data (Optional)</label>
                    <textarea id="initialInput" rows={2} value={sovereignEngineBrief.initialInput} onChange={e => setSovereignEngineBrief(p => ({...p, initialInput: e.target.value}))} className="mt-1 w-full bg-slate-800 border border-slate-600 rounded-md p-2 text-slate-200" placeholder="e.g., The business idea to start the workflow with: 'An AI-powered tool for creating personalized children's stories.'" />
                </div>
            </div>
        )}

        {/* ALPHA SIGNAL FORM */}
        {analysisType === 'alphaSignal' && (
            <div className="space-y-4 animate-fade-in">
                 <p className="text-sm text-slate-400 text-center -mb-2">Define your objective. The AI will generate high-probability plays to achieve it.</p>
                <div className="flex flex-col sm:flex-row gap-4">
                    <div className="flex-1">
                        <label htmlFor="revenueTarget" className="block text-sm font-medium text-slate-300">Revenue Target *</label>
                        <input type="text" id="revenueTarget" value={alphaSignalBrief.revenueTarget} onChange={e => setAlphaSignalBrief(p => ({...p, revenueTarget: e.target.value}))} className="mt-1 w-full bg-slate-800 border border-slate-600 rounded-md p-2 text-slate-200" placeholder="$100,000" />
                    </div>
                    <div className="flex-1">
                        <label htmlFor="timeframe" className="block text-sm font-medium text-slate-300">Timeframe *</label>
                        <input type="text" id="timeframe" value={alphaSignalBrief.timeframe} onChange={e => setAlphaSignalBrief(p => ({...p, timeframe: e.target.value}))} className="mt-1 w-full bg-slate-800 border border-slate-600 rounded-md p-2 text-slate-200" placeholder="48 hours" />
                    </div>
                </div>
                <div>
                    <label htmlFor="alphaAreaOfInterest" className="block text-sm font-medium text-slate-300">Area of Interest / Market to Exploit *</label>
                    <textarea id="alphaAreaOfInterest" rows={3} value={alphaSignalBrief.areaOfInterest} onChange={e => setAlphaSignalBrief(p => ({...p, areaOfInterest: e.target.value}))} className="mt-1 w-full bg-slate-800 border border-slate-600 rounded-md p-2 text-slate-200" placeholder="e.g., The market for credible 'business-in-a-box' solutions on TikTok" />
                </div>
            </div>
        )}
        
        {/* B2B FORM */}
        {analysisType === 'b2b' && (
            <div className="space-y-4 animate-fade-in">
                <div>
                    <label className="block text-sm font-medium text-slate-300 mb-2">Goal</label>
                    <div className="flex rounded-md shadow-sm">
                        <button type="button" onClick={() => setGoal('discover')} className={`flex-1 py-2 px-4 text-sm font-medium rounded-l-md transition ${goal === 'discover' ? 'bg-indigo-600 text-white z-10 ring-1 ring-indigo-500' : 'bg-slate-800 text-slate-300 hover:bg-slate-700'}`}>Discover New Audiences</button>
                        <button type="button" onClick={() => setGoal('expand')} className={`flex-1 py-2 px-4 text-sm font-medium rounded-r-md transition ${goal === 'expand' ? 'bg-indigo-600 text-white z-10 ring-1 ring-indigo-500' : 'bg-slate-800 text-slate-300 hover:bg-slate-700'}`}>Expand Existing List</button>
                    </div>
                </div>
                {goal === 'discover' && (
                    <div className="space-y-4">
                        <p className="text-xs text-slate-400 text-center">Provide at least one of the following to discover new B2B audiences.</p>
                        <div>
                            <label htmlFor="industry" className="block text-sm font-medium text-slate-300">Target Industry or Niche</label>
                            <input type="text" id="industry" value={b2bBrief.industry} onChange={e => setB2bBrief(p => ({...p, industry: e.target.value}))} className="mt-1 w-full bg-slate-800 border border-slate-600 rounded-md p-2 text-slate-200" placeholder="e.g., B2B SaaS for Financial Services" />
                        </div>
                         <div>
                            <label htmlFor="contextualUrl" className="block text-sm font-medium text-slate-300">Your Company Website (for context)</label>
                            <input type="url" id="contextualUrl" value={contextualUrl} onChange={e => setContextualUrl(e.target.value)} className="mt-1 w-full bg-slate-800 border border-slate-600 rounded-md p-2 text-slate-200" placeholder="https://yourcompany.com" />
                        </div>
                        <div>
                            <label htmlFor="b2bCompetitorUrl" className="block text-sm font-medium text-slate-300">A Competitor's Website</label>
                            <input type="url" id="b2bCompetitorUrl" value={b2bCompetitorUrl} onChange={e => setB2bCompetitorUrl(e.target.value)} className="mt-1 w-full bg-slate-800 border border-slate-600 rounded-md p-2 text-slate-200" placeholder="https://competitor.com" />
                        </div>
                    </div>
                )}
                 {goal === 'expand' && (
                    <div>
                        <label htmlFor="prospectList" className="block text-sm font-medium text-slate-300">"Golden Customer" List</label>
                        <p className="text-xs text-slate-400 mb-2">Paste a list of your best customers (company names, URLs, or people). One per line.</p>
                        <textarea id="prospectList" rows={6} value={b2bBrief.prospectList} onChange={e => setB2bBrief(p => ({...p, prospectList: e.target.value}))} className="w-full bg-slate-800 border border-slate-600 rounded-md p-2 text-slate-200" placeholder="Acme Corp, example.com&#10;John Doe, CEO at Initech&#10;linkedin.com/company/globex" />
                        <input type="file" ref={fileInputRef} onChange={(e) => handleFileChange(e)} className="hidden" accept=".txt,.csv" />
                        <button type="button" onClick={() => handleUploadClick()} className="mt-2 text-sm text-blue-400 hover:underline">Or upload a .txt/.csv file</button>
                    </div>
                )}
            </div>
        )}
        
        {/* B2C FORM */}
        {(analysisType === 'b2c' || analysisType === 'b2cDecon') && (
            <div className="space-y-4 animate-fade-in">
                <div>
                    <label htmlFor="passionsAndHobbies" className="block text-sm font-medium text-slate-300">Passions and Hobbies / Seed Interest *</label>
                    <input type="text" id="passionsAndHobbies" value={b2cBrief.passionsAndHobbies} onChange={e => setB2cBrief(p => ({...p, passionsAndHobbies: e.target.value}))} className="mt-1 w-full bg-slate-800 border border-slate-600 rounded-md p-2 text-slate-200" placeholder="e.g., specialty coffee, biohacking, vintage synthesizers" />
                </div>
                {analysisType === 'b2c' && (
                    <>
                        <p className="text-xs text-slate-400 text-center">Provide as much context as possible for the best results.</p>
                        <div>
                            <label htmlFor="productCategory" className="block text-sm font-medium text-slate-300">Product Category / Niche</label>
                            <input type="text" id="productCategory" value={b2cBrief.productCategory} onChange={e => setB2cBrief(p => ({...p, productCategory: e.target.value}))} className="mt-1 w-full bg-slate-800 border border-slate-600 rounded-md p-2 text-slate-200" placeholder="e.g., high-performance athletic apparel" />
                        </div>
                        <div>
                            <label htmlFor="competitorBrands" className="block text-sm font-medium text-slate-300">Competitor Brands, Websites, or Social Profiles</label>
                            <textarea id="competitorBrands" rows={3} value={b2cBrief.competitorBrands} onChange={e => setB2cBrief(p => ({...p, competitorBrands: e.target.value}))} className="mt-1 w-full bg-slate-800 border border-slate-600 rounded-md p-2 text-slate-200" placeholder="one per line: e.g., nike.com, @gymshark on instagram" />
                        </div>
                    </>
                )}
                 {analysisType === 'b2cDecon' && (
                    <div>
                        <label htmlFor="productCategoryDecon" className="block text-sm font-medium text-slate-300">Product Category (Optional)</label>
                        <input type="text" id="productCategoryDecon" value={b2cBrief.productCategory} onChange={e => setB2cBrief(p => ({...p, productCategory: e.target.value}))} className="mt-1 w-full bg-slate-800 border border-slate-600 rounded-md p-2 text-slate-200" placeholder="e.g., high-performance athletic apparel" />
                    </div>
                 )}
            </div>
        )}

        {/* B2B PLAYBOOK FORM */}
        {analysisType === 'b2bPlaybook' && (
            <div className="space-y-4 animate-fade-in">
                <div>
                    <label htmlFor="discoveryHypothesis" className="block text-sm font-medium text-slate-300">Core Market Hypothesis *</label>
                    <textarea id="discoveryHypothesis" rows={4} value={playbookBrief.discoveryHypothesis} onChange={e => setPlaybookBrief({ discoveryHypothesis: e.target.value })} className="mt-1 w-full bg-slate-800 border border-slate-600 rounded-md p-2 text-slate-200" placeholder="e.g., 'There is an underserved market of financial advisors at independent firms who are adopting new AI technology for portfolio analysis but lack a client-facing reporting tool.'" />
                </div>
            </div>
        )}
        
        {/* Starving Crowd FORM */}
        {analysisType === 'starvingCrowd' && (
            <div className="space-y-4 animate-fade-in">
                <p className="text-sm text-slate-300 text-center">Your goal is to find a <span className="font-bold text-amber-300">"starving crowd"</span> with a <span className="font-bold text-red-400">"hair-on-fire"</span> problem. The AI will then generate a complete business model to solve it.</p>
                <div>
                    <label htmlFor="areaOfInterest" className="block text-sm font-medium text-slate-300">Pain Point or Area of Interest *</label>
                    <input type="text" id="areaOfInterest" value={starvingCrowdBrief.areaOfInterest} onChange={e => setStarvingCrowdBrief(p => ({...p, areaOfInterest: e.target.value}))} className="mt-1 w-full bg-slate-800 border border-slate-600 rounded-md p-2 text-slate-200" placeholder="Describe a 'hair-on-fire' problem you've observed, an underserved market, or a major inefficiency..." />
                </div>
                 <div>
                    <label htmlFor="contextualUrl-starving" className="block text-sm font-medium text-slate-300">URL for Context (e.g., Forum, Review Site)</label>
                    <input type="url" id="contextualUrl-starving" value={contextualUrl} onChange={e => setContextualUrl(e.target.value)} className="mt-1 w-full bg-slate-800 border border-slate-600 rounded-md p-2 text-slate-200" placeholder="https://reddit.com/r/some-niche" />
                </div>
            </div>
        )}

        {/* Competitive Displacement FORM */}
        {analysisType === 'competitiveDisplacement' && (
             <div className="space-y-4 animate-fade-in">
                <div>
                    <label htmlFor="competitorUrl" className="block text-sm font-medium text-slate-300">Target Competitor URL *</label>
                    <input type="url" id="competitorUrl" value={competitiveDisplacementBrief.contextualUrl} onChange={e => setCompetitiveDisplacementBrief({contextualUrl: e.target.value})} className="mt-1 w-full bg-slate-800 border border-slate-600 rounded-md p-2 text-slate-200" placeholder="https://competitor.com" />
                </div>
            </div>
        )}
        
        {/* AI Venture Architect FORM */}
        {analysisType === 'aiVentureArchitect' && (
             <div className="space-y-4 animate-fade-in">
                <div>
                    <label htmlFor="businessConcept" className="block text-sm font-medium text-slate-300">Micro-Tool Idea or Business Concept *</label>
                    <textarea id="businessConcept" rows={3} value={aiVentureArchitectBrief.businessConcept} onChange={e => setAiVentureArchitectBrief({businessConcept: e.target.value})} className="mt-1 w-full bg-slate-800 border border-slate-600 rounded-md p-2 text-slate-200" placeholder="e.g., 'An AI calculator that estimates ROI for home solar panels' or 'A tool for pitbull owners to find pet-friendly housing.'" />
                </div>
            </div>
        )}

        {/* Video Strategy FORM */}
        {analysisType === 'videoStrategy' && (
             <div className="space-y-4 animate-fade-in">
                <div>
                    <label htmlFor="serviceDescription" className="block text-sm font-medium text-slate-300">Service or Value Proposition *</label>
                    <textarea id="serviceDescription" rows={3} value={videoStrategyBrief.serviceDescription} onChange={e => setVideoStrategyBrief({serviceDescription: e.target.value})} className="mt-1 w-full bg-slate-800 border border-slate-600 rounded-md p-2 text-slate-200" placeholder="e.g., A service that creates personalized video ads for e-commerce stores." />
                </div>
            </div>
        )}

        {/* Image Foundry FORM */}
        {analysisType === 'imageFoundry' && (
             <div className="space-y-4 animate-fade-in">
                <div>
                    <label htmlFor="imagePrompt" className="block text-sm font-medium text-slate-300">Image Prompt *</label>
                    <textarea id="imagePrompt" rows={3} value={imageFoundryBrief.prompt} onChange={e => setImageFoundryBrief({prompt: e.target.value})} className="mt-1 w-full bg-slate-800 border border-slate-600 rounded-md p-2 text-slate-200" placeholder="e.g., a photorealistic image of a futuristic home office with a large window overlooking a neon-lit city at night" />
                </div>
            </div>
        )}

        {/* AI Video Foundry FORM */}
        {analysisType === 'aiVideoFoundry' && (
             <div className="space-y-4 animate-fade-in">
                <div>
                    <label htmlFor="videoScript" className="block text-sm font-medium text-slate-300">Video Script *</label>
                    <textarea id="videoScript" rows={5} value={aiVideoFoundryBrief.script} onChange={e => setAIVideoFoundryBrief({script: e.target.value})} className="mt-1 w-full bg-slate-800 border border-slate-600 rounded-md p-2 text-slate-200" placeholder="Paste the full video script here. The AI will act as a director and engineer to create a production blueprint." />
                </div>
            </div>
        )}


        {/* Dominance Blueprint FORM */}
        {analysisType === 'dominanceBlueprint' && (
             <div className="space-y-4 animate-fade-in">
                <div>
                    <label htmlFor="businessConceptDominance" className="block text-sm font-medium text-slate-300">Business Concept *</label>
                    <textarea id="businessConceptDominance" rows={3} value={dominanceBlueprintBrief.businessConcept} onChange={e => setDominanceBlueprintBrief(p => ({...p, businessConcept: e.target.value}))} className="mt-1 w-full bg-slate-800 border border-slate-600 rounded-md p-2 text-slate-200" placeholder="e.g., A mobile car inspection service using an AI app, a local vet clinic..." />
                </div>
                <div>
                    <label htmlFor="dominanceCompetitorUrl" className="block text-sm font-medium text-slate-300">Competitor URL for SEO Analysis</label>
                    <input 
                        type="url" 
                        id="dominanceCompetitorUrl" 
                        value={dominanceBlueprintBrief.competitorUrl} 
                        onChange={e => setDominanceBlueprintBrief(p => ({ ...p, competitorUrl: e.target.value }))} 
                        className="mt-1 w-full bg-slate-800 border border-slate-600 rounded-md p-2 text-slate-200" 
                        placeholder="https://competitor.com" 
                    />
                    <p className="text-xs text-slate-400 mt-1">Provide a competitor's URL to generate a counter-SEO strategy.</p>
                </div>
            </div>
        )}

        <div className="pt-6 border-t border-slate-700">
            <button
                type="submit"
                disabled={isLoading || !isFormValid()}
                className="w-full flex justify-center items-center bg-blue-600 text-white font-bold py-3 px-4 rounded-md hover:bg-blue-700 disabled:bg-slate-600 disabled:opacity-75 disabled:cursor-not-allowed transition"
            >
                {isLoading && <svg className="animate-spin -ml-1 mr-3 h-5 w-5 text-white" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24"><circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle><path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path></svg>}
                {getButtonText()}
            </button>
            {invalidReason && (
                <p className="text-center text-xs text-yellow-400 mt-3">{invalidReason}</p>
            )}
        </div>
    </form>

    {searchHistory.length > 0 && (
        <div className="mt-8 max-w-3xl mx-auto">
            <h3 className="text-sm font-semibold text-slate-400 mb-2">Recent Analyses</h3>
            <div className="space-y-2">
                {searchHistory.map((brief, index) => (
                    <button
                        key={index}
                        onClick={() => handleRerunSearch(brief)}
                        className="w-full text-left bg-slate-800/50 hover:bg-slate-700/50 border border-slate-700 p-2 rounded-md"
                    >
                        <p className="text-sm text-slate-300 truncate">{getBriefDescription(brief)}</p>
                    </button>
                ))}
            </div>
        </div>
    )}
    </>
  );
};

export default AudienceForm;
