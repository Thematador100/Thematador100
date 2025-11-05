

export interface BuyingTrigger {
  trigger: string;
  implication: string;
}

// New interface for deeper psychological insights
export interface Motivation {
    driver: string; // e.g., "Desire for Status", "Fear of Missing Out"
    description: string; // How this manifests in the audience
    purchasingImplication: string; // How this influences their buying decisions
}

export interface Demographics {
  ageRange: string;
  incomeLevel: string;
  commonLocations: string[];
}

export interface Psychographics {
  interests: string[];
  motivations: Motivation[];
  onlineBehavior: string[];
  dataSignals: string[]; // Actionable data points for filtering
  buyingTriggers: BuyingTrigger[]; // Replaces stateOfAwareness with actionable intent signals
}

// --- NEW QUANTITATIVE & PSYCHOLINGUISTIC TYPES ---
export interface QuantitativeModel {
    decisionScoreFormula: string;
    variableDefinitions: {
        variable: string;
        definition: string;
    }[];
    propertyTests: {
        testName: string;
        description: string;
    }[];
    experimentPlan: {
        hypothesis: string;
        test: string;
        metric: string;
        successCondition: string;
    };
    addToJson: {
        description: string;
        jsonOutput: string;
    };
}

export interface DecisionDecompositionPoint {
    label: string;
    value: number;
}

export interface AngleUpliftCell {
    segment: string;
    angle: string;
    uplift: number;
}


export interface DataVisualizationSuiteForQuant {
    decisionDecomposition: DecisionDecompositionPoint[];
    angleUplift: AngleUpliftCell[];
    calibration: {
        title: string;
        description: string;
    };
}

export interface HeroVariant {
    angle: string;
    headline: string;
    adHook: string;
}

export interface PsycholinguisticRoutingEngine {
    routingLogic: string;
    heroVariants: HeroVariant[];
}


export interface SharedProfile {
  commonIndustries: string[];
  commonJobFunctions: string[];
  commonCompanySizes: string[];
  inferredPainPoints: string[];
  summary: string;
  quantitativeModel: QuantitativeModel;
  dataVisualizationSuite: DataVisualizationSuiteForQuant;
  demographics: Demographics;
  psychographics: Psychographics;
  methodology?: string[];
}

export interface LookalikeProspect {
  fullName: string;
  jobTitle: string;
  companyName: string;
  rationale: string;
  linkedinSearchQuery: string;
  googleDorkQuery: string;
  validationStatus?: 'Validated' | 'Needs Review';
  validationRationale?: string;
}

export interface AnalysisResult {
  sharedProfile: SharedProfile;
  lookalikeProspects: LookalikeProspect[];
}

export interface DiscoveredAudience {
  audienceName: string;
  summary: string;
  quantitativeModel: QuantitativeModel;
  dataVisualizationSuite: DataVisualizationSuiteForQuant;
  demographics: Demographics;
  psychographics: Psychographics;
  methodology?: string[];
  marketSizeEstimate?: string;
  urgencyLevel?: string;
}

// --- B2C Specific Types ---
export interface B2CPsychographics {
    definingInterests: string[];
    passionsAndHobbies: string[];
    mediaConsumptionHabits: string[]; // e.g., 'Listens to The Tim Ferriss Show', 'Follows @garyvee on Instagram'
    influencersTheyTrust: string[];
    b2cBuyingTriggers: BuyingTrigger[];
}

export interface B2CDiscoveredAudience {
    audienceName: string;
    summary: string;
    quantitativeModel: QuantitativeModel;
    dataVisualizationSuite: DataVisualizationSuiteForQuant;
    demographics: Demographics;
    psychographics: B2CPsychographics;
    methodology?: string[];
    marketSizeEstimate?: string;
    urgencyLevel?: string;
}

export interface B2CAnalysisResult {
    // For potential future B2C lead expansion
    // For now, discovery is the main B2C path
}

