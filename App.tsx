
import React, { useState, useCallback, useEffect } from 'react';
import { 
  AnalysisResult, 
  DiscoveredAudience, 
  ScoredProspect, 
  MonetizationStrategy, 
  HighLeveragePlaybook, 
  StrategicBrief,
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
  SovereignAgent,
  SovereignTask,
  MarketMap,
  GatekeeperBypassReport,
  CashflowProtocolReport,
  RealEstateAlphaReport,
  ImageFoundryResult,
  SalesCopilotResponse,
  SovereignEngineReport,
  ArchimedesProtocolReport,
  FirstStrikeReport,
  AIVideoFoundryReport,
  Project,
  ProjectResults
} from './types';
import { 
  analyzeProspects, 
  discoverAudiences, 
  scoreProspects, 
  generateMonetizationStrategy, 
  generateHighLeveragePlaybook,
  findStarvingCrowdOpportunity,
  generateCompetitiveDisplacementBrief,
  generateAlphaAcquisitionPlaybook,
  validateProspects,
  generateVideoDemoStrategy,
  generateVideoWedgeStrategy,
  generateVeoVideo,
  getVeoOperationStatus,
  generateAIVentureBlueprint,
  generateAICode,
  deconstructB2CMarket,
  generateDominanceBlueprint,
  generatePhygitalDemoVideoStrategy,
  generateLandingPageBlueprint,
  generateLandingPageCode,
  generateAIVideoFoundryReport,
  generateAlphaSignalReport,
  generateChimericAgentReport,
  generateLoneWolfReport,
  generateSovereignAgents,
  generateMarketMap,
  generatePlaybookDirectly,
  generateGatekeeperBypassReport,
  generateCashflowProtocolReport,
  generateRealEstateAlphaReport,
  generateImageFoundry,
  generateSalesCopilotResponse,
  generateSovereignEngineReport,
  generateArchimedesProtocolReport,
  generateFirstStrikeReport
} from './services/geminiService';
import Header from './components/Header';
import AudienceForm from './components/AudienceForm';
import AudienceResults from './components/AudienceResults';
import LoadingSpinner from './components/LoadingSpinner';
import ErrorMessage from './components/ErrorMessage';
import VeoGenerator from './components/VeoGenerator';
import LandingPage from './components/LandingPage';
import AgentCommandCenter from './components/AgentCommandCenter';
import ProjectManager from './components/ProjectManager';
import { FirstStrikeReportComponent } from './components/FirstStrikeReport';


type AppView = 'strategy' | 'commandCenter';