// --- Psycholinguistic Analysis ---
export interface MarketMindAnalysis {
    dominantEmotionalDrivers: { emotion: string; weight: number; rationale: string; }[];
    hotButtonKeywords: { keyword: string; context: string; }[];
    psycholinguisticRoutingEngine: PsycholinguisticRoutingEngine;
}

// --- Starving Crowd Specific Types ---
export interface GauntletChecklist {
    isAspirin: boolean;
    isStarvingCrowd: boolean;
    isBigEnough: boolean;
    isReachable: boolean;
    isUrgent: boolean;
    canSellHighPrice: boolean;
    hasBackEnd: boolean;
    isTollbooth: boolean;
    isUnique: boolean;
    isGrowing: boolean;
}

export interface SalesPitchAsset {
    pitchPersona: string;
    pitchScript: string;
    videoScenePrompt: string;
}


export interface OpportunityBrief {
    gauntletVerdict: {
        passes: boolean;
        summary: string;
        checklist: GauntletChecklist;
    };
    starvingCrowd: {
        name: string;
        description: string;
    };
    aspirinProblem: {
        problem: string;
        implications: string;
    };
    aiPoweredSolution: {
        solutionName: string;
        description: string;
        irresistibleOffer: string;
        resultsInAdvanceMechanism: {
            name: string;
            description: string;
        };
        aiAutomationProtocol: {
            protocol: string;
            rationale: string;
        };
        salesPitchAsset: SalesPitchAsset;
    };
    fastestPathToCash: {
        channel: string;
        rationale: string;
    };
    asymmetricJVProtocol: {
        idealPartnerProfile: string;
        valueProposition: string;
        outreachAngle: string;
    };
    businessInABoxAngle: {
        opportunityName: string;
        targetBuyer: string;
        salesPitch: string;
    };
    mentalModelApplicable: {
        model: string;
        rationale: string;
    };
    quantitativeModel: QuantitativeModel;
    dataVisualizationSuite: DataVisualizationSuiteForQuant;
    urgencyTriggers?: string[];
    marketMindAnalysis: MarketMindAnalysis;
    methodology?: string[];
    marketSizeEstimate?: string;
    urgencyLevel?: string;
}


// --- Universal Types ---

export interface ScoredProspect {
  prospectInfo: string;
  fitScore: number;
  rationale: string;
}

export interface PricingTier {
    name: string;
    pricePerMonth: string;
    description: string;
    features: string[];
}

export interface PricingModel {
    tiers: PricingTier[];
    additionalCharges?: string; // e.g., "One-time setup fee of $500", "Usage-based fees for API calls over 1M/month"
}


export interface ProductIdea {
    ideaName: string;
    description: string;
    profitPotential: string;
    financialNarrative: string;
    aiLeveragePoint: string;
    pricingModel: PricingModel;
    monetizationPathways: string[]; // e.g., "Consulting Retainers", "One-off Audits", "Affiliate Partnerships"
}

export interface LeadSourceProtocol {
    sourcePlatform: string; // e.g., 'LinkedIn Sales Navigator', 'Apollo.io', 'BuiltWith'
    filteringCriteria: string[];
    rationale: string;
}

export interface MonetizationStrategy {
    coreOpportunity: string;
    productIdeas: ProductIdea[];
    go_to_market_strategy: string[];
    leadSourceProtocol: LeadSourceProtocol[];
}

// --- AI Venture Architect Types ---
export interface DataFeasibilityAnalysis {
    feasibilityScore: 'High' | 'Medium' | 'Low' | 'Very Low';
    rationale: string;
    potentialSources: { name: string; type: 'API' | 'Web Scraping' | 'Public Dataset'; notes: string; }[];
    recommendation: string;
}

export interface AISalesAgent {
    persona: string;
    triggerLogic: string;
    openingScript: string;
    knowledgeBasePrompt: string;
}

export interface AIVentureBlueprint {
    validatedOpportunity: {
        starvingCrowd: string;
        aspirinProblem: string;
        coreValueProposition: string;
    };
    resultsInAdvanceTool: {
        toolName: string;
        description: string;
        dataAssetFilename: string;
        dataAsset: string;
    };
    dataFeasibilityAnalysis: DataFeasibilityAnalysis;
    leadCaptureMechanism: {
        strategy: string;
        implementation: string;
    };
    aiSalesAgent: AISalesAgent;
    backendInstructions: {
        language: string;
        filePath: string;
        code: string;
        deploymentSteps: string[];
    };
    monetizationModel: {
        fullSolutionName: string;
        description: string;
    };
    ultimatePrompt: string;
    methodology?: string[];
}

// --- AI Code Foundry Types ---
export interface AICode {
    generatedCode: string;
}

// --- Image Foundry Types ---
export interface ImageFoundryResult {
    images: string[];
}

// --- AI Sales Co-pilot Types ---
export interface SalesCopilotResponse {
    suggestedResponse: string;
    psychologicalTactic: string;
}

// --- Sovereign Engine Types ---
export interface SovereignEngineReport {
    workflowSummary: string;
    executionLog: { step: number; action: string; status: string }[];
    finalOutput: { assetName: string; content: string }[];
}


// A single, powerful brief that adapts to the analysis type
export interface StrategicBrief {
    analysisType: 'b2b' | 'b2c' | 'starvingCrowd' | 'competitiveDisplacement' | 'veoVideo' | 'videoStrategy' | 'aiVentureArchitect' | 'b2cDecon' | 'dominanceBlueprint' | 'alphaSignal' | 'chimericAgent' | 'loneWolf' | 'b2bPlaybook' | 'gatekeeperBypass' | 'cashflowProtocol' | 'realEstateAlpha' | 'imageFoundry' | 'salesCopilot' | 'sovereignEngine' | 'archimedesProtocol' | 'aiVideoFoundry';
    // Universal Context URL
    contextualUrl?: string;
    
    // Service Description for Video Strategy
    serviceDescription?: string;

    // AI Venture Architect & Dominance Blueprint
    businessConcept?: string;
    
    // Gatekeeper Bypass
    opportunityDescription?: string;

    // Alpha Signal Protocol
    revenueTarget?: string;
    timeframe?: string;
    areaOfInterest?: string;

    // Chimeric Agent Protocol
    subjectProfile?: string;
    
    // Cashflow Protocol
    coreSkill?: string;

    // Image Foundry
    prompt?: string;
    
    // AI Video Foundry
    script?: string;

    // AI Sales Co-pilot
    salesContext?: string;
    prospectObjection?: string;

    // Sovereign Engine
    workflowDescription?: string;
    initialInput?: string;

    // B2B Playbook
    discoveryHypothesis?: string;
    
    // Real Estate Alpha
    realEstateNiche?: 'taxDeeds' | 'probate' | 'preForeclosure' | 'postForeclosure' | 'commercialFlips' | 'partitions' | 'eminentDomain' | 'hoaLiens';
    strategicLens?: '48LawsOfPower' | 'herosJourney' | 'buyThenBuild' | 'autoSelect' | 'custom';
    customStrategicLens?: string;
    uploadedData?: string;


    // B2B/B2C Goal
    goal?: 'discover' | 'expand';
    // B2B Fields
    industry?: string;
    prospectList?: string;
    competitorUrl?: string;
    // B2C Fields
    productCategory?: string;
    influentialBrands?: string;
    customerPersonas?: string;
    competitorBrands?: string;
    definingInterests?: string;
    passionsAndHobbies?: string;
    influencersTheyTrust?: string;
    knownB2CTriggers?: { trigger: string; implication: string; }[];
    // Starving Crowd Fields
    // areaOfInterest?: string; // Already in Alpha Signal
    targetDemographic?: string;
}


// --- Playbook Types (B2B vs B2C) ---