const App: React.FC = () => {
  const [isAppEntered, setIsAppEntered] = useState<boolean>(false);
  const [currentView, setCurrentView] = useState<AppView>('strategy');
  const [analysisType, setAnalysisType] = useState<StrategicBrief['analysisType']>('starvingCrowd');
  const [isTurboMode, setIsTurboMode] = useState<boolean>(false);
  const [lastBrief, setLastBrief] = useState<StrategicBrief | null>(null);
  const [searchHistory, setSearchHistory] = useState<StrategicBrief[]>([]);

  // B2B Results
  const [analysisResult, setAnalysisResult] = useState<AnalysisResult | null>(null);
  const [discoveryResult, setDiscoveryResult] = useState<DiscoveredAudience[] | null>(null);
  
  // B2C Results
  const [b2cDiscoveryResult, setB2cDiscoveryResult] = useState<B2CDiscoveredAudience[] | null>(null);
  const [b2cDeconResult, setB2cDeconResult] = useState<B2CMarketDeconstruction | null>(null);

  // Starving Crowd Results
  const [opportunityBrief, setOpportunityBrief] = useState<OpportunityBrief | null>(null);
  
  // Competitive Displacement Results
  const [competitiveDisplacementBrief, setCompetitiveDisplacementBrief] = useState<CompetitiveDisplacementBrief | null>(null);

  // AI Venture Architect Results
  const [aiVentureBlueprint, setAiVentureBlueprint] = useState<AIVentureBlueprint | null>(null);
  const [dominanceBlueprint, setDominanceBlueprint] = useState<DominanceBlueprint | null>(null);
  
  // Alpha Signal Protocol Results
  const [alphaSignalReport, setAlphaSignalReport] = useState<AlphaSignalReport | null>(null);
  
  // Chimeric Agent Protocol Results
  const [chimericAgentReport, setChimericAgentReport] = useState<ChimericAgentReport | null>(null);
  
  // Lone Wolf Protocol Results
  const [loneWolfReport, setLoneWolfReport] = useState<LoneWolfReport | null>(null);
  
  // Gatekeeper Bypass Results
  const [gatekeeperBypassReport, setGatekeeperBypassReport] = useState<GatekeeperBypassReport | null>(null);
  
  // Cashflow Protocol Results
  const [cashflowProtocolReport, setCashflowProtocolReport] = useState<CashflowProtocolReport | null>(null);

  // Real Estate Alpha Results
  const [realEstateAlphaReport, setRealEstateAlphaReport] = useState<RealEstateAlphaReport | null>(null);

  // Image Foundry Results
  const [imageFoundryResult, setImageFoundryResult] = useState<ImageFoundryResult | null>(null);
  
  // AI Video Foundry Results
  const [aiVideoFoundryReport, setAIVideoFoundryReport] = useState<AIVideoFoundryReport | null>(null);

  // Sales Co-pilot Results
  const [salesCopilotReport, setSalesCopilotReport] = useState<SalesCopilotResponse | null>(null);

  // Sovereign Engine Results
  const [sovereignEngineReport, setSovereignEngineReport] = useState<SovereignEngineReport | null>(null);

  // Archimedes Protocol Results
  const [archimedesProtocolReport, setArchimedesProtocolReport] = useState<ArchimedesProtocolReport | null>(null);
  
  // First Strike Protocol Results
  const [firstStrikeReport, setFirstStrikeReport] = useState<FirstStrikeReport | null>(null);

  // Sovereign Protocol / Command Center
  const [agentWorkforce, setAgentWorkforce] = useState<SovereignAgent[]>([]);
  
  // Market Map
  const [marketMap, setMarketMap] = useState<MarketMap | null>(null);

  // Universal Results
  const [scoredProspectsResult, setScoredProspectsResult] = useState<ScoredProspect[] | null>(null);
  const [monetizationStrategy, setMonetizationStrategy] = useState<MonetizationStrategy | null>(null);
  const [playbook, setPlaybook] = useState<HighLeveragePlaybook | null>(null);
  const [alphaAcquisitionPlaybook, setAlphaAcquisitionPlaybook] = useState<AlphaAcquisitionPlaybook | null>(null);
  const [videoStrategy, setVideoStrategy] = useState<VideoStrategy | null>(null);
  const [phyGitalVideoStrategy, setPhyGitalVideoStrategy] = useState<PhyGitalVideoStrategy | null>(null);
  const [generatedCode, setGeneratedCode] = useState<AICode | null>(null);
  const [landingPageBlueprint, setLandingPageBlueprint] = useState<LandingPageBlueprint | null>(null);
  const [landingPageCode, setLandingPageCode] = useState<AICode | null>(null);
  
  const [veoOperation, setVeoOperation] = useState<any>(null);
  const [veoVideoUrl, setVeoVideoUrl] = useState<string | null>(null);
  const [isGeneratingVideo, setIsGeneratingVideo] = useState<boolean>(false);
  
  const [isLoading, setIsLoading] = useState<boolean>(false);
  const [error, setError] = useState<string | null>(null);
  const [activeAudienceForMonetization, setActiveAudienceForMonetization] = useState<DiscoveredAudience | B2CDiscoveredAudience | null>(null);
  
  // Project Management
  const [savedProjects, setSavedProjects] = useState<Project[]>([]);
  const [projectManagerVisible, setProjectManagerVisible] = useState(false);
  const [briefToLoad, setBriefToLoad] = useState<StrategicBrief | null>(null);


  useEffect(() => {
    const savedHistory = localStorage.getItem('searchHistory');
    if (savedHistory) {
      try {
        setSearchHistory(JSON.parse(savedHistory));
      } catch (e) {
        console.error("Failed to parse search history:", e);
        localStorage.removeItem('searchHistory');
      }
    }
    const savedWorkforce = localStorage.getItem('agentWorkforce');
    if (savedWorkforce) {
        try {
            const parsedWorkforce = JSON.parse(savedWorkforce);
            if (Array.isArray(parsedWorkforce)) {
                setAgentWorkforce(parsedWorkforce);
            } else {
                throw new Error("Saved workforce data is malformed.");
            }
        } catch(e) {
            console.error("Failed to parse agent workforce:", e);
            // Don't wipe data on load error.
            setError("Could not load saved agent workforce. Data might be corrupted. Starting a new session.");
        }
    }
    const savedProjectsData = localStorage.getItem('savedProjects');
    if (savedProjectsData) {
        try {
            setSavedProjects(JSON.parse(savedProjectsData));
        } catch(e) {
            console.error("Failed to parse saved projects:", e);
        }
    }
  }, []);

  useEffect(() => {
      localStorage.setItem('agentWorkforce', JSON.stringify(agentWorkforce));
  }, [agentWorkforce]);

  // Effect to process agent tasks
   useEffect(() => {
    let taskTimer: number;

    const processTasks = () => {
      setAgentWorkforce(currentWorkforce => {
        let workforceChanged = false;
        
        // Create a map of completed task IDs for quick lookup
        const completedTaskIds = new Set<string>();
        currentWorkforce.forEach(agent => {
            agent.tasks.forEach(task => {
                if (task.status === 'Completed') {
                    completedTaskIds.add(task.id);
                }
            });
        });

        const newWorkforce = currentWorkforce.map(agent => {
          if (agent.status === 'Idle') {
            const executableTaskIndex = agent.tasks.findIndex(t => {
              if (t.status !== 'Pending') return false;
              // Check if all dependencies are met
              return (t.dependsOn || []).every(depId => completedTaskIds.has(depId));
            });

            if (executableTaskIndex !== -1) {
              workforceChanged = true;
              const newTasks = [...agent.tasks];
              newTasks[executableTaskIndex].status = 'Executing';
              
              // Simulate async work
              setTimeout(() => {
                setAgentWorkforce(prev => prev.map(a => {
                  if (a.id === agent.id) {
                    const finalTasks = a.tasks.map(t => t.id === newTasks[executableTaskIndex].id ? { ...t, status: 'Completed' } : t);
                    const isStillActive = finalTasks.some(t => t.status === 'Executing' || t.status === 'Pending' || t.status === 'Waiting');
                    return { ...a, tasks: finalTasks, status: isStillActive ? 'Active' : 'Idle' };
                  }
                  return a;
                }));
              }, 2000 + Math.random() * 3000);

              return { ...agent, tasks: newTasks, status: 'Active' };
            }
          }
          return agent;
        });

        // After checking for tasks to start, update any 'Pending' tasks to 'Waiting' if their dependencies are not met
        const finalWorkforce = newWorkforce.map(agent => {
            const updatedTasks = agent.tasks.map(task => {
                if (task.status === 'Pending' && (task.dependsOn || []).some(depId => !completedTaskIds.has(depId))) {
                    workforceChanged = true;
                    return { ...task, status: 'Waiting' as const };
                }
                if (task.status === 'Waiting' && (task.dependsOn || []).every(depId => completedTaskIds.has(depId))) {
                    workforceChanged = true;
                    return { ...task, status: 'Pending' as const };
                }
                return task;
            });
            return {...agent, tasks: updatedTasks};
        });


        return workforceChanged ? finalWorkforce : currentWorkforce;
      });
    };

    taskTimer = window.setInterval(processTasks, 500);

    return () => clearInterval(taskTimer);
  }, []);

  const updateSearchHistory = (newBrief: StrategicBrief) => {
    setSearchHistory(prevHistory => {
        if (prevHistory.length > 0 && JSON.stringify(prevHistory[0]) === JSON.stringify(newBrief)) {
            return prevHistory;
        }
        const updatedHistory = [newBrief, ...prevHistory].slice(0, 5);
        localStorage.setItem('searchHistory', JSON.stringify(updatedHistory));
        return updatedHistory;
    });
  };

  const clearResults = (clearBrief = true) => {
    setAnalysisResult(null);
    setDiscoveryResult(null);
    setB2cDiscoveryResult(null);
    setB2cDeconResult(null);
    setOpportunityBrief(null);
    setCompetitiveDisplacementBrief(null);
    setAiVentureBlueprint(null);
    setDominanceBlueprint(null);
    setAlphaSignalReport(null);
    setChimericAgentReport(null);
    setLoneWolfReport(null);
    setGatekeeperBypassReport(null);
    setCashflowProtocolReport(null);
    setRealEstateAlphaReport(null);
    setImageFoundryResult(null);
    setSalesCopilotReport(null);
    setSovereignEngineReport(null);
    setArchimedesProtocolReport(null);
    setFirstStrikeReport(null);
    setScoredProspectsResult(null);
    setMonetizationStrategy(null);
    setPlaybook(null);
    setAlphaAcquisitionPlaybook(null);
    setActiveAudienceForMonetization(null);
    setVideoStrategy(null);
    setPhyGitalVideoStrategy(null);
    setVeoOperation(null);
    setVeoVideoUrl(null);
    setIsGeneratingVideo(false);
    setGeneratedCode(null);
    setLandingPageBlueprint(null);
    setLandingPageCode(null);
    setMarketMap(null);
    setAIVideoFoundryReport(null);
    if(clearBrief) {
        setLastBrief(null);
        setBriefToLoad(null);
    }
  }

  const handleSaveProject = (projectName: string) => {
    if (!lastBrief) {
        setError("Cannot save project: no analysis has been run.");
        return;
    }
    const currentResults: ProjectResults = {
        analysisResult, discoveryResult, b2cDiscoveryResult, b2cDeconResult, opportunityBrief,
        competitiveDisplacementBrief, aiVentureBlueprint, dominanceBlueprint, alphaSignalReport,
        chimericAgentReport, loneWolfReport, gatekeeperBypassReport, cashflowProtocolReport,
        realEstateAlphaReport, imageFoundryResult, salesCopilotReport, sovereignEngineReport,
        archimedesProtocolReport, firstStrikeReport,
        scoredProspectsResult, monetizationStrategy, playbook, alphaAcquisitionPlaybook, videoStrategy, 
        phyGitalVideoStrategy, generatedCode, landingPageBlueprint, landingPageCode, marketMap,
        aiVideoFoundryReport
    };
    const newProject: Project = {
        id: `proj_${Date.now()}`,
        name: projectName,
        timestamp: Date.now(),
        brief: lastBrief,
        results: currentResults
    };
    const newProjects = [newProject, ...savedProjects];
    setSavedProjects(newProjects);
    localStorage.setItem('savedProjects', JSON.stringify(newProjects));
  };

  const handleLoadProject = (projectId: string) => {
    const projectToLoad = savedProjects.find(p => p.id === projectId);
    if (projectToLoad) {
        clearResults(false); // don't clear the brief we are about to load

        // Restore results
        setAnalysisResult(projectToLoad.results.analysisResult);
        setDiscoveryResult(projectToLoad.results.discoveryResult);
        setB2cDiscoveryResult(projectToLoad.results.b2cDiscoveryResult);
        setB2cDeconResult(projectToLoad.results.b2cDeconResult);
        setOpportunityBrief(projectToLoad.results.opportunityBrief);
        setCompetitiveDisplacementBrief(projectToLoad.results.competitiveDisplacementBrief);
        setAiVentureBlueprint(projectToLoad.results.aiVentureBlueprint);
        setDominanceBlueprint(projectToLoad.results.dominanceBlueprint);
        setAlphaSignalReport(projectToLoad.results.alphaSignalReport);
        setChimericAgentReport(projectToLoad.results.chimericAgentReport);
        setLoneWolfReport(projectToLoad.results.loneWolfReport);
        setGatekeeperBypassReport(projectToLoad.results.gatekeeperBypassReport);
        setCashflowProtocolReport(projectToLoad.results.cashflowProtocolReport);
        setRealEstateAlphaReport(projectToLoad.results.realEstateAlphaReport);
        setImageFoundryResult(projectToLoad.results.imageFoundryResult);
        setSalesCopilotReport(projectToLoad.results.salesCopilotReport);
        setSovereignEngineReport(projectToLoad.results.sovereignEngineReport);
        setArchimedesProtocolReport(projectToLoad.results.archimedesProtocolReport);
        setFirstStrikeReport(projectToLoad.results.firstStrikeReport);
        setScoredProspectsResult(projectToLoad.results.scoredProspectsResult);
        setMonetizationStrategy(projectToLoad.results.monetizationStrategy);
        setPlaybook(projectToLoad.results.playbook);
        setAlphaAcquisitionPlaybook(projectToLoad.results.alphaAcquisitionPlaybook);
        setVideoStrategy(projectToLoad.results.videoStrategy);
        setPhyGitalVideoStrategy(projectToLoad.results.phyGitalVideoStrategy);
        setGeneratedCode(projectToLoad.results.generatedCode);
        setLandingPageBlueprint(projectToLoad.results.landingPageBlueprint);
        setLandingPageCode(projectToLoad.results.landingPageCode);
        setMarketMap(projectToLoad.results.marketMap);
        setAIVideoFoundryReport(projectToLoad.results.aiVideoFoundryReport);

        // Set brief to load into form
        setLastBrief(projectToLoad.brief);
        setBriefToLoad(projectToLoad.brief);
        setAnalysisType(projectToLoad.brief.analysisType);

        setProjectManagerVisible(false);
        setCurrentView('strategy');
    }
  };

  const handleDeleteProject = (projectId: string) => {
    const newProjects = savedProjects.filter(p => p.id !== projectId);
    setSavedProjects(newProjects);
    localStorage.setItem('savedProjects', JSON.stringify(newProjects));
  };

  const handleGenerate = useCallback(async (brief: StrategicBrief) => {
    setIsLoading(true);
    setError(null);
    clearResults();
    setCurrentView('strategy');
    setAnalysisType(brief.analysisType);
    setLastBrief(brief);
    updateSearchHistory(brief);

    if (brief.analysisType === 'veoVideo') {
        setIsLoading(false);
        return;
    }

    try {
      switch (brief.analysisType) {
        case 'b2b':
          if (brief.goal === 'expand') setAnalysisResult(await analyzeProspects(brief, isTurboMode));
          else setDiscoveryResult(await discoverAudiences(brief, isTurboMode) as DiscoveredAudience[]);
          break;
        case 'b2c':
          setB2cDiscoveryResult(await discoverAudiences(brief, isTurboMode) as B2CDiscoveredAudience[]);
          break;
        case 'b2cDecon':
          setB2cDeconResult(await deconstructB2CMarket(brief, isTurboMode));
          break;
        case 'starvingCrowd':
          setOpportunityBrief(await findStarvingCrowdOpportunity(brief, isTurboMode));
          break;
        case 'competitiveDisplacement':
          setCompetitiveDisplacementBrief(await generateCompetitiveDisplacementBrief(brief, isTurboMode));
          break;
        case 'videoStrategy':
           setVideoStrategy(await generateVideoDemoStrategy(brief, isTurboMode));
           break;
        case 'aiVentureArchitect':
           setAiVentureBlueprint(await generateAIVentureBlueprint(brief, isTurboMode));
           break;
        case 'dominanceBlueprint':
           setDominanceBlueprint(await generateDominanceBlueprint(brief, isTurboMode));
           break;
        case 'alphaSignal':
            setAlphaSignalReport(await generateAlphaSignalReport(brief, isTurboMode));
            break;
        case 'chimericAgent':
            setChimericAgentReport(await generateChimericAgentReport(brief, isTurboMode));
            break;
        case 'loneWolf':
            setLoneWolfReport(await generateLoneWolfReport(isTurboMode));
            break;
        case 'gatekeeperBypass':
            setGatekeeperBypassReport(await generateGatekeeperBypassReport(brief, isTurboMode));
            break;
        case 'cashflowProtocol':
            setCashflowProtocolReport(await generateCashflowProtocolReport(brief, isTurboMode));
            break;
        case 'realEstateAlpha':
            setRealEstateAlphaReport(await generateRealEstateAlphaReport(brief, isTurboMode));
            break;
        case 'imageFoundry':
            setImageFoundryResult(await generateImageFoundry(brief, isTurboMode));
            break;
        case 'salesCopilot':
            setSalesCopilotReport(await generateSalesCopilotResponse(brief, isTurboMode));
            break;
        case 'sovereignEngine':
            setSovereignEngineReport(await generateSovereignEngineReport(brief, isTurboMode));
            break;
        case 'archimedesProtocol':
            setArchimedesProtocolReport(await generateArchimedesProtocolReport(isTurboMode));
            break;
        case 'b2bPlaybook':
            setPlaybook(await generatePlaybookDirectly(brief, isTurboMode));
            break;
        case 'aiVideoFoundry':
            if(brief.script) setAIVideoFoundryReport(await generateAIVideoFoundryReport(brief.script, isTurboMode));
            break;
      }
    } catch (err) {
      if (err instanceof Error) setError(err.message);
      else setError("An unknown error occurred.");
    } finally {
      setIsLoading(false);
    }
  }, [isTurboMode]);
  
  const handleDeployAgents = useCallback(async (play: any, sourceReportType: string) => {
    setIsLoading(true);
    setError(null);
    try {
        const newAgents = await generateSovereignAgents(play, sourceReportType, isTurboMode);
        setAgentWorkforce(prev => [...prev, ...newAgents]);
        setCurrentView('commandCenter');
    } catch (err) {
        if (err instanceof Error) setError(err.message);
        else setError("An unknown error occurred while deploying agents.");
    } finally {
        setIsLoading(false);
    }
  }, [isTurboMode]);

  const handleAssignNewTask = useCallback((agentId: string, taskBrief: string) => {
    const newTask: SovereignTask = {
        id: `task_${Date.now()}_${Math.random()}`,
        brief: taskBrief,
        status: 'Pending',
    };
    setAgentWorkforce(prev => prev.map(agent => 
        agent.id === agentId 
            ? { ...agent, tasks: [...agent.tasks, newTask], status: 'Active' }
            : agent
    ));
  }, []);

  const handleValidateLeads = useCallback(async (prospectsToValidate: LookalikeProspect[]) => {
    if (!analysisResult || prospectsToValidate.length === 0) {
      setError("Cannot validate leads. No prospects were selected.");
      return;
    }
    setIsLoading(true);
    setError(null);
    try {
      const validationData = await validateProspects(prospectsToValidate);
      const validationMap = new Map(validationData.map(v => [v.fullName, { status: v.validationStatus, rationale: v.validationRationale }]));
      setAnalysisResult(prevResult => {
        if (!prevResult) return null;
        const updatedProspects = prevResult.lookalikeProspects.map(prospect => {
          if (validationMap.has(prospect.fullName)) {
              const validation = validationMap.get(prospect.fullName)!;
              return { ...prospect, validationStatus: validation.status, validationRationale: validation.rationale };
          }
          return prospect;
        });
        return { ...prevResult, lookalikeProspects: updatedProspects };
      });
    } catch (err) {
      if (err instanceof Error) setError(err.message);
      else setError("An unknown error occurred during lead validation.");
    } finally {
      setIsLoading(false);
    }
  }, [analysisResult]);
  
  const handleScore = useCallback(async (prospectsToScore: string) => {
    if (!analysisResult) {
      setError("Cannot score prospects without a B2B analysis.");
      return;
    }
    setIsLoading(true);
    setError(null);
    try {
        setScoredProspectsResult(await scoreProspects(prospectsToScore, analysisResult));
    } catch(err) {
        if (err instanceof Error) setError(err.message);
        else setError("An unknown error occurred during scoring.");
    } finally {
        setIsLoading(false);
    }
  }, [analysisResult]);

  const handleMonetize = useCallback(async (audience: DiscoveredAudience | B2CDiscoveredAudience) => {
    setIsLoading(true);
    setError(null);
    setMonetizationStrategy(null);
    setPlaybook(null);
    setAlphaAcquisitionPlaybook(null);
    setActiveAudienceForMonetization(audience);
    try {
        setMonetizationStrategy(await generateMonetizationStrategy(audience, isTurboMode));
    } catch(err) {
        if (err instanceof Error) setError(err.message);
        else setError("An unknown error occurred during monetization analysis.");
    } finally {
        setIsLoading(false);
    }
  }, [isTurboMode]);

  const handleGeneratePlaybook = useCallback(async () => {
    if (!monetizationStrategy || !activeAudienceForMonetization) {
        setError("Cannot generate a playbook without a monetization strategy and active audience.");
        return;
    }
     setIsLoading(true);
     setError(null);
     setPlaybook(null);
     setAlphaAcquisitionPlaybook(null);
     try {
        setPlaybook(await generateHighLeveragePlaybook(monetizationStrategy, (activeAudienceForMonetization as any).quantitativeModel.decisionScoreFormula, analysisType as 'b2b' | 'b2c', isTurboMode));
     } catch(err) {
        if (err instanceof Error) setError(err.message);
        else setError("An unknown error occurred while generating the playbook.");
     } finally {
        setIsLoading(false);
     }
  }, [monetizationStrategy, activeAudienceForMonetization, analysisType, isTurboMode]);
  
  const handleGenerateAcquisitionPlaybook = useCallback(async () => {
    if (!playbook) {
        setError("Cannot generate an acquisition playbook without a high-leverage playbook.");
        return;
    }
     setIsLoading(true);
     setError(null);
     setAlphaAcquisitionPlaybook(null);
     try {
        setAlphaAcquisitionPlaybook(await generateAlphaAcquisitionPlaybook(playbook, isTurboMode));
     } catch(err) {
        if (err instanceof Error) setError(err.message);
        else setError("An unknown error occurred while generating the acquisition playbook.");
     } finally {
        setIsLoading(false);
     }
  }, [playbook, isTurboMode]);

  const handleGenerateVideoWedge = useCallback(async () => {
    if (!competitiveDisplacementBrief) {
      setError("Cannot generate a video wedge without a competitive brief.");
      return;
    }
    setIsLoading(true);
    setError(null);
    try {
      setVideoStrategy(await generateVideoWedgeStrategy(competitiveDisplacementBrief, isTurboMode));
    } catch (err) {
      if (err instanceof Error) setError(err.message);
      else setError("An unknown error occurred while generating the video wedge strategy.");
    } finally {
      setIsLoading(false);
    }
  }, [competitiveDisplacementBrief, isTurboMode]);

  const handleGeneratePhygitalDemoVideo = useCallback(async () => {
    if (!dominanceBlueprint) {
      setError("Cannot generate a demo video without a Dominance Blueprint.");
      return;
    }
    setIsLoading(true);
    setError(null);
    setPhyGitalVideoStrategy(null);
    try {
      setPhyGitalVideoStrategy(await generatePhygitalDemoVideoStrategy(dominanceBlueprint, isTurboMode));
    } catch (err) {
      if (err instanceof Error) setError(err.message);
      else setError("An unknown error occurred while generating the demo video strategy.");
    } finally {
      setIsLoading(false);
    }
  }, [dominanceBlueprint, isTurboMode]);

  const handleGenerateCode = useCallback(async (ultimatePrompt: string) => {
    if (!ultimatePrompt) {
      setError("Cannot generate code without the Ultimate Prompt.");
      return;
    }
    setIsLoading(true);
    setError(null);
    setGeneratedCode(null);
    // Switch view back to strategy to see the code result if triggered from command center
    setCurrentView('strategy'); 
    try {
      setGeneratedCode(await generateAICode(ultimatePrompt, isTurboMode));
    } catch (err) {
      if (err instanceof Error) setError(err.message);
      else setError("An unknown error occurred while generating code.");
    } finally {
      setIsLoading(false);
    }
  }, [isTurboMode]);
  
  const handleGenerateAIVideoFoundry = useCallback(async (script: string) => {
    if (!script) {
        setError("Cannot generate video foundry without a script.");
        return;
    }
    setIsLoading(true);
    setError(null);
    clearResults(false);
    setLastBrief(prev => ({...prev!, analysisType: 'aiVideoFoundry', script: script }));
    setAnalysisType('aiVideoFoundry');
    try {
        setAIVideoFoundryReport(await generateAIVideoFoundryReport(script, isTurboMode));
    } catch (err) {
        if (err instanceof Error) setError(err.message);
        else setError("An unknown error occurred while generating the AI video foundry.");
    } finally {
        setIsLoading(false);
    }
  }, [isTurboMode]);


  const handleGenerateCodeFromOpportunity = useCallback(async (brief: OpportunityBrief) => {
      if (!brief) {
        setError("Cannot generate code without an Opportunity Brief.");
        return;
      }
      setIsLoading(true);
      setError(null);
      setGeneratedCode(null);

      const { starvingCrowd, aspirinProblem, aiPoweredSolution } = brief;
      const ultimatePrompt = `
        Your task is to build the following 'Results-in-Advance' micro-tool.
        **Tool Name:** ${aiPoweredSolution.resultsInAdvanceMechanism.name}
        **Tool Description:** ${aiPoweredSolution.resultsInAdvanceMechanism.description}
        **Target Audience (Starving Crowd):** ${starvingCrowd.name} - ${starvingCrowd.description}
        **Problem it Solves (Aspirin Problem):** ${aspirinProblem.problem}

        **Core Logic & UX:**
        - Create the necessary HTML inputs (text fields, sliders, etc.) for a user to describe their situation.
        - Write JavaScript logic to process these inputs.
        - Display a valuable, insightful result that gives the user an "Aha!" moment and demonstrates the power of the full solution.
        - The tool should be simple, intuitive, and provide immediate value.
      `;

      try {
        setGeneratedCode(await generateAICode(ultimatePrompt, isTurboMode));
      } catch (err) {
        if (err instanceof Error) setError(err.message);
        else setError("An unknown error occurred while generating code.");
      } finally {
        setIsLoading(false);
      }
  }, [isTurboMode]);

  const handleGenerateLandingPageBlueprint = useCallback(async (prompt: string) => {
    setIsLoading(true);
    setError(null);
    setLandingPageBlueprint(null);
    setLandingPageCode(null);
    try {
      setLandingPageBlueprint(await generateLandingPageBlueprint(prompt, isTurboMode));
    } catch (err) {
      if (err instanceof Error) setError(err.message);
      else setError("An unknown error occurred while generating the landing page blueprint.");
    } finally {
      setIsLoading(false);
    }
  }, [isTurboMode]);

  const handleGenerateLandingPageCode = useCallback(async () => {
    if (!landingPageBlueprint) {
      setError("Cannot generate code without a blueprint.");
      return;
    }
    setIsLoading(true);
    setError(null);
    setLandingPageCode(null);
    try {
      setLandingPageCode(await generateLandingPageCode(landingPageBlueprint, isTurboMode));
    } catch (err) {
      if (err instanceof Error) setError(err.message);
      else setError("An unknown error occurred while generating the landing page code.");
    } finally {
      setIsLoading(false);
    }
  }, [landingPageBlueprint, isTurboMode]);
  
  const handleRediscover = useCallback(() => {
      if (lastBrief && lastBrief.analysisType === 'b2c') {
          handleGenerate(lastBrief);
      }
  }, [lastBrief, handleGenerate]);

  const handleGenerateVeo = useCallback(async ({ prompt, image, aspectRatio }: { prompt: string, image?: { imageBytes: string, mimeType: string }, aspectRatio: '16:9' | '9:16' }) => {
    setIsGeneratingVideo(true);
    setError(null);
    setVeoVideoUrl(null);
    try {
        setVeoOperation(await generateVeoVideo({ prompt, image, aspectRatio }));
    } catch (err) {
        if (err instanceof Error) {
            if (err.message.includes("Requested entity was not found")) {
                 setError("API Key validation failed. Please re-select your key.");
            } else {
                setError(err.message);
            }
        } else {
            setError("An unknown error occurred during video generation.");
        }
        setIsGeneratingVideo(false);
    }
  }, []);

  const handleGenerateMarketMap = useCallback(async (context: any, sourceReportType: string) => {
    setIsLoading(true);
    setError(null);
    setMarketMap(null); // Clear previous map
    try {
      setMarketMap(await generateMarketMap(context, sourceReportType, isTurboMode));
    } catch (err) {
      if (err instanceof Error) setError(err.message);
      else setError("An unknown error occurred while generating the market map.");
    } finally {
      setIsLoading(false);
    }
  }, [isTurboMode]);
  
  const handleGenerateFirstStrike = useCallback(async (context: any) => {
    if (!context) {
      setError("Cannot generate First Strike Protocol without a strategic context.");
      return;
    }
    setIsLoading(true);
    setError(null);
    setFirstStrikeReport(null);
    try {
      setFirstStrikeReport(await generateFirstStrikeReport(context, isTurboMode));
    } catch (err) {
      if (err instanceof Error) setError(err.message);
      else setError("An unknown error occurred while generating the First Strike Protocol.");
    } finally {
      setIsLoading(false);
    }
  }, [isTurboMode]);


  useEffect(() => {
    if (veoOperation && isGeneratingVideo) {
        const poll = setInterval(async () => {
            try {
                const updatedOperation = await getVeoOperationStatus({ operation: veoOperation });
                setVeoOperation(updatedOperation);
                if (updatedOperation.done) {
                    setIsGeneratingVideo(false);
                    clearInterval(poll);
                    const downloadLink = updatedOperation.response?.generatedVideos?.[0]?.video?.uri;
                    if (downloadLink) {
                        const response = await fetch(`${downloadLink}&key=${process.env.API_KEY}`);
                        const blob = await response.blob();
                        const objectUrl = URL.createObjectURL(blob);
                        setVeoVideoUrl(objectUrl);
                    } else {
                        setError("Video generation finished, but no video URL was found.");
                    }
                }
            } catch (err) {
                 if (err instanceof Error) setError(err.message);
                 else setError("An unknown error occurred while checking video status.");
                 setIsGeneratingVideo(false);
                 clearInterval(poll);
            }
        }, 10000);

        return () => clearInterval(poll);
    }
  }, [veoOperation, isGeneratingVideo]);

  if (!isAppEntered) {
    return <LandingPage onEnterApp={() => setIsAppEntered(true)} />;
  }
  
  const renderMainContent = () => {
    if (currentView === 'commandCenter') {
        return <AgentCommandCenter workforce={agentWorkforce} onAssignTask={handleAssignNewTask} onBuildToolFromAgent={handleGenerateCode} />;
    }
    
    if (analysisType === 'veoVideo') {
      return (
        <VeoGenerator 
          onGenerate={handleGenerateVeo}
          isGenerating={isGeneratingVideo}
          videoUrl={veoVideoUrl}
          operation={veoOperation}
          error={error}
          setError={setError}
          onExit={() => setAnalysisType('b2b')}
        />
      );
    }

    return (
      <>
        <div className="max-w-3xl mx-auto">
          <AudienceForm 
            onGenerate={handleGenerate} 
            isLoading={isLoading} 
            searchHistory={searchHistory}
            isTurboMode={isTurboMode}
            setIsTurboMode={setIsTurboMode}
            analysisType={analysisType}
            setAnalysisType={setAnalysisType}
            briefToLoad={briefToLoad}
          />
        </div>

        <div className="mt-12">
          {isLoading && <LoadingSpinner />}
          {error && <ErrorMessage message={error} />}
          
          <AudienceResults
            analysisType={analysisType as Exclude<StrategicBrief['analysisType'], 'veoVideo'>}
            analysis={analysisResult} 
            discovery={discoveryResult}
            b2cDiscovery={b2cDiscoveryResult}
            b2cDeconResult={b2cDeconResult}
            opportunityBrief={opportunityBrief}
            competitiveDisplacementBrief={competitiveDisplacementBrief}
            aiVentureBlueprint={aiVentureBlueprint}
            dominanceBlueprint={dominanceBlueprint}
            alphaSignalReport={alphaSignalReport}
            chimericAgentReport={chimericAgentReport}
            loneWolfReport={loneWolfReport}
            gatekeeperBypassReport={gatekeeperBypassReport}
            cashflowProtocolReport={cashflowProtocolReport}
            realEstateAlphaReport={realEstateAlphaReport}
            imageFoundryResult={imageFoundryResult}
            salesCopilotReport={salesCopilotReport}
            sovereignEngineReport={sovereignEngineReport}
            archimedesProtocolReport={archimedesProtocolReport}
            firstStrikeReport={firstStrikeReport}
            scoredProspects={scoredProspectsResult}
            monetizationStrategy={monetizationStrategy}
            playbook={playbook}
            alphaAcquisitionPlaybook={alphaAcquisitionPlaybook}
            onScore={handleScore}
            onMonetize={handleMonetize}
            onGeneratePlaybook={handleGeneratePlaybook}
            onGenerateAcquisitionPlaybook={handleGenerateAcquisitionPlaybook}
            onRediscover={handleRediscover}
            onValidateLeads={handleValidateLeads}
            activeAudience={activeAudienceForMonetization}
            videoStrategy={videoStrategy}
            phyGitalVideoStrategy={phyGitalVideoStrategy}
            onGenerateVideoWedge={handleGenerateVideoWedge}
            onGeneratePhygitalDemoVideo={handleGeneratePhygitalDemoVideo}
            generatedCode={generatedCode}
            onGenerateCode={handleGenerateCode}
            onGenerateCodeFromOpportunity={handleGenerateCodeFromOpportunity}
            landingPageBlueprint={landingPageBlueprint}
            landingPageCode={landingPageCode}
            onGenerateLandingPageBlueprint={handleGenerateLandingPageBlueprint}
            onGenerateLandingPageCode={handleGenerateLandingPageCode}
            onDeployAgents={handleDeployAgents}
            marketMap={marketMap}
            onGenerateMarketMap={handleGenerateMarketMap}
            onSaveProject={handleSaveProject}
            onGenerateFirstStrike={handleGenerateFirstStrike}
            onGenerateAIVideoFoundry={handleGenerateAIVideoFoundry}
            aiVideoFoundryReport={aiVideoFoundryReport}
          />
        </div>
      </>
    );
  };


  return (
    <div className="min-h-screen bg-slate-900 text-slate-200 font-sans">
      <Header 
        currentView={currentView}
        onSetView={setCurrentView}
        onShowProjects={() => setProjectManagerVisible(true)}
      />
      <ProjectManager
        isVisible={projectManagerVisible}
        onClose={() => setProjectManagerVisible(false)}
        projects={savedProjects}
        onLoadProject={handleLoadProject}
        onDeleteProject={handleDeleteProject}
      />
      <main className="container mx-auto px-4 py-8">
        {renderMainContent()}
      </main>
      <footer className="text-center py-6 text-slate-500 text-sm">
        AI Prospecting Engine | For advanced use cases, deploy with a secure backend.
      </footer>
    </div>
  );
};

export default App;