export interface ClientAcquisitionEngine {
    tractionChannelAnalysis: {
        channel: string;
        rationale: string;
    }[];
    dream100Protocol: {
        targetDescription: string;
         rationale: string;
    }[];
    strategicPartnershipProtocol: {
        idealPartnerProfile: string;
        irresistibleOffer: string;
        outreachAngle: string;
    };
    aiAgentExecutionProtocol: {
        protocol: string;
        rationale: string;
    };
}

// FIX: Added missing OutreachAutomationProtocol interface
export interface OutreachAutomationProtocol {
    agentPersona: string;
    channel: string;
    messageTemplates: {
        connectionRequest: string;
        firstMessage: string;
    };
    personalizationLogic: string;
}


interface BasePlaybook {
    positioningStatement: string;
    brandingPersona: string;
    idealClientProfile: string[];
    irresistibleOffer: {
        offerName: string;
        pricePoint: string;
        components: string[];
        salesPitchAsset: SalesPitchAsset;
    };
    marketingFunnel: string[];
    finalWisdom: string;
}

export interface B2BHighLeveragePlaybook extends BasePlaybook {
    searchAndAcquisitionProtocol: {
        alphaSignal: string;
        leveragePoint: string;
        protocolSteps: string[];
    };
    clientAcquisitionEngine: ClientAcquisitionEngine;
    // FIX: Added missing optional outreachAutomationProtocol property
    outreachAutomationProtocol?: OutreachAutomationProtocol;
}

export interface AsymmetricWedgeStrategy {
    targetMicroTribe: string;
    asymmetricWedge: {
        wedgeType: 'Product' | 'Media' | 'Community';
        idea: string;
        rationale: string;
    };
    infiltrationPlan: string[];
}

export interface B2CHighLeveragePlaybook extends BasePlaybook {
    asymmetricWedgeStrategy: AsymmetricWedgeStrategy;
}

export type HighLeveragePlaybook = B2BHighLeveragePlaybook | B2CHighLeveragePlaybook;

// --- Competitive Displacement Types ---
export interface TrafficAnalysis {
    marketPosition: string; // "Niche Player", "Market Leader", "Emerging Challenger"
    supportingSignals: string[];
}

export interface AIPoweredWedge {
    blindSpot: string;
    wedgeIdea: string;
    wedgeDescription: string;
}

export interface OutreachCopy {
    subjectLine: string;
    body: string;
    rvmScript: string;
    textMessage: string;
}

export interface CompetitiveDisplacementBrief {
    trafficAnalysis: TrafficAnalysis;
    aiPoweredWedge: AIPoweredWedge;
    outreachCopy: OutreachCopy;
    quantitativeModel: QuantitativeModel;
    dataVisualizationSuite: DataVisualizationSuiteForQuant;
    marketMindAnalysis: MarketMindAnalysis;
    methodology?: string[];
    marketSizeEstimate?: string;
}

export interface VideoStrategy {
    script: { scene: number; visual: string; voiceover: string; }[];
    videoGenerationPrompt: string;
    distributionStrategy: string;
}


// --- Alpha Acquisition Types ---
export interface ChannelPartnershipProtocol {
    idealPartnerProfile: string;
    aiPoweredSearchQueries: string[];
    irresistiblePartnershipOffer: string;
}

export interface BuyingTriggerProtocol {
    triggerEvent: string;
    signalIntelligence: string; // Where to find the signal
    strategicApproach: string;
}

export interface AlphaAcquisitionPlaybook {
    channelPartnershipProtocol: ChannelPartnershipProtocol;
    buyingTriggerProtocol: BuyingTriggerProtocol[];
}

// --- B2C Market Deconstruction ---
export interface B2CMarketDeconstruction {
    influentialBrands: string[];
    competitorBrands: string[];
    definingInterests: string[];
    customerPersonas: { name: string; description: string; }[];
    b2cBuyingTriggers: BuyingTrigger[];
    marketMindAnalysis: MarketMindAnalysis;
    methodology?: string[];
}

// --- Unfair Advantage Sales Protocol ---
export interface UnfairAdvantageSalesProtocol {
    agoraAngle: {
        marketSophisticationLevel: string; // e.g., "Level 1: Unaware", "Level 5: Most Sophisticated"
        headlineAndHook: string;
        coreBodyCopyAngle: string;
    };
    belfortStraightLine: {
        openingScript: string;
        intelligenceGatheringQuestions: string[];
        transitionToPresentation: string;
    };
    fladlienOfferStack: {
        coreOffer: string;
        premiumBonuses: { name: string; value: string; }[];
        riskReversal: string;
        urgencyDriver: string;
    };
    bleedingNeckQualification: {
        filterQuestions: string[];
        rationale: string;
    };
}


// --- Dominance Blueprint Types ---
export interface SEOCompetitorAnalysis {
    competitorUrl: string;
    weaknesses: {
        weakness: string;
        explanation: string;
    }[];
    counterStrategies: {
        strategy: string;
        actionableSteps: string[];
    }[];
}

export interface AIPoweredSEOProtocol {
    keywordClusterAnalysis: {
        clusterName: string; // e.g., "AI Car Inspection Cost"
        keywords: string[];
        searchIntent: 'Informational' | 'Commercial' | 'Transactional' | 'Navigational';
    }[];
    contentVelocityPlan: {
        contentType: 'Blog Post' | 'Video Script' | 'Landing Page' | 'Tool';
        title: string;
        angle: string;
    }[];
    programmaticSEOAngle: {
        angleName: string; // e.g., "Car Inspection Checklist for [Car Make] [Car Model]"
        description: string;
    };
    highAuthorityBacklinkStrategy: {
        target: string; // e.g., "Automotive Blogs", "Tech Review Sites"
        outreachAngle: string;
    };
    competitorAnalysis?: SEOCompetitorAnalysis;
}

export interface PhygitalSynergyProtocol {
    fieldOperatorToolkit: string[];
    dataFlywheelEffect: string; // How physical data improves the AI
}

export interface ValuationMultiplier {
    title: string;
    multipleExpansionEvent: string;
    valuationImpactAnalysis: {
        baseMultiple: string;
        premiumMultiples: { name: string; value: string; rationale: string }[];
        finalMultipleRange: string;
        exampleValuation: string;
    };
}

export interface ProprietaryAiSymbiosis {
    title: string;
    aiAdvancementCore: {
        description: string;
        teamComposition: string[];
        mission: string;
    };
    weaponizedMethodologies: {
        vertical: string;
        toolName: string;
        description: string;
        impact: string;
    }[];
    talentAcademyTransformation: {
        description: string;
        aiTutorsAndSimulators: {
            name: string;
            description: string;
        };
        aiPoweredVetting: string;
        impact: string;
    };
    aiOnlyProducts: {
        dataMoatStrategy: string;
        exampleProduct: {
            name: string;
            description: string;
            impact: string;
        };
    };
}

export interface DominanceBlueprint {
    executiveSummary: string;
    conceptualImagePrompt?: string;
    conceptualImageUrl?: string;
    marketForecast: {
        trend: string;
        rationale: string;
    }[];
    asymmetricDominationStrategy: {
        coreStrategy: string;
        rationale: string;
        cleverTactics: {
            tacticName: string; // e.g., "Engineering as Marketing"
            description: string;
        }[];
    };
    first100CustomersProtocol: string[];
    moatBuildingSequence: {
        phase: string;
        description: string;
    }[];
    aiAutomationProtocol: {
        protocol: string;
        rationale: string;
    };
    asymmetricJVProtocol: {
        idealPartnerProfile: string;
        valueProposition: string;
        outreachAngle: string;
    };
    consultingAngle: {
        positioningStatement: string; // For the consultant (user)
        prospectPositioning: string; // For the business receiving the blueprint
        outreachAngle: string;
        pricingRecommendation: {
            tier: string; // e.g., "Strategic Blueprint", "Implementation Retainer"
            price: string;
            description: string;
        }[];
        salesPitchAsset: SalesPitchAsset;
    };
    unfairAdvantageSalesProtocol: UnfairAdvantageSalesProtocol;
    clientAcquisitionEngine: ClientAcquisitionEngine;
    phygitalSynergyProtocol?: PhygitalSynergyProtocol;
    aiPoweredSEOProtocol: AIPoweredSEOProtocol;
    proprietaryAiSymbiosis: ProprietaryAiSymbiosis;
    valuationMultiplier: ValuationMultiplier;
    methodology: string[];
}

export interface PhyGitalVideoStrategy {
    videoTitle: string;
    targetAudience: string;
    coreMessage: string;
    script: {
        scene: number;
        visual: string;
        voiceover: string;
        duration: string;
    }[];
    aiVideoPrompt: string;
    distributionPlan: string;
}

// --- Landing Page Architect Types ---
export interface LandingPageSection {
    sectionType: 'hero' | 'problem' | 'solution' | 'features' | 'socialProof' | 'callToAction' | 'faq';
    headline: string;
    subheadline?: string;
    body: string;
    ctaButtonText?: string;
}

export interface LandingPageBlueprint {
    pageTitle: string;
    sections: LandingPageSection[];
}

// --- AI Video Foundry Types ---
export interface AIVideoFoundryReport {
    title: string;
    directorsCut: {
        scene: number;
        script: string;
        visualPrompts: {
            type: 'Stock Footage' | 'Generative AI';
            prompt: string;
        }[];
        voiceoverScript: string;
        musicCue: string;
        overlayText: string;
    }[];
    technicalImplementation: {
        techStack: { name: string; rationale: string; }[];
        architecture: string[];
    };
    saasMonetizationModel: {
        pricingTiers: {
            name: string;
            price: string;
            description: string;
        }[];
        go_to_market_strategy: string[];
    };
}

// --- Alpha Signal Protocol Types ---
export interface RevenuePlay {
    playName: string;
    probabilityOfSuccess: {
        score: number; // 0-100
        rationale: string;
    };
    potentialRevenue: string;
    requiredAssets: string[];
    psychologicalEdge: {
        principle: string; // e.g., "Availability Heuristic", "Social Proof"
        application: string;
    };
    executionSteps: string[];
    aiAgentProtocol: {
        protocol: string;
        rationale: string;
    };
}

export interface AlphaSignalReport {
    executiveSummary: string;
    revenuePlays: RevenuePlay[];
    methodology: string[];
}

// --- Chimeric Agent Protocol Types ---
export interface HighStakesSolution {
    solutionName: string;
    problemDomain: string;
    aiLeveragePoint: string;
    monetizationModel: string;
    firstTouchProtocol: {
        wedge: string;
        rationale: string;
    };
}

export interface ChimericAgentReport {
    subjectSynthesis: string;
    highStakesSolutions: HighStakesSolution[];
    methodology: string[];
}

// --- Lone Wolf Protocol Types ---
export interface LoneWolfPlay {
    playName: string;
    incomePotential: string; // e.g., "$10k-$20k / week"
    timeToFirstCash: string; // e.g., "7-14 days"
    requiredAssets: string[];
    gatekeeperBypassTactic: {
        tactic: string;
        rationale: string;
    };
    executionSteps: string[];
    aiAgentProtocol: {
        protocol: string;
        rationale: string;
    };
}

export interface LoneWolfReport {
    executiveSummary: string;
    loneWolfPlays: LoneWolfPlay[];
    methodology: string[];
}

// --- Gatekeeper Bypass Protocol Types ---
export interface GatekeeperBypassReport {
    targetAudienceDeconstruction: {
        profile: string;
        wateringHoles: string[];
        painPointsAndDesires: string[];
    };
    honeypotStrategy: {
        concept: string;
        honeypotIdeas: {
            name: string;
            description: string;
        }[];
        distributionPlan: string;
    };
    profitSplitJVProtocol: {
        idealPartnerProfile: string;
        irresistibleOffer: string;
        outreachScript: string;
    };
    productizationRoadmap: string[];
    methodology: string[];
}

// --- Cashflow Protocol Types ---
export interface CashflowProtocolReport {
    mindsetCalibration: {
        corePrinciple: string;
        affirmation: string;
    };
    highTicketOffer: {
        offerName: string;
        pricePoint: string;
        coreComponents: string[];
        irresistibleBonuses: { name: string; value: string }[];
    };
    prospectingDirective: {
        idealClientProfile: string;
        killListQuery: string; // The exact search query
    };
    closingScript: {
        opening: string;
        painFindingQuestions: string[];
        solutionPresentation: string;
        close: string;
    };
    battlePlan48Hours: {
        hours0_6: string;
        hours7_24: string;
        hours25_48: string;
    };
    aiAgentProtocol: {
        protocol: string;
        rationale: string;
    };
}


// --- Real Estate Alpha Types ---
export interface MarketOpportunityChart {
    title: string;
    labels: string[]; // County names
    datasets: {
        label: string; // e.g., "Leverage Score"
        data: number[];
    }[];
}

export interface DealEconomicsChart {
    title: string;
    labels: string[]; // e.g., "Acquisition Cost", "Estimated Asset Value"
    datasets: {
        label: string; // e.g., "Sample Deal"
        data: number[]; // [cost, value]
    }[];
}

export interface SamplePropertyDossier {
    address: string;
    imageUrl: string;
    imageGenerationPrompt: string;
    stats: { label: string; value: string }[];
    investmentThesis: string;
    riskFactors: string[];
}

export interface DataVisualizationSuite {
    marketOpportunityChart: MarketOpportunityChart;
    dealEconomicsChart: DealEconomicsChart;
    samplePropertyDossier: SamplePropertyDossier;
}

export interface InvincibleCompanyFramework {
    exploitPortfolio: {
        title: string;
        summary: string;
    };
    explorePortfolio: {
        title: string;
        summary: string;
        opportunities: {
            name: string;
            description: string;
        }[];
    };
}

export interface RealEstateAlphaReport {
    esotericAlpha: {
        title: string;
        description: string;
        strategies: {
            name: string;
            source: string;
            strategy: string;
        }[];
    };
    uploadedDataAnalysis?: {
        summary: string;
        insights: string[];
    };
    quantitativeModel: QuantitativeModel;
    dataVisualizationSuite: DataVisualizationSuite;
    invincibleCompanyFramework: InvincibleCompanyFramework;
    dealFlowEngine: {
        harvester: {
            stageSummary: string;
            tasks: {
                taskName: string;
                description: string;
            }[];
            output: string;
        };
        validator: {
            stageSummary: string;
            tasks: {
                taskName: string;
                description: string;
            }[];
            leverageScoringAlgorithm: {
                description: string;
                formula: string;
                factors: {
                    factor: string;
                    weight: string;
                    rationale: string;
                }[];
            };
            output: string;
        };
        dossier: {
            stageSummary: string;
            tasks: {
                taskName: string;
                description: string;
            }[];
            output: string;
        };
    };
    investorPlaybook: {
        title: string;
        steps: {
            stepName: string;
            description: string;
        }[];
    };
    proprietaryAiSymbiosis: ProprietaryAiSymbiosis;
    valuationMultiplier: ValuationMultiplier;
    aiAgentProtocol: {
        protocol: string;
        rationale: string;
    };
}

// --- Archimedes Protocol Types ---
export interface ToolingOption {
    name: string;
    rationale: string;
}

export interface ToolingStack {
    bestInClass: ToolingOption;
    costEffectiveAlternative: ToolingOption;
    freeOrOpenSource: ToolingOption;
}

export interface ArsenalProtocol {
    title: string;
    description: string;
    tooling: ToolingStack;
    serverlessFunctionCode: string;
    requiredEnvVars: { key: string; description: string }[];
    agentApiCallProtocol: string;
}

export interface ArchimedesProtocolReport {
    theMandate: {
        title: string;
        corePrinciple: string;
        affirmation: string;
    };
    theSovereignFoundry: {
        title: string;
        description: string;
        workflow: string[];
    };
    theAgentCSuite: {
        title: string;
        description: string;
        aiAgentProtocol: {
            protocol: string;
            rationale: string;
        };
    };
    theOperatorsCockpit: {
        title: string;
        description: string;
        yourRole: string[];
    };
    theSovereignArsenal: {
        title: string;
        description: string;
        communicationsProtocol: ArsenalProtocol;
        visionProtocol: ArsenalProtocol;
        dataAcquisitionProtocol: ArsenalProtocol;
        voiceIntelligenceProtocol: ArsenalProtocol;
        unconventionalToolsAndApis: {
            title: string;
            description: string;
            tools: {
                name: string;
                useCase: string;
                agentInteractionProtocol: string;
            }[];
        };
    };
}

// --- First Strike Protocol Types ---
export interface TargetDossier {
    archetypeDescription: string;
    godTierDorkQueries: string[];
    firstContactAngle: string;
}

export type FirstStrikeReport = TargetDossier[];


// --- Sovereign Protocol Types ---
export interface SovereignTask {
    id: string;
    brief: string;
    status: 'Pending' | 'Waiting' | 'Executing' | 'Completed' | 'Failed';
    dependsOn?: string[];
    actionableOutput?: {
        type: 'copy' | 'prompt' | 'data' | 'integration' | 'microToolBlueprint';
        title: string;
        content: string;
        url?: string; // For integration type
    }[];
    insight?: string; // Agentic Feedback Loop: Educates the user.
    suggestedNextTask?: string; // Agentic Feedback Loop: Proposes next action.
}

export interface SovereignAgent {
    id: string;
    agentType: string; // e.g., "Outreach Agent"
    overallBrief: string; // The agent's core function
    status: 'Idle' | 'Active' | 'Error'; // Overall agent status
    tasks: SovereignTask[];
}

// --- Market Intelligence Cartographer Types ---
export interface KeyPlayer {
    name: string;
    marketPosition: 'Leader' | 'Challenger' | 'Niche Specialist' | 'Emerging';
    summary: string;
}

export interface AudienceSegment {
    name: string;
    description: string;
    sizeEstimate: string; // e.g., "Large & Growing", "Small but High-Value"
}

export interface WhitespaceOpportunity {
    opportunityName: string;
    description: string;
    strategicAngle: string;
}

export interface MarketMap {
    executiveSummary: string;
    keyPlayers: KeyPlayer[];
    audienceSegments: AudienceSegment[];
    whitespaceOpportunities: WhitespaceOpportunity[];
    methodology: string[];
}

// --- Project Management Types ---
export interface ProjectResults {
  analysisResult: AnalysisResult | null;
  discoveryResult: DiscoveredAudience[] | null;
  b2cDiscoveryResult: B2CDiscoveredAudience[] | null;
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
  scoredProspectsResult: ScoredProspect[] | null;
  monetizationStrategy: MonetizationStrategy | null;
  playbook: HighLeveragePlaybook | null;
  alphaAcquisitionPlaybook: AlphaAcquisitionPlaybook | null;
  videoStrategy: VideoStrategy | null;
  phyGitalVideoStrategy: PhyGitalVideoStrategy | null;
  generatedCode: AICode | null;
  landingPageBlueprint: LandingPageBlueprint | null;
  landingPageCode: AICode | null;
  marketMap: MarketMap | null;
  salesCopilotReport: SalesCopilotResponse | null;
  sovereignEngineReport: SovereignEngineReport | null;
  archimedesProtocolReport: ArchimedesProtocolReport | null;
  firstStrikeReport: FirstStrikeReport | null;
  aiVideoFoundryReport: AIVideoFoundryReport | null;
}


export interface Project {
    id: string;
    name: string;
    timestamp: number;
    brief: StrategicBrief;
    results: ProjectResults;
}
