

import { GoogleGenAI, Type, Modality } from "@google/genai";
import { 
    AnalysisResult, 
    DiscoveredAudience, 
    MonetizationStrategy, 
    ScoredProspect, 
    HighLeveragePlaybook, 
    StrategicBrief,
    B2CDiscoveredAudience,
    OpportunityBrief,
    CompetitiveDisplacementBrief,
    AlphaAcquisitionPlaybook,
    VideoStrategy,
    LookalikeProspect,
    AIVentureBlueprint,
    AICode,
    B2CMarketDeconstruction,
    DominanceBlueprint,
    PhyGitalVideoStrategy,
    LandingPageBlueprint,
    AlphaSignalReport,
    ChimericAgentReport,
    LoneWolfReport,
    SovereignAgent,
    MarketMap,
    GatekeeperBypassReport,
    B2BHighLeveragePlaybook,
    B2CHighLeveragePlaybook,
    CashflowProtocolReport,
    RealEstateAlphaReport,
    ImageFoundryResult,
    SalesCopilotResponse,
    SovereignEngineReport,
    ArchimedesProtocolReport,
    FirstStrikeReport,
    AIVideoFoundryReport
} from '../types';

// --- NEW QUANTITATIVE & PSYCHOLINGUISTIC SCHEMAS ---
const quantitativeModelSchema = {
    type: Type.OBJECT,
    properties: {
        decisionScoreFormula: { type: Type.STRING },
        variableDefinitions: {
            type: Type.ARRAY,
            items: {
                type: Type.OBJECT,
                properties: {
                    variable: { type: Type.STRING },
                    definition: { type: Type.STRING }
                },
                required: ['variable', 'definition']
            }
        },
        propertyTests: {
            type: Type.ARRAY,
            items: {
                type: Type.OBJECT,
                properties: {
                    testName: { type: Type.STRING },
                    description: { type: Type.STRING }
                },
                required: ['testName', 'description']
            }
        },
        experimentPlan: {
            type: Type.OBJECT,
            properties: {
                hypothesis: { type: Type.STRING },
                test: { type: Type.STRING },
                metric: { type: Type.STRING },
                successCondition: { type: Type.STRING }
            },
            required: ['hypothesis', 'test', 'metric', 'successCondition']
        },
        addToJson: {
            type: Type.OBJECT,
            properties: {
                description: { type: Type.STRING },
                jsonOutput: { type: Type.STRING }
            },
            required: ['description', 'jsonOutput']
        }
    },
    required: ['decisionScoreFormula', 'variableDefinitions', 'propertyTests', 'experimentPlan', 'addToJson']
};

const dataVisualizationSuiteForQuantSchema = {
    type: Type.OBJECT,
    properties: {
        decisionDecomposition: {
            type: Type.ARRAY,
            description: "Data for a bar chart showing the contribution of each factor to the decision score.",
            items: {
                type: Type.OBJECT,
                properties: {
                    label: { type: Type.STRING, description: "The name of the factor (e.g., 'Credibility', 'Proof Velocity', 'Bloat Effect')." },
                    value: { type: Type.NUMBER, description: "The contribution value of this factor." }
                },
                required: ['label', 'value']
            }
        },
        angleUplift: {
            type: Type.ARRAY,
            description: "Data for a heatmap showing the effectiveness of different marketing angles on different emotional segments.",
            items: {
                type: Type.OBJECT,
                properties: {
                    segment: { type: Type.STRING, description: "The emotional segment (e.g., 'Frustration', 'Anxiety')." },
                    angle: { type: Type.STRING, description: "The marketing angle (e.g., 'Speed/Relief', 'Assurance/Safety')." },
                    uplift: { type: Type.NUMBER, description: "The predicted uplift score for this combination." }
                },
                required: ['segment', 'angle', 'uplift']
            }
        },
        calibration: {
            type: Type.OBJECT,
            properties: {
                title: { type: Type.STRING },
                description: { type: Type.STRING }
            },
            required: ['title', 'description']
        }
    },
    required: ['decisionDecomposition', 'angleUplift', 'calibration']
};

const heroVariantSchema = {
    type: Type.OBJECT,
    properties: {
        angle: { type: Type.STRING },
        headline: { type: Type.STRING },
        adHook: { type: Type.STRING }
    },
    required: ['angle', 'headline', 'adHook']
};

const psycholinguisticRoutingEngineSchema = {
    type: Type.OBJECT,
    properties: {
        routingLogic: { type: Type.STRING },
        heroVariants: {
            type: Type.ARRAY,
            items: heroVariantSchema
        }
    },
    required: ['routingLogic', 'heroVariants']
};


// --- PSYCHOLINGUISTIC SCHEMA ---
const marketMindSchema = {
    type: Type.OBJECT,
    description: "A deep psycholinguistic analysis of the target market based on analysis of public forums, social media, and reviews.",
    properties: {
        dominantEmotionalDrivers: {
            type: Type.ARRAY,
            items: {
                type: Type.OBJECT,
                properties: {
                    emotion: { type: Type.STRING, description: "e.g., Fear, Greed, Anger, Hope" },
                    weight: { type: Type.NUMBER, description: "Percentage weight of this emotion in the market conversation." },
                    rationale: { type: Type.STRING, description: "Why this emotion is dominant." }
                },
                required: ['emotion', 'weight', 'rationale']
            }
        },
        hotButtonKeywords: {
            type: Type.ARRAY,
            items: {
                type: Type.OBJECT,
                properties: {
                    keyword: { type: Type.STRING },
                    context: { type: Type.STRING, description: "The context in which this emotionally charged keyword is used by the market." }
                },
                required: ['keyword', 'context']
            }
        },
        psycholinguisticRoutingEngine: psycholinguisticRoutingEngineSchema,
    },
    required: ['dominantEmotionalDrivers', 'hotButtonKeywords', 'psycholinguisticRoutingEngine']
};


// --- B2B SCHEMAS ---
const b2bDemographicsSchema = {
  type: Type.OBJECT,
  properties: {
    ageRange: { type: Type.STRING },
    incomeLevel: { type: Type.STRING },
    commonLocations: { type: Type.ARRAY, items: { type: Type.STRING } }
  },
  required: ['ageRange', 'incomeLevel', 'commonLocations']
};

const b2bPsychographicsSchema = {
  type: Type.OBJECT,
  properties: {
    interests: { type: Type.ARRAY, items: { type: Type.STRING } },
    motivations: {
      type: Type.ARRAY,
      items: {
        type: Type.OBJECT,
        properties: {
            driver: { type: Type.STRING, description: "The core psychological driver, e.g., 'Fear of Missing Out (FOMO)', 'Desire for Control', 'Aspiration for Industry Leadership'." },
            description: { type: Type.STRING, description: "A detailed explanation of how this driver manifests in the audience's behavior, language, and aspirations." },
            purchasingImplication: { type: Type.STRING, description: "How this driver directly influences their purchasing decisions, what they value in a solution, and what kind of messaging resonates with them." }
        },
        required: ['driver', 'description', 'purchasingImplication']
      }
    },
    onlineBehavior: { type: Type.ARRAY, items: { type: Type.STRING } },
    dataSignals: { type: Type.ARRAY, items: { type: Type.STRING } },
    buyingTriggers: {
      type: Type.ARRAY,
      items: {
        type: Type.OBJECT,
        properties: {
          trigger: { type: Type.STRING },
          implication: { type: Type.STRING }
        },
        required: ['trigger', 'implication']
      }
    }
  },
  required: ['interests', 'motivations', 'onlineBehavior', 'dataSignals', 'buyingTriggers']
};

const sharedProfileSchema = {
    type: Type.OBJECT,
    properties: {
        commonIndustries: { type: Type.ARRAY, items: { type: Type.STRING } },
        commonJobFunctions: { type: Type.ARRAY, items: { type: Type.STRING } },
        commonCompanySizes: { type: Type.ARRAY, items: { type: Type.STRING } },
        inferredPainPoints: { type: Type.ARRAY, items: { type: Type.STRING } },
        summary: { type: Type.STRING },
        quantitativeModel: quantitativeModelSchema,
        dataVisualizationSuite: dataVisualizationSuiteForQuantSchema,
        demographics: b2bDemographicsSchema,
        psychographics: b2bPsychographicsSchema,
        methodology: { type: Type.ARRAY, items: { type: Type.STRING }, description: "List of the specific analytical models and frameworks applied to arrive at the conclusions (e.g., 'Regression Analysis', 'Cluster Analysis (K-Means)', 'Bayesian Inference')." }
    },
    required: ['commonIndustries', 'commonJobFunctions', 'commonCompanySizes', 'inferredPainPoints', 'summary', 'quantitativeModel', 'dataVisualizationSuite', 'demographics', 'psychographics', 'methodology']
};

const b2bAnalysisSchema = {
  type: Type.OBJECT,
  properties: {
    sharedProfile: sharedProfileSchema,
    lookalikeProspects: {
      type: Type.ARRAY,
      description: "A generated list of 8-12 new, specific, and plausible lookalike prospects.",
      items: {
        type: Type.OBJECT,
        properties: {
          fullName: { type: Type.STRING },
          jobTitle: { type: Type.STRING },
          companyName: { type: Type.STRING },
          rationale: { type: Type.STRING },
          linkedinSearchQuery: { type: Type.STRING },
          googleDorkQuery: { type: Type.STRING, description: "A Google dork query to find more info on the prospect, targeting LinkedIn. e.g., 'site:linkedin.com/in \"John Doe\" \"Acme Corp\"'" }
        },
        required: ['fullName', 'jobTitle', 'companyName', 'rationale', 'linkedinSearchQuery', 'googleDorkQuery']
      }
    }
  },
  required: ['sharedProfile', 'lookalikeProspects']
};

const discoveryAudienceProperties = {
    audienceName: { type: Type.STRING },
    summary: { type: Type.STRING },
    quantitativeModel: quantitativeModelSchema,
    dataVisualizationSuite: dataVisualizationSuiteForQuantSchema,
    demographics: b2bDemographicsSchema,
    methodology: { type: Type.ARRAY, items: { type: Type.STRING }, description: "List of the specific analytical models and frameworks applied." },
    marketSizeEstimate: { type: Type.STRING, description: "An estimate of the market size (e.g., TAM, SAM, SOM)."},
    urgencyLevel: { type: Type.STRING, description: "The assessed urgency level of the market's problem ('High', 'Medium', or 'Low')."}
};

const b2bDiscoverySchema = {
    type: Type.ARRAY,
    description: "A list of up to 5 distinct, high-potential B2B audience segments.",
    items: {
        type: Type.OBJECT,
        properties: {
            ...discoveryAudienceProperties,
            psychographics: b2bPsychographicsSchema,
        },
        required: ['audienceName', 'summary', 'quantitativeModel', 'dataVisualizationSuite', 'demographics', 'psychographics', 'methodology']
    }
};

// --- B2C SCHEMAS ---

const b2cPsychographicsSchema = {
    type: Type.OBJECT,
    properties: {
        definingInterests: { type: Type.ARRAY, items: {type: Type.STRING}, description: "The core passions that define this consumer tribe."},
        passionsAndHobbies: { type: Type.ARRAY, items: {type: Type.STRING}},
        mediaConsumptionHabits: { type: Type.ARRAY, items: {type: Type.STRING}, description: "Specific podcasts, newsletters, social media accounts they follow."},
        influencersTheyTrust: { type: Type.ARRAY, items: {type: Type.STRING}},
        b2cBuyingTriggers: {
             type: Type.ARRAY,
            items: {
                type: Type.OBJECT,
                properties: {
                trigger: { type: Type.STRING, description: "Consumer-focused trigger, e.g., 'Life Event: New Parent', 'High Engagement on Niche Subreddit'." },
                implication: { type: Type.STRING }
                },
                required: ['trigger', 'implication']
            }
        }
    },
    required: ['definingInterests', 'passionsAndHobbies', 'mediaConsumptionHabits', 'influencersTheyTrust', 'b2cBuyingTriggers']
};


const b2cDiscoverySchema = {
    type: Type.ARRAY,
    description: "A list of up to 5 distinct, high-potential B2C audience segments (consumer tribes).",
    items: {
        type: Type.OBJECT,
        properties: {
            ...discoveryAudienceProperties,
            psychographics: b2cPsychographicsSchema,
        },
        required: ['audienceName', 'summary', 'quantitativeModel', 'dataVisualizationSuite', 'demographics', 'psychographics', 'methodology']
    }
};

const b2cDeconSchema = {
    type: Type.OBJECT,
    description: "A deconstruction of a B2C market based on a seed interest, generating the full market landscape.",
    properties: {
        influentialBrands: { type: Type.ARRAY, items: { type: Type.STRING } },
        competitorBrands: { type: Type.ARRAY, items: { type: Type.STRING }, description: "A list of competitor websites and/or social media profiles." },
        definingInterests: { type: Type.ARRAY, items: { type: Type.STRING } },
        customerPersonas: {
            type: Type.ARRAY,
            items: {
                type: Type.OBJECT,
                properties: {
                    name: { type: Type.STRING },
                    description: { type: Type.STRING }
                },
                required: ['name', 'description']
            }
        },
        b2cBuyingTriggers: {
            type: Type.ARRAY,
            items: {
                type: Type.OBJECT,
                properties: {
                    trigger: { type: Type.STRING },
                    implication: { type: Type.STRING }
                },
                required: ['trigger', 'implication']
            }
        },
        marketMindAnalysis: marketMindSchema,
        methodology: { type: Type.ARRAY, items: { type: Type.STRING }, description: "List of the specific analytical models and frameworks applied." }
    },
    required: ['influentialBrands', 'competitorBrands', 'definingInterests', 'customerPersonas', 'b2cBuyingTriggers', 'marketMindAnalysis', 'methodology']
};


// --- STARVING CROWD SCHEMA ---
const salesPitchAssetSchema = {
    type: Type.OBJECT,
    properties: {
        pitchPersona: { type: Type.STRING, description: "A congruent, AI-generated persona perfectly tailored to the offer and the target audience." },
        pitchScript: { type: Type.STRING, description: "A complete, professionally written pitch script for a 60-90 second video or presentation." },
        videoScenePrompt: { type: Type.STRING, description: "A detailed, machine-executable prompt for a text-to-video AI, describing the exact visuals, tone, and AI actor needed to bring the pitch to life." }
    },
    required: ['pitchPersona', 'pitchScript', 'videoScenePrompt']
};

const gauntletChecklistSchema = {
    type: Type.OBJECT,
    properties: {
        isAspirin: { type: Type.BOOLEAN },
        isStarvingCrowd: { type: Type.BOOLEAN },
        isBigEnough: { type: Type.BOOLEAN },
        isReachable: { type: Type.BOOLEAN },
        isUrgent: { type: Type.BOOLEAN },
        canSellHighPrice: { type: Type.BOOLEAN },
        hasBackEnd: { type: Type.BOOLEAN },
        isTollbooth: { type: Type.BOOLEAN },
        isUnique: { type: Type.BOOLEAN },
        isGrowing: { type: Type.BOOLEAN },
    },
    required: ['isAspirin', 'isStarvingCrowd', 'isBigEnough', 'isReachable', 'isUrgent', 'canSellHighPrice', 'hasBackEnd', 'isTollbooth', 'isUnique', 'isGrowing']
};

const opportunityBriefSchema = {
    type: Type.OBJECT,
    properties: {
        gauntletVerdict: {
            type: Type.OBJECT,
            properties: {
                passes: { type: Type.BOOLEAN },
                summary: { type: Type.STRING },
                checklist: gauntletChecklistSchema
            },
            required: ['passes', 'summary', 'checklist']
        },
        starvingCrowd: {
            type: Type.OBJECT,
            properties: {
                name: { type: Type.STRING },
                description: { type: Type.STRING }
            },
            required: ['name', 'description']
        },
        aspirinProblem: {
            type: Type.OBJECT,
            properties: {
                problem: { type: Type.STRING },
                implications: { type: Type.STRING }
            },
            required: ['problem', 'implications']
        },
        aiPoweredSolution: {
            type: Type.OBJECT,
            properties: {
                solutionName: { type: Type.STRING },
                description: { type: Type.STRING },
                irresistibleOffer: { type: Type.STRING },
                resultsInAdvanceMechanism: {
                    type: Type.OBJECT,
                    description: "A free, high-value micro-tool or demo that gives the prospect an immediate taste of the solution's power to build instant credibility.",
                    properties: {
                        name: { type: Type.STRING },
                        description: { type: Type.STRING }
                    },
                    required: ['name', 'description']
                },
                aiAutomationProtocol: {
                    type: Type.OBJECT,
                    description: "A plan for how to use AI to automate the delivery of the full, paid solution.",
                    properties: {
                        protocol: { type: Type.STRING, description: "The steps to automate the service." },
                        rationale: { type: Type.STRING, description: "Why this automation creates a competitive advantage." }
                    },
                    required: ['protocol', 'rationale']
                },
                salesPitchAsset: salesPitchAssetSchema
            },
            required: ['solutionName', 'description', 'irresistibleOffer', 'resultsInAdvanceMechanism', 'aiAutomationProtocol', 'salesPitchAsset']
        },
        fastestPathToCash: {
            type: Type.OBJECT,
            properties: {
                channel: { type: Type.STRING },
                rationale: { type: Type.STRING }
            },
            required: ['channel', 'rationale']
        },
        asymmetricJVProtocol: {
            type: Type.OBJECT,
            description: "A counterintuitive, value-laden strategy for securing Joint Venture partners.",
            properties: {
                idealPartnerProfile: { type: Type.STRING, description: "Who to partner with that nobody else is thinking of." },
                valueProposition: { type: Type.STRING, description: "The irresistible value proposition for the partner." },
                outreachAngle: { type: Type.STRING, description: "The exact, non-obvious way to approach them." }
            },
            required: ['idealPartnerProfile', 'valueProposition', 'outreachAngle']
        },
        businessInABoxAngle: {
            type: Type.OBJECT,
            description: "A strategy for packaging and selling this entire opportunity brief as a product ('selling the shovel').",
            properties: {
                opportunityName: { type: Type.STRING, description: "A catchy name for this 'business in a box'." },
                targetBuyer: { type: Type.STRING, description: "Who would buy this packaged opportunity." },
                salesPitch: { type: Type.STRING, description: "The core sales pitch to sell this business model." }
            },
            required: ['opportunityName', 'targetBuyer', 'salesPitch']
        },
        mentalModelApplicable: {
            type: Type.OBJECT,
            properties: {
                model: { type: Type.STRING },
                rationale: { type: Type.STRING }
            },
            required: ['model', 'rationale']
        },
        quantitativeModel: quantitativeModelSchema,
        dataVisualizationSuite: dataVisualizationSuiteForQuantSchema,
        urgencyTriggers: { type: Type.ARRAY, items: { type: Type.STRING } },
        marketMindAnalysis: marketMindSchema,
        methodology: { type: Type.ARRAY, items: { type: Type.STRING }, description: "List of the specific analytical models and frameworks applied." },
        marketSizeEstimate: { type: Type.STRING, description: "An estimate of the market size (e.g., TAM, SAM, SOM)."},
        urgencyLevel: { type: Type.STRING, description: "The assessed urgency level of the market's problem ('High', 'Medium', or 'Low')."}
    },
    required: ['gauntletVerdict', 'starvingCrowd', 'aspirinProblem', 'aiPoweredSolution', 'fastestPathToCash', 'asymmetricJVProtocol', 'businessInABoxAngle', 'mentalModelApplicable', 'quantitativeModel', 'dataVisualizationSuite', 'marketMindAnalysis', 'methodology']
};

// --- COMPETITIVE DISPLACEMENT SCHEMA ---
const competitiveDisplacementSchema = {
    type: Type.OBJECT,
    properties: {
        trafficAnalysis: {
            type: Type.OBJECT,
            properties: {
                marketPosition: { type: Type.STRING },
                supportingSignals: { type: Type.ARRAY, items: { type: Type.STRING } }
            },
            required: ['marketPosition', 'supportingSignals']
        },
        aiPoweredWedge: {
            type: Type.OBJECT,
            properties: {
                blindSpot: { type: Type.STRING },
                wedgeIdea: { type: Type.STRING },
                wedgeDescription: { type: Type.STRING }
            },
            required: ['blindSpot', 'wedgeIdea', 'wedgeDescription']
        },
        outreachCopy: {
            type: Type.OBJECT,
            properties: {
                subjectLine: { type: Type.STRING },
                body: { type: Type.STRING, description: "The body of the outreach email." },
                rvmScript: { type: Type.STRING, description: "A concise, under 30-second Ringless Voicemail script." },
                textMessage: { type: Type.STRING, description: "A short, non-spammy text message to follow up." }
            },
            required: ['subjectLine', 'body', 'rvmScript', 'textMessage']
        },
        quantitativeModel: quantitativeModelSchema,
        dataVisualizationSuite: dataVisualizationSuiteForQuantSchema,
        marketMindAnalysis: marketMindSchema,
        methodology: { type: Type.ARRAY, items: { type: Type.STRING }, description: "List of the specific analytical models and frameworks applied." },
        marketSizeEstimate: { type: Type.STRING, description: "An estimate of the competitor's market size (e.g., TAM, SAM, SOM)."},
    },
    required: ['trafficAnalysis', 'aiPoweredWedge', 'outreachCopy', 'quantitativeModel', 'dataVisualizationSuite', 'marketMindAnalysis', 'methodology']
};

const videoStrategySchema = {
    type: Type.OBJECT,
    properties: {
        script: {
            type: Type.ARRAY,
            items: {
                type: Type.OBJECT,
                properties: {
                    scene: { type: Type.NUMBER },
                    visual: { type: Type.STRING },
                    voiceover: { type: Type.STRING }
                },
                required: ['scene', 'visual', 'voiceover']
            }
        },
        videoGenerationPrompt: { type: Type.STRING, description: "A single, powerful prompt for a text-to-video AI model to generate the visuals." },
        distributionStrategy: { type: Type.STRING, description: "A concise plan for how to use this video as a high-leverage wedge."}
    },
    required: ['script', 'videoGenerationPrompt', 'distributionStrategy']
};

// --- AI VENTURE ARCHITECT SCHEMA ---
const aiVentureBlueprintSchema = {
    type: Type.OBJECT,
    properties: {
        validatedOpportunity: {
            type: Type.OBJECT,
            properties: {
                starvingCrowd: { type: Type.STRING },
                aspirinProblem: { type: Type.STRING },
                coreValueProposition: { type: Type.STRING }
            },
            required: ['starvingCrowd', 'aspirinProblem', 'coreValueProposition']
        },
        resultsInAdvanceTool: {
            type: Type.OBJECT,
            properties: {
                toolName: { type: Type.STRING },
                description: { type: Type.STRING },
                dataAssetFilename: { type: Type.STRING, description: "A descriptive filename for the data asset, e.g., 'sports_predictions.json' or 'real_estate_comps.json'. It MUST NOT be a generic name like 'data.json' or 'mockData.json'." },
                dataAsset: { type: Type.STRING, description: "CRITICAL: The complete JSON data content. This data MUST be realistic, specific, and plausible, containing multiple data points directly relevant to the tool's function. It must NOT be generic placeholder data." }
            },
            required: ['toolName', 'description', 'dataAssetFilename', 'dataAsset']
        },
        dataFeasibilityAnalysis: {
            type: Type.OBJECT,
            properties: {
                feasibilityScore: { type: Type.STRING, description: "'High', 'Medium', 'Low', or 'Very Low'" },
                rationale: { type: Type.STRING },
                potentialSources: {
                    type: Type.ARRAY,
                    items: {
                        type: Type.OBJECT,
                        properties: {
                            name: { type: Type.STRING },
                            type: { type: Type.STRING, description: "'API', 'Web Scraping', or 'Public Dataset'" },
                            notes: { type: Type.STRING }
                        },
                        required: ['name', 'type', 'notes']
                    }
                },
                recommendation: { type: Type.STRING }
            },
            required: ['feasibilityScore', 'rationale', 'potentialSources', 'recommendation']
        },
        leadCaptureMechanism: {
            type: Type.OBJECT,
            properties: {
                strategy: { type: Type.STRING, description: "The strategy behind capturing the lead (e.g., 'Gate the full results')." },
                implementation: { type: Type.STRING, description: "Instructions for how the user can connect the form to a service like a webhook or form handler." }
            },
            required: ['strategy', 'implementation']
        },
        aiSalesAgent: {
            type: Type.OBJECT,
            properties: {
                persona: { type: Type.STRING, description: "The persona of the AI agent (e.g., 'Helpful expert in the style of Dan Kennedy')." },
                triggerLogic: { type: Type.STRING, description: "When and how the agent should appear." },
                openingScript: { type: Type.STRING, description: "The first thing the agent says." },
                knowledgeBasePrompt: { type: Type.STRING, description: "The core system prompt that defines the agent's 'brain'." }
            },
            required: ['persona', 'triggerLogic', 'openingScript', 'knowledgeBasePrompt']
        },
        backendInstructions: {
            type: Type.OBJECT,
            properties: {
                language: { type: Type.STRING, description: "e.g., 'Node.js'" },
                filePath: { type: Type.STRING, description: "e.g., '/api/chat.js'" },
                code: { type: Type.STRING, description: "The complete, secure backend code for a Vercel Serverless Function." },
                deploymentSteps: { type: Type.ARRAY, items: { type: Type.STRING }, description: "Step-by-step instructions to deploy." }
            },
            required: ['language', 'filePath', 'code', 'deploymentSteps']
        },
        monetizationModel: {
            type: Type.OBJECT,
            properties: {
                fullSolutionName: { type: Type.STRING },
                description: { type: Type.STRING }
            },
            required: ['fullSolutionName', 'description']
        },
        ultimatePrompt: { type: Type.STRING, description: "The ultimate prompt to build the front-end of the micro-tool. This MUST include instructions to fetch and use the specific dataAssetFilename generated." },
        methodology: { type: Type.ARRAY, items: { type: Type.STRING } }
    },
    required: ['validatedOpportunity', 'resultsInAdvanceTool', 'dataFeasibilityAnalysis', 'leadCaptureMechanism', 'aiSalesAgent', 'backendInstructions', 'monetizationModel', 'ultimatePrompt', 'methodology']
};


// --- AI CODE FOUNDRY SCHEMA ---
const aiCodeSchema = {
    type: Type.OBJECT,
    properties: {
        generatedCode: { type: Type.STRING, description: "The complete, self-contained, single-file HTML code with embedded CSS and JavaScript for the functional web application." }
    },
    required: ['generatedCode']
};

// --- IMAGE FOUNDRY SCHEMA ---
const imageFoundrySchema = {
    type: Type.OBJECT,
    properties: {
        images: {
            type: Type.ARRAY,
            items: { type: Type.STRING, description: "A base64 encoded string of the generated image." }
        }
    },
    required: ['images']
};

// --- AI SALES CO-PILOT SCHEMA ---
const salesCopilotSchema = {
    type: Type.OBJECT,
    properties: {
        suggestedResponse: { type: Type.STRING },
        psychologicalTactic: { type: Type.STRING }
    },
    required: ['suggestedResponse', 'psychologicalTactic']
};

// --- SOVEREIGN ENGINE SCHEMA ---
const sovereignEngineSchema = {
    type: Type.OBJECT,
    properties: {
        workflowSummary: { type: Type.STRING },
        executionLog: {
            type: Type.ARRAY,
            items: {
                type: Type.OBJECT,
                properties: {
                    step: { type: Type.NUMBER },
                    action: { type: Type.STRING },
                    status: { type: Type.STRING, description: "'Completed', 'Skipped', 'Failed'" }
                },
                required: ['step', 'action', 'status']
            }
        },
        finalOutput: {
            type: Type.ARRAY,
            items: {
                type: Type.OBJECT,
                properties: {
                    assetName: { type: Type.STRING },
                    content: { type: Type.STRING }
                },
                required: ['assetName', 'content']
            }
        }
    },
    required: ['workflowSummary', 'executionLog', 'finalOutput']
};


// --- AI VIDEO FOUNDRY SCHEMA ---
const aiVideoFoundrySchema = {
    type: Type.OBJECT,
    properties: {
        title: { type: Type.STRING, description: "A compelling title for the video." },
        directorsCut: {
            type: Type.ARRAY,
            items: {
                type: Type.OBJECT,
                properties: {
                    scene: { type: Type.NUMBER },
                    script: { type: Type.STRING, description: "The portion of the script for this scene." },
                    visualPrompts: {
                        type: Type.ARRAY,
                        items: {
                            type: Type.OBJECT,
                            properties: {
                                type: { type: Type.STRING, description: "'Stock Footage' or 'Generative AI'" },
                                prompt: { type: Type.STRING, description: "The detailed prompt for finding stock footage or generating an AI image/video clip." }
                            },
                            required: ['type', 'prompt']
                        }
                    },
                    voiceoverScript: { type: Type.STRING, description: "The text for the text-to-speech engine for this scene." },
                    musicCue: { type: Type.STRING, description: "Description of the background music for this scene." },
                    overlayText: { type: Type.STRING, description: "Any text to be overlaid on the screen during this scene." }
                },
                required: ['scene', 'script', 'visualPrompts', 'voiceoverScript', 'musicCue', 'overlayText']
            }
        },
        technicalImplementation: {
            type: Type.OBJECT,
            properties: {
                techStack: {
                    type: Type.ARRAY,
                    items: {
                        type: Type.OBJECT,
                        properties: {
                            name: { type: Type.STRING, description: "e.g., 'FFmpeg.wasm', 'React'" },
                            rationale: { type: Type.STRING }
                        },
                        required: ['name', 'rationale']
                    }
                },
                architecture: { type: Type.ARRAY, items: { type: Type.STRING }, description: "Step-by-step engineering plan to build the video assembly tool." }
            },
            required: ['techStack', 'architecture']
        },
        saasMonetizationModel: {
            type: Type.OBJECT,
            properties: {
                pricingTiers: {
                    type: Type.ARRAY,
                    items: {
                        type: Type.OBJECT,
                        properties: {
                            name: { type: Type.STRING },
                            price: { type: Type.STRING },
                            description: { type: Type.STRING }
                        },
                        required: ['name', 'price', 'description']
                    }
                },
                go_to_market_strategy: { type: Type.ARRAY, items: { type: Type.STRING } }
            },
            required: ['pricingTiers', 'go_to_market_strategy']
        }
    },
    required: ['title', 'directorsCut', 'technicalImplementation', 'saasMonetizationModel']
};


// --- ALPHA ACQUISITION SCHEMA ---
const alphaAcquisitionSchema = {
    type: Type.OBJECT,
    properties: {
        channelPartnershipProtocol: {
            type: Type.OBJECT,
            properties: {
                idealPartnerProfile: { type: Type.STRING },
                aiPoweredSearchQueries: { type: Type.ARRAY, items: { type: Type.STRING } },
                irresistiblePartnershipOffer: { type: Type.STRING }
            },
            required: ['idealPartnerProfile', 'aiPoweredSearchQueries', 'irresistiblePartnershipOffer']
        },
        buyingTriggerProtocol: {
            type: Type.ARRAY,
            items: {
                type: Type.OBJECT,
                properties: {
                    triggerEvent: { type: Type.STRING },
                    signalIntelligence: { type: Type.STRING },
                    strategicApproach: { type: Type.STRING }
                },
                required: ['triggerEvent', 'signalIntelligence', 'strategicApproach']
            }
        }
    },
    required: ['channelPartnershipProtocol', 'buyingTriggerProtocol']
};

// --- CLIENT ACQUISITION ENGINE SCHEMA ---
const clientAcquisitionEngineSchema = {
    type: Type.OBJECT,
    properties: {
        tractionChannelAnalysis: {
            type: Type.ARRAY,
            items: {
                type: Type.OBJECT,
                properties: {
                    channel: { type: Type.STRING, description: "A channel from Gabriel Weinberg's 'Traction'." },
                    rationale: { type: Type.STRING, description: "Why this channel is a top priority for this specific offer." }
                },
                required: ['channel', 'rationale']
            }
        },
        dream100Protocol: {
            type: Type.ARRAY,
            items: {
                type: Type.OBJECT,
                properties: {
                    targetDescription: { type: Type.STRING, description: "A description of a 'Dream 100' target (e.g., an association, influencer, or company)." },
                    rationale: { type: Type.STRING, description: "Why they are a perfect 'Dream 100' target." }
                },
                required: ['targetDescription', 'rationale']
            }
        },
        strategicPartnershipProtocol: {
            type: Type.OBJECT,
            properties: {
                idealPartnerProfile: { type: Type.STRING, description: "Who to partner with to get access to their audience." },
                irresistibleOffer: { type: Type.STRING, description: "The 'Engineering as Marketing' or value-add offer for the partner." },
                outreachAngle: { type: Type.STRING, description: "The exact, non-obvious way to approach them." }
            },
            required: ['idealPartnerProfile', 'irresistibleOffer', 'outreachAngle']
        },
        aiAgentExecutionProtocol: {
            type: Type.OBJECT,
            properties: {
                protocol: { type: Type.STRING, description: "The specific mission brief for the multi-agent team to execute this acquisition strategy 24/7." },
                rationale: { type: Type.STRING, description: "Why this automated approach is effective." },
            },
            required: ['protocol', 'rationale'],
        },
    },
    required: ['tractionChannelAnalysis', 'dream100Protocol', 'strategicPartnershipProtocol', 'aiAgentExecutionProtocol'],
};


// --- UNFAIR ADVANTAGE SALES PROTOCOL SCHEMA ---
const unfairAdvantageSalesProtocolSchema = {
    type: Type.OBJECT,
    properties: {
        agoraAngle: {
            type: Type.OBJECT,
            properties: {
                marketSophisticationLevel: { type: Type.STRING },
                headlineAndHook: { type: Type.STRING },
                coreBodyCopyAngle: { type: Type.STRING }
            },
            required: ['marketSophisticationLevel', 'headlineAndHook', 'coreBodyCopyAngle']
        },
        belfortStraightLine: {
            type: Type.OBJECT,
            properties: {
                openingScript: { type: Type.STRING },
                intelligenceGatheringQuestions: { type: Type.ARRAY, items: { type: Type.STRING } },
                transitionToPresentation: { type: Type.STRING }
            },
            required: ['openingScript', 'intelligenceGatheringQuestions', 'transitionToPresentation']
        },
        fladlienOfferStack: {
            type: Type.OBJECT,
            properties: {
                coreOffer: { type: Type.STRING },
                premiumBonuses: {
                    type: Type.ARRAY,
                    items: {
                        type: Type.OBJECT,
                        properties: {
                            name: { type: Type.STRING },
                            value: { type: Type.STRING }
                        },
                        required: ['name', 'value']
                    }
                },
                riskReversal: { type: Type.STRING },
                urgencyDriver: { type: Type.STRING }
            },
            required: ['coreOffer', 'premiumBonuses', 'riskReversal', 'urgencyDriver']
        },
        bleedingNeckQualification: {
            type: Type.OBJECT,
            properties: {
                filterQuestions: { type: Type.ARRAY, items: { type: Type.STRING } },
                rationale: { type: Type.STRING }
            },
            required: ['filterQuestions', 'rationale']
        }
    },
    required: ['agoraAngle', 'belfortStraightLine', 'fladlienOfferStack', 'bleedingNeckQualification']
};


// --- DOMINANCE BLUEPRINT & REAL ESTATE ALPHA SHARED SCHEMAS ---
const valuationMultiplierSchema = {
    type: Type.OBJECT,
    properties: {
        title: { type: Type.STRING },
        multipleExpansionEvent: { type: Type.STRING },
        valuationImpactAnalysis: {
            type: Type.OBJECT,
            properties: {
                baseMultiple: { type: Type.STRING },
                premiumMultiples: {
                    type: Type.ARRAY,
                    items: {
                        type: Type.OBJECT,
                        properties: {
                            name: { type: Type.STRING },
                            value: { type: Type.STRING },
                            rationale: { type: Type.STRING }
                        },
                        required: ['name', 'value', 'rationale']
                    }
                },
                finalMultipleRange: { type: Type.STRING },
                exampleValuation: { type: Type.STRING }
            },
            required: ['baseMultiple', 'premiumMultiples', 'finalMultipleRange', 'exampleValuation']
        }
    },
    required: ['title', 'multipleExpansionEvent', 'valuationImpactAnalysis']
};

const proprietaryAiSymbiosisSchema = {
    type: Type.OBJECT,
    properties: {
        title: { type: Type.STRING },
        aiAdvancementCore: {
            type: Type.OBJECT,
            properties: {
                description: { type: Type.STRING },
                teamComposition: { type: Type.ARRAY, items: { type: Type.STRING } },
                mission: { type: Type.STRING, description: "The core mission of the 'skunkworks' team." }
            },
            required: ['description', 'teamComposition', 'mission']
        },
        weaponizedMethodologies: {
            type: Type.ARRAY,
            description: "Examples of proprietary tools that give human 'SWAT teams' an advantage.",
            items: {
                type: Type.OBJECT,
                properties: {
                    vertical: { type: Type.STRING, description: "e.g., AWS, Salesforce, or a domain relevant to the business." },
                    toolName: { type: Type.STRING, description: "e.g., 'ChimeraAWS Auditor'" },
                    description: { type: Type.STRING, description: "How the tool works." },
                    impact: { type: Type.STRING, description: "The measurable impact on efficiency, quality, or competitive advantage." }
                },
                required: ['vertical', 'toolName', 'description', 'impact']
            }
        },
        talentAcademyTransformation: {
            type: Type.OBJECT,
            properties: {
                description: { type: Type.STRING },
                aiTutorsAndSimulators: {
                    type: Type.OBJECT,
                    properties: {
                        name: { type: Type.STRING, description: "e.g., 'Simulated CEO'" },
                        description: { type: Type.STRING }
                    },
                    required: ['name', 'description']
                },
                aiPoweredVetting: { type: Type.STRING },
                impact: { type: Type.STRING }
            },
            required: ['description', 'aiTutorsAndSimulators', 'aiPoweredVetting', 'impact']
        },
        aiOnlyProducts: {
            type: Type.OBJECT,
            properties: {
                dataMoatStrategy: { type: Type.STRING },
                exampleProduct: {
                    type: Type.OBJECT,
                    properties: {
                        name: { type: Type.STRING, description: "e.g., 'The ChimeraIntel CIO Report'" },
                        description: { type: Type.STRING },
                        impact: { type: Type.STRING, description: "The impact this new product has on the business (e.g., new revenue stream)." }
                    },
                    required: ['name', 'description', 'impact']
                }
            },
            required: ['dataMoatStrategy', 'exampleProduct']
        }
    },
    required: ['title', 'aiAdvancementCore', 'weaponizedMethodologies', 'talentAcademyTransformation', 'aiOnlyProducts']
};


// --- DOMINANCE BLUEPRINT SCHEMA ---
const aiPoweredSEOProtocolSchema = {
    type: Type.OBJECT,
    properties: {
        keywordClusterAnalysis: {
            type: Type.ARRAY,
            items: {
                type: Type.OBJECT,
                properties: {
                    clusterName: { type: Type.STRING },
                    keywords: { type: Type.ARRAY, items: { type: Type.STRING } },
                    searchIntent: { type: Type.STRING, description: "'Informational', 'Commercial', 'Transactional', or 'Navigational'" }
                },
                required: ['clusterName', 'keywords', 'searchIntent']
            }
        },
        contentVelocityPlan: {
            type: Type.ARRAY,
            items: {
                type: Type.OBJECT,
                properties: {
                    contentType: { type: Type.STRING, description: "'Blog Post', 'Video Script', 'Landing Page', or 'Tool'" },
                    title: { type: Type.STRING },
                    angle: { type: Type.STRING }
                },
                required: ['contentType', 'title', 'angle']
            }
        },
        programmaticSEOAngle: {
            type: Type.OBJECT,
            properties: {
                angleName: { type: Type.STRING },
                description: { type: Type.STRING }
            },
            required: ['angleName', 'description']
        },
        highAuthorityBacklinkStrategy: {
            type: Type.OBJECT,
            properties: {
                target: { type: Type.STRING },
                outreachAngle: { type: Type.STRING }
            },
            required: ['target', 'outreachAngle']
        },
        competitorAnalysis: {
            type: Type.OBJECT,
            description: "An optional analysis of a competitor's SEO strategy, generated only if a competitor URL is provided.",
            properties: {
                competitorUrl: { type: Type.STRING },
                weaknesses: {
                    type: Type.ARRAY,
                    items: {
                        type: Type.OBJECT,
                        properties: {
                            weakness: { type: Type.STRING, description: "The specific SEO weakness identified." },
                            explanation: { type: Type.STRING, description: "Why this is a weakness and how it can be exploited." }
                        },
                        required: ['weakness', 'explanation']
                    }
                },
                counterStrategies: {
                    type: Type.ARRAY,
                    items: {
                        type: Type.OBJECT,
                        properties: {
                            strategy: { type: Type.STRING, description: "The name of the counter-strategy." },
                            actionableSteps: { type: Type.ARRAY, items: { type: Type.STRING }, description: "Specific, actionable steps to implement the counter-strategy." }
                        },
                        required: ['strategy', 'actionableSteps']
                    }
                }
            },
            required: ['competitorUrl', 'weaknesses', 'counterStrategies']
        }
    },
    required: ['keywordClusterAnalysis', 'contentVelocityPlan', 'programmaticSEOAngle', 'highAuthorityBacklinkStrategy']
};

const phygitalSynergyProtocolSchema = {
    type: Type.OBJECT,
    properties: {
        fieldOperatorToolkit: { type: Type.ARRAY, items: { type: Type.STRING } },
        dataFlywheelEffect: { type: Type.STRING }
    },
    required: ['fieldOperatorToolkit', 'dataFlywheelEffect']
};

const dominanceBlueprintSchema = {
    type: Type.OBJECT,
    properties: {
        executiveSummary: { type: Type.STRING, description: "A C-level summary of the entire domination plan." },
        conceptualImagePrompt: { type: Type.STRING, description: "A rich, descriptive prompt for an AI image generator to create a compelling conceptual image for this business." },
        marketForecast: {
            type: Type.ARRAY,
            items: {
                type: Type.OBJECT,
                properties: {
                    trend: { type: Type.STRING },
                    rationale: { type: Type.STRING }
                },
                required: ['trend', 'rationale']
            }
        },
        asymmetricDominationStrategy: {
            type: Type.OBJECT,
            properties: {
                coreStrategy: { type: Type.STRING, description: "The brilliant, non-obvious core strategy for market domination." },
                rationale: { type: Type.STRING },
                cleverTactics: {
                    type: Type.ARRAY,
                    items: {
                        type: Type.OBJECT,
                        properties: {
                            tacticName: { type: Type.STRING, description: "e.g., 'Engineering as Marketing', 'Infiltration via Media'." },
                            description: { type: Type.STRING }
                        },
                        required: ['tacticName', 'description']
                    }
                }
            },
            required: ['coreStrategy', 'rationale', 'cleverTactics']
        },
        first100CustomersProtocol: { type: Type.ARRAY, items: { type: Type.STRING }, description: "A precise, actionable plan to achieve initial market traction." },
        moatBuildingSequence: {
            type: Type.ARRAY,
            items: {
                type: Type.OBJECT,
                properties: {
                    phase: { type: Type.STRING },
                    description: { type: Type.STRING }
                },
                required: ['phase', 'description']
            },
            description: "A multi-phase plan to create a defensible, long-term competitive advantage."
        },
        aiAutomationProtocol: {
            type: Type.OBJECT,
            properties: {
                protocol: { type: Type.STRING },
                rationale: { type: Type.STRING }
            },
            required: ['protocol', 'rationale']
        },
        asymmetricJVProtocol: {
            type: Type.OBJECT,
            properties: {
                idealPartnerProfile: { type: Type.STRING },
                valueProposition: { type: Type.STRING },
                outreachAngle: { type: Type.STRING }
            },
            required: ['idealPartnerProfile', 'valueProposition', 'outreachAngle']
        },
        consultingAngle: {
            type: Type.OBJECT,
            description: "A complete plan for selling this blueprint as a high-ticket consulting service.",
            properties: {
                positioningStatement: { type: Type.STRING, description: "How the consultant using this tool should position themselves." },
                prospectPositioning: { type: Type.STRING, description: "How the business receiving this blueprint should position itself in the market." },
                outreachAngle: { type: Type.STRING, description: "The exact angle to approach the business with this blueprint." },
                pricingRecommendation: {
                    type: Type.ARRAY,
                    items: {
                        type: Type.OBJECT,
                        properties: {
                            tier: { type: Type.STRING },
                            price: { type: Type.STRING },
                            description: { type: Type.STRING }
                        },
                        required: ['tier', 'price', 'description']
                    }
                },
                salesPitchAsset: salesPitchAssetSchema
            },
            required: ['positioningStatement', 'prospectPositioning', 'outreachAngle', 'pricingRecommendation', 'salesPitchAsset']
        },
        unfairAdvantageSalesProtocol: unfairAdvantageSalesProtocolSchema,
        clientAcquisitionEngine: clientAcquisitionEngineSchema,
        phygitalSynergyProtocol: { ...phygitalSynergyProtocolSchema, description: "A strategy for businesses that combine physical services with digital AI. This is optional and should only be included if relevant to the business concept." },
        aiPoweredSEOProtocol: aiPoweredSEOProtocolSchema,
        proprietaryAiSymbiosis: proprietaryAiSymbiosisSchema,
        valuationMultiplier: valuationMultiplierSchema,
        methodology: { type: Type.ARRAY, items: { type: Type.STRING } }
    },
    required: ['executiveSummary', 'conceptualImagePrompt', 'marketForecast', 'asymmetricDominationStrategy', 'first100CustomersProtocol', 'moatBuildingSequence', 'aiAutomationProtocol', 'asymmetricJVProtocol', 'consultingAngle', 'unfairAdvantageSalesProtocol', 'clientAcquisitionEngine', 'aiPoweredSEOProtocol', 'proprietaryAiSymbiosis', 'valuationMultiplier', 'methodology']
};

const phyGitalVideoStrategySchema = {
    type: Type.OBJECT,
    properties: {
        videoTitle: { type: Type.STRING },
        targetAudience: { type: Type.STRING },
        coreMessage: { type: Type.STRING },
        script: {
            type: Type.ARRAY,
            items: {
                type: Type.OBJECT,
                properties: {
                    scene: { type: Type.NUMBER },
                    visual: { type: Type.STRING },
                    voiceover: { type: Type.STRING },
                    duration: { type: Type.STRING }
                },
                required: ['scene', 'visual', 'voiceover', 'duration']
            }
        },
        aiVideoPrompt: { type: Type.STRING, description: "A detailed prompt for a text-to-video AI model to generate the visuals." },
        distributionPlan: { type: Type.STRING, description: "How and where to distribute this video for maximum impact." }
    },
    required: ['videoTitle', 'targetAudience', 'coreMessage', 'script', 'aiVideoPrompt', 'distributionPlan']
};

// --- LANDING PAGE ARCHITECT SCHEMA ---
const landingPageSectionSchema = {
    type: Type.OBJECT,
    properties: {
        sectionType: { type: Type.STRING, description: "'hero', 'problem', 'solution', 'features', 'socialProof', 'callToAction', or 'faq'." },
        headline: { type: Type.STRING },
        subheadline: { type: Type.STRING },
        body: { type: Type.STRING },
        ctaButtonText: { type: Type.STRING },
    },
    required: ['sectionType', 'headline', 'body']
};

const landingPageBlueprintSchema = {
    type: Type.OBJECT,
    properties: {
        pageTitle: { type: Type.STRING, description: "The title for the HTML page." },
        sections: {
            type: Type.ARRAY,
            items: landingPageSectionSchema
        }
    },
    required: ['pageTitle', 'sections']
};

// --- ALPHA SIGNAL PROTOCOL SCHEMA ---
const revenuePlaySchema = {
    type: Type.OBJECT,
    properties: {
        playName: { type: Type.STRING },
        probabilityOfSuccess: {
            type: Type.OBJECT,
            properties: {
                score: { type: Type.NUMBER },
                rationale: { type: Type.STRING }
            },
            required: ['score', 'rationale']
        },
        potentialRevenue: { type: Type.STRING },
        requiredAssets: { type: Type.ARRAY, items: { type: Type.STRING } },
        psychologicalEdge: {
            type: Type.OBJECT,
            properties: {
                principle: { type: Type.STRING },
                application: { type: Type.STRING }
            },
            required: ['principle', 'application']
        },
        executionSteps: { type: Type.ARRAY, items: { type: Type.STRING } },
        aiAgentProtocol: {
            type: Type.OBJECT,
            properties: {
                protocol: { type: Type.STRING },
                rationale: { type: Type.STRING }
            },
            required: ['protocol', 'rationale']
        }
    },
    required: ['playName', 'probabilityOfSuccess', 'potentialRevenue', 'requiredAssets', 'psychologicalEdge', 'executionSteps', 'aiAgentProtocol']
};

const alphaSignalReportSchema = {
    type: Type.OBJECT,
    properties: {
        executiveSummary: { type: Type.STRING },
        revenuePlays: {
            type: Type.ARRAY,
            items: revenuePlaySchema
        },
        methodology: { type: Type.ARRAY, items: { type: Type.STRING } }
    },
    required: ['executiveSummary', 'revenuePlays', 'methodology']
};

// --- CHIMERIC AGENT PROTOCOL SCHEMA ---
const highStakesSolutionSchema = {
    type: Type.OBJECT,
    properties: {
        solutionName: { type: Type.STRING },
        problemDomain: { type: Type.STRING },
        aiLeveragePoint: { type: Type.STRING },
        monetizationModel: { type: Type.STRING },
        firstTouchProtocol: {
            type: Type.OBJECT,
            properties: {
                wedge: { type: Type.STRING },
                rationale: { type: Type.STRING }
            },
            required: ['wedge', 'rationale']
        }
    },
    required: ['solutionName', 'problemDomain', 'aiLeveragePoint', 'monetizationModel', 'firstTouchProtocol']
};

const chimericAgentReportSchema = {
    type: Type.OBJECT,
    properties: {
        subjectSynthesis: { type: Type.STRING },
        highStakesSolutions: {
            type: Type.ARRAY,
            items: highStakesSolutionSchema
        },
        methodology: { type: Type.ARRAY, items: { type: Type.STRING } }
    },
    required: ['subjectSynthesis', 'highStakesSolutions', 'methodology']
};

// --- LONE WOLF PROTOCOL SCHEMA ---
const loneWolfPlaySchema = {
    type: Type.OBJECT,
    properties: {
        playName: { type: Type.STRING },
        incomePotential: { type: Type.STRING },
        timeToFirstCash: { type: Type.STRING },
        requiredAssets: { type: Type.ARRAY, items: { type: Type.STRING } },
        gatekeeperBypassTactic: {
            type: Type.OBJECT,
            properties: {
                tactic: { type: Type.STRING },
                rationale: { type: Type.STRING }
            },
            required: ['tactic', 'rationale']
        },
        executionSteps: { type: Type.ARRAY, items: { type: Type.STRING } },
        aiAgentProtocol: {
            type: Type.OBJECT,
            properties: {
                protocol: { type: Type.STRING },
                rationale: { type: Type.STRING }
            },
            required: ['protocol', 'rationale']
        }
    },
    required: ['playName', 'incomePotential', 'timeToFirstCash', 'requiredAssets', 'gatekeeperBypassTactic', 'executionSteps', 'aiAgentProtocol']
};

const loneWolfReportSchema = {
    type: Type.OBJECT,
    properties: {
        executiveSummary: { type: Type.STRING },
        loneWolfPlays: {
            type: Type.ARRAY,
            items: loneWolfPlaySchema
        },
        methodology: { type: Type.ARRAY, items: { type: Type.STRING } }
    },
    required: ['executiveSummary', 'loneWolfPlays', 'methodology']
};

// --- GATEKEEPER BYPASS PROTOCOL SCHEMA ---
const gatekeeperBypassReportSchema = {
    type: Type.OBJECT,
    properties: {
        targetAudienceDeconstruction: {
            type: Type.OBJECT,
            properties: {
                profile: { type: Type.STRING, description: "Who the biz-opp seeker is." },
                wateringHoles: { type: Type.ARRAY, items: { type: Type.STRING }, description: "Where they congregate online." },
                painPointsAndDesires: { type: Type.ARRAY, items: { type: Type.STRING }, description: "What they truly want." }
            },
            required: ['profile', 'wateringHoles', 'painPointsAndDesires']
        },
        honeypotStrategy: {
            type: Type.OBJECT,
            properties: {
                concept: { type: Type.STRING, description: "The core concept of the attraction mechanism." },
                honeypotIdeas: {
                    type: Type.ARRAY,
                    items: {
                        type: Type.OBJECT,
                        properties: {
                            name: { type: Type.STRING },
                            description: { type: Type.STRING }
                        },
                        required: ['name', 'description']
                    }
                },
                distributionPlan: { type: Type.STRING, description: "How to promote the honeypot." }
            },
            required: ['concept', 'honeypotIdeas', 'distributionPlan']
        },
        profitSplitJVProtocol: {
            type: Type.OBJECT,
            properties: {
                idealPartnerProfile: { type: Type.STRING, description: "Who else has access to this audience." },
                irresistibleOffer: { type: Type.STRING, description: "The value prop for the JV partner." },
                outreachScript: { type: Type.STRING, description: "The script to approach potential partners." }
            },
            required: ['idealPartnerProfile', 'irresistibleOffer', 'outreachScript']
        },
        productizationRoadmap: {
            type: Type.ARRAY,
            items: { type: Type.STRING },
            description: "A step-by-step plan to turn audience engagement into a sellable product."
        },
        methodology: { type: Type.ARRAY, items: { type: Type.STRING } }
    },
    required: ['targetAudienceDeconstruction', 'honeypotStrategy', 'profitSplitJVProtocol', 'productizationRoadmap', 'methodology']
};

// --- CASHFLOW PROTOCOL SCHEMA ---
const cashflowProtocolReportSchema = {
    type: Type.OBJECT,
    properties: {
        mindsetCalibration: {
            type: Type.OBJECT,
            properties: {
                corePrinciple: { type: Type.STRING },
                affirmation: { type: Type.STRING }
            },
            required: ['corePrinciple', 'affirmation']
        },
        highTicketOffer: {
            type: Type.OBJECT,
            properties: {
                offerName: { type: Type.STRING },
                pricePoint: { type: Type.STRING },
                coreComponents: { type: Type.ARRAY, items: { type: Type.STRING } },
                irresistibleBonuses: {
                    type: Type.ARRAY,
                    items: {
                        type: Type.OBJECT,
                        properties: {
                            name: { type: Type.STRING },
                            value: { type: Type.STRING }
                        },
                        required: ['name', 'value']
                    }
                }
            },
            required: ['offerName', 'pricePoint', 'coreComponents', 'irresistibleBonuses']
        },
        prospectingDirective: {
            type: Type.OBJECT,
            properties: {
                idealClientProfile: { type: Type.STRING },
                killListQuery: { type: Type.STRING }
            },
            required: ['idealClientProfile', 'killListQuery']
        },
        closingScript: {
            type: Type.OBJECT,
            properties: {
                opening: { type: Type.STRING },
                painFindingQuestions: { type: Type.ARRAY, items: { type: Type.STRING } },
                solutionPresentation: { type: Type.STRING },
                close: { type: Type.STRING }
            },
            required: ['opening', 'painFindingQuestions', 'solutionPresentation', 'close']
        },
        battlePlan48Hours: {
            type: Type.OBJECT,
            properties: {
                hours0_6: { type: Type.STRING },
                hours7_24: { type: Type.STRING },
                hours25_48: { type: Type.STRING }
            },
            required: ['hours0_6', 'hours7_24', 'hours25_48']
        },
        aiAgentProtocol: {
            type: Type.OBJECT,
            properties: {
                protocol: { type: Type.STRING },
                rationale: { type: Type.STRING }
            },
            required: ['protocol', 'rationale']
        }
    },
    required: ['mindsetCalibration', 'highTicketOffer', 'prospectingDirective', 'closingScript', 'battlePlan48Hours', 'aiAgentProtocol']
};

// --- REAL ESTATE ALPHA SCHEMA ---
const dataVisualizationSuiteSchema = {
    type: Type.OBJECT,
    properties: {
        marketOpportunityChart: {
            type: Type.OBJECT,
            properties: {
                title: { type: Type.STRING },
                labels: { type: Type.ARRAY, items: { type: Type.STRING } },
                datasets: {
                    type: Type.ARRAY,
                    items: {
                        type: Type.OBJECT,
                        properties: {
                            label: { type: Type.STRING },
                            data: { type: Type.ARRAY, items: { type: Type.NUMBER } },
                        },
                        required: ['label', 'data'],
                    }
                },
            },
            required: ['title', 'labels', 'datasets'],
        },
        dealEconomicsChart: {
            type: Type.OBJECT,
            properties: {
                title: { type: Type.STRING },
                labels: { type: Type.ARRAY, items: { type: Type.STRING } },
                datasets: {
                    type: Type.ARRAY,
                    items: {
                        type: Type.OBJECT,
                        properties: {
                            label: { type: Type.STRING },
                            data: { type: Type.ARRAY, items: { type: Type.NUMBER } },
                        },
                        required: ['label', 'data'],
                    }
                },
            },
            required: ['title', 'labels', 'datasets'],
        },
        samplePropertyDossier: {
            type: Type.OBJECT,
            properties: {
                address: { type: Type.STRING },
                imageUrl: { type: Type.STRING, description: "A placeholder URL for the image. The service will replace this." },
                imageGenerationPrompt: { type: Type.STRING, description: "A detailed prompt for an AI to generate a realistic image of this property." },
                stats: {
                    type: Type.ARRAY,
                    items: {
                        type: Type.OBJECT,
                        properties: {
                            label: { type: Type.STRING },
                            value: { type: Type.STRING },
                        },
                        required: ['label', 'value'],
                    }
                },
                investmentThesis: { type: Type.STRING },
                riskFactors: { type: Type.ARRAY, items: { type: Type.STRING } },
            },
            required: ['address', 'imageUrl', 'imageGenerationPrompt', 'stats', 'investmentThesis', 'riskFactors'],
        },
    },
    required: ['marketOpportunityChart', 'dealEconomicsChart', 'samplePropertyDossier'],
};

const invincibleCompanyFrameworkSchema = {
    type: Type.OBJECT,
    properties: {
        exploitPortfolio: {
            type: Type.OBJECT,
            properties: {
                title: { type: Type.STRING },
                summary: { type: Type.STRING },
            },
            required: ['title', 'summary'],
        },
        explorePortfolio: {
            type: Type.OBJECT,
            properties: {
                title: { type: Type.STRING },
                summary: { type: Type.STRING },
                opportunities: {
                    type: Type.ARRAY,
                    items: {
                        type: Type.OBJECT,
                        properties: {
                            name: { type: Type.STRING },
                            description: { type: Type.STRING },
                        },
                        required: ['name', 'description'],
                    }
                },
            },
            required: ['title', 'summary', 'opportunities'],
        },
    },
    required: ['exploitPortfolio', 'explorePortfolio'],
};


const realEstateAlphaReportSchema = {
    type: Type.OBJECT,
    properties: {
        esotericAlpha: {
            type: Type.OBJECT,
            properties: {
                title: { type: Type.STRING },
                description: { type: Type.STRING },
                strategies: {
                    type: Type.ARRAY,
                    items: {
                        type: Type.OBJECT,
                        properties: {
                            name: { type: Type.STRING },
                            source: { type: Type.STRING },
                            strategy: { type: Type.STRING }
                        },
                        required: ['name', 'source', 'strategy']
                    }
                }
            },
            required: ['title', 'description', 'strategies']
        },
        uploadedDataAnalysis: {
            type: Type.OBJECT,
            properties: {
                summary: { type: Type.STRING },
                insights: { type: Type.ARRAY, items: { type: Type.STRING } }
            },
            required: ['summary', 'insights']
        },
        quantitativeModel: quantitativeModelSchema,
        dataVisualizationSuite: dataVisualizationSuiteSchema,
        invincibleCompanyFramework: invincibleCompanyFrameworkSchema,
        dealFlowEngine: {
            type: Type.OBJECT,
            properties: {
                harvester: {
                    type: Type.OBJECT,
                    properties: {
                        stageSummary: { type: Type.STRING },
                        tasks: {
                            type: Type.ARRAY,
                            items: {
                                type: Type.OBJECT,
                                properties: {
                                    taskName: { type: Type.STRING },
                                    description: { type: Type.STRING }
                                },
                                required: ['taskName', 'description']
                            }
                        },
                        output: { type: Type.STRING }
                    },
                    required: ['stageSummary', 'tasks', 'output']
                },
                validator: {
                    type: Type.OBJECT,
                    properties: {
                        stageSummary: { type: Type.STRING },
                        tasks: {
                            type: Type.ARRAY,
                            items: {
                                type: Type.OBJECT,
                                properties: {
                                    taskName: { type: Type.STRING },
                                    description: { type: Type.STRING }
                                },
                                required: ['taskName', 'description']
                            }
                        },
                        leverageScoringAlgorithm: {
                            type: Type.OBJECT,
                            properties: {
                                description: { type: Type.STRING },
                                formula: { type: Type.STRING, description: "The mathematical formula for the scoring algorithm." },
                                factors: {
                                    type: Type.ARRAY,
                                    items: {
                                        type: Type.OBJECT,
                                        properties: {
                                            factor: { type: Type.STRING },
                                            weight: { type: Type.STRING },
                                            rationale: { type: Type.STRING }
                                        },
                                        required: ['factor', 'weight', 'rationale']
                                    }
                                }
                            },
                            required: ['description', 'formula', 'factors']
                        },
                        output: { type: Type.STRING }
                    },
                    required: ['stageSummary', 'tasks', 'leverageScoringAlgorithm', 'output']
                },
                dossier: {
                    type: Type.OBJECT,
                    properties: {
                        stageSummary: { type: Type.STRING },
                        tasks: {
                            type: Type.ARRAY,
                            items: {
                                type: Type.OBJECT,
                                properties: {
                                    taskName: { type: Type.STRING },
                                    description: { type: Type.STRING }
                                },
                                required: ['taskName', 'description']
                            }
                        },
                        output: { type: Type.STRING }
                    },
                    required: ['stageSummary', 'tasks', 'output']
                }
            },
            required: ['harvester', 'validator', 'dossier']
        },
        investorPlaybook: {
            type: Type.OBJECT,
            properties: {
                title: { type: Type.STRING },
                steps: {
                    type: Type.ARRAY,
                    items: {
                        type: Type.OBJECT,
                        properties: {
                            stepName: { type: Type.STRING },
                            description: { type: Type.STRING }
                        },
                        required: ['stepName', 'description']
                    }
                }
            },
            required: ['title', 'steps']
        },
        proprietaryAiSymbiosis: proprietaryAiSymbiosisSchema,
        valuationMultiplier: valuationMultiplierSchema,
        aiAgentProtocol: {
            type: Type.OBJECT,
            properties: {
                protocol: { type: Type.STRING },
                rationale: { type: Type.STRING }
            },
            required: ['protocol', 'rationale']
        }
    },
    required: ['esotericAlpha', 'quantitativeModel', 'dataVisualizationSuite', 'invincibleCompanyFramework', 'dealFlowEngine', 'investorPlaybook', 'proprietaryAiSymbiosis', 'valuationMultiplier', 'aiAgentProtocol']
};

// --- ARCHIMEDES PROTOCOL SCHEMA ---
const arsenalProtocolSchema = {
    type: Type.OBJECT,
    properties: {
        title: { type: Type.STRING },
        description: { type: Type.STRING },
        tooling: {
            type: Type.OBJECT,
            properties: {
                bestInClass: {
                    type: Type.OBJECT,
                    properties: { name: { type: Type.STRING }, rationale: { type: Type.STRING } },
                    required: ['name', 'rationale'],
                },
                costEffectiveAlternative: {
                    type: Type.OBJECT,
                    properties: { name: { type: Type.STRING }, rationale: { type: Type.STRING } },
                    required: ['name', 'rationale'],
                },
                freeOrOpenSource: {
                    type: Type.OBJECT,
                    properties: { name: { type: Type.STRING }, rationale: { type: Type.STRING } },
                    required: ['name', 'rationale'],
                },
            },
            required: ['bestInClass', 'costEffectiveAlternative', 'freeOrOpenSource'],
        },
        serverlessFunctionCode: { type: Type.STRING, description: "Complete, copy-pasteable Node.js code for a Vercel Serverless Function that provides this capability." },
        requiredEnvVars: {
            type: Type.ARRAY,
            items: {
                type: Type.OBJECT,
                properties: {
                    key: { type: Type.STRING },
                    description: { type: Type.STRING },
                },
                required: ['key', 'description'],
            },
        },
        agentApiCallProtocol: { type: Type.STRING, description: "The precise JSON structure an AI agent needs to send to the serverless function to use it." },
    },
    required: ['title', 'description', 'tooling', 'serverlessFunctionCode', 'requiredEnvVars', 'agentApiCallProtocol'],
};

const archimedesProtocolReportSchema = {
    type: Type.OBJECT,
    properties: {
        theMandate: {
            type: Type.OBJECT,
            properties: {
                title: { type: Type.STRING },
                corePrinciple: { type: Type.STRING },
                affirmation: { type: Type.STRING },
            },
            required: ['title', 'corePrinciple', 'affirmation'],
        },
        theSovereignFoundry: {
            type: Type.OBJECT,
            properties: {
                title: { type: Type.STRING },
                description: { type: Type.STRING },
                workflow: { type: Type.ARRAY, items: { type: Type.STRING } },
            },
            required: ['title', 'description', 'workflow'],
        },
        theAgentCSuite: {
            type: Type.OBJECT,
            properties: {
                title: { type: Type.STRING },
                description: { type: Type.STRING },
                aiAgentProtocol: {
                    type: Type.OBJECT,
                    properties: {
                        protocol: { type: Type.STRING },
                        rationale: { type: Type.STRING },
                    },
                    required: ['protocol', 'rationale'],
                },
            },
            required: ['title', 'description', 'aiAgentProtocol'],
        },
        theOperatorsCockpit: {
            type: Type.OBJECT,
            properties: {
                title: { type: Type.STRING },
                description: { type: Type.STRING },
                yourRole: { type: Type.ARRAY, items: { type: Type.STRING } },
            },
            required: ['title', 'description', 'yourRole'],
        },
        theSovereignArsenal: {
            type: Type.OBJECT,
            properties: {
                title: { type: Type.STRING },
                description: { type: Type.STRING },
                communicationsProtocol: arsenalProtocolSchema,
                visionProtocol: arsenalProtocolSchema,
                dataAcquisitionProtocol: arsenalProtocolSchema,
                voiceIntelligenceProtocol: arsenalProtocolSchema,
                unconventionalToolsAndApis: {
                    type: Type.OBJECT,
                    properties: {
                        title: { type: Type.STRING },
                        description: { type: Type.STRING },
                        tools: {
                            type: Type.ARRAY,
                            items: {
                                type: Type.OBJECT,
                                properties: {
                                    name: { type: Type.STRING },
                                    useCase: { type: Type.STRING },
                                    agentInteractionProtocol: { type: Type.STRING },
                                },
                                required: ['name', 'useCase', 'agentInteractionProtocol'],
                            },
                        },
                    },
                    required: ['title', 'description', 'tools'],
                },
            },
            required: ['title', 'description', 'communicationsProtocol', 'visionProtocol', 'dataAcquisitionProtocol', 'voiceIntelligenceProtocol', 'unconventionalToolsAndApis'],
        }
    },
    required: ['theMandate', 'theSovereignFoundry', 'theAgentCSuite', 'theOperatorsCockpit', 'theSovereignArsenal'],
};


// --- FIRST STRIKE PROTOCOL SCHEMA ---
const firstStrikeReportSchema = {
    type: Type.ARRAY,
    items: {
        type: Type.OBJECT,
        properties: {
            archetypeDescription: { type: Type.STRING, description: "A detailed description of the hyper-specific target archetype." },
            godTierDorkQueries: { type: Type.ARRAY, items: { type: Type.STRING }, description: "A list of creative, complex search queries to find these individuals or companies." },
            firstContactAngle: { type: Type.STRING, description: "A bespoke, psychologically-tuned outreach angle for this specific archetype." }
        },
        required: ['archetypeDescription', 'godTierDorkQueries', 'firstContactAngle']
    }
};

// --- SOVEREIGN PROTOCOL SCHEMA ---
const sovereignTaskSchema = {
    type: Type.OBJECT,
    properties: {
        id: { type: Type.STRING },
        brief: { type: Type.STRING },
        status: { type: Type.STRING, description: "'Pending', 'Waiting', 'Executing', 'Completed', or 'Failed'" },
        dependsOn: { type: Type.ARRAY, items: { type: Type.STRING }, description: "An optional array of task IDs that this task depends on." },
        actionableOutput: {
            type: Type.ARRAY,
            items: {
                type: Type.OBJECT,
                properties: {
                    type: { type: Type.STRING, description: "'copy', 'prompt', 'data', 'integration', or 'microToolBlueprint'" },
                    title: { type: Type.STRING },
                    content: { type: Type.STRING },
                    url: { type: Type.STRING, description: "URL for 'integration' type" }
                },
                required: ['type', 'title', 'content']
            }
        },
        insight: { type: Type.STRING, description: "An educational insight or capability briefing related to the task." },
        suggestedNextTask: { type: Type.STRING, description: "A pre-formulated brief for the next logical action." }
    },
    required: ['id', 'brief', 'status']
};

const sovereignAgentSchema = {
    type: Type.OBJECT,
    properties: {
        id: { type: Type.STRING },
        agentType: { type: Type.STRING },
        overallBrief: { type: Type.STRING },
        status: { type: Type.STRING, description: "'Idle', 'Active', or 'Error'" },
        tasks: {
            type: Type.ARRAY,
            items: sovereignTaskSchema
        }
    },
    required: ['id', 'agentType', 'overallBrief', 'status', 'tasks']
};

const sovereignWorkforceSchema = {
    type: Type.ARRAY,
    items: sovereignAgentSchema,
    description: "A team of autonomous AI agents ready for deployment."
};


// --- MARKET MAP SCHEMA ---
const marketMapSchema = {
    type: Type.OBJECT,
    properties: {
        executiveSummary: { type: Type.STRING },
        keyPlayers: {
            type: Type.ARRAY,
            items: {
                type: Type.OBJECT,
                properties: {
                    name: { type: Type.STRING },
                    marketPosition: { type: Type.STRING, description: "'Leader', 'Challenger', 'Niche Specialist', or 'Emerging'" },
                    summary: { type: Type.STRING }
                },
                required: ['name', 'marketPosition', 'summary']
            }
        },
        audienceSegments: {
            type: Type.ARRAY,
            items: {
                type: Type.OBJECT,
                properties: {
                    name: { type: Type.STRING },
                    description: { type: Type.STRING },
                    sizeEstimate: { type: Type.STRING }
                },
                required: ['name', 'description', 'sizeEstimate']
            }
        },
        whitespaceOpportunities: {
            type: Type.ARRAY,
            items: {
                type: Type.OBJECT,
                properties: {
                    opportunityName: { type: Type.STRING },
                    description: { type: Type.STRING },
                    strategicAngle: { type: Type.STRING }
                },
                required: ['opportunityName', 'description', 'strategicAngle']
            }
        },
        methodology: { type: Type.ARRAY, items: { type: Type.STRING } }
    },
    required: ['executiveSummary', 'keyPlayers', 'audienceSegments', 'whitespaceOpportunities', 'methodology']
};


// --- UNIVERSAL SCHEMAS ---

const scoredProspectsSchema = {
  type: Type.ARRAY,
  items: {
    type: Type.OBJECT,
    properties: {
      prospectInfo: { type: Type.STRING },
      fitScore: { type: Type.NUMBER },
      rationale: { type: Type.STRING }
    },
    required: ['prospectInfo', 'fitScore', 'rationale']
  }
};

const validatedProspectsSchema = {
  type: Type.ARRAY,
  items: {
    type: Type.OBJECT,
    properties: {
      fullName: { type: Type.STRING },
      validationStatus: { type: Type.STRING, description: "'Validated' or 'Needs Review'" },
      validationRationale: { type: Type.STRING }
    },
    required: ['fullName', 'validationStatus', 'validationRationale']
  }
};

const pricingTierSchema = {
    type: Type.OBJECT,
    properties: {
        name: { type: Type.STRING },
        pricePerMonth: { type: Type.STRING },
        description: { type: Type.STRING },
        features: { type: Type.ARRAY, items: { type: Type.STRING } }
    },
    required: ['name', 'pricePerMonth', 'description', 'features']
};

const pricingModelSchema = {
    type: Type.OBJECT,
    properties: {
        tiers: { type: Type.ARRAY, items: pricingTierSchema },
        additionalCharges: { type: Type.STRING }
    },
    required: ['tiers']
};

const productIdeaSchema = {
    type: Type.OBJECT,
    properties: {
        ideaName: { type: Type.STRING },
        description: { type: Type.STRING },
        profitPotential: { type: Type.STRING, description: "A specific, quantified financial projection (e.g., '$250k - $500k ARR within 24 months')." },
        financialNarrative: { type: Type.STRING, description: "A compelling narrative explaining the logic, assumptions (pricing, market size, conversion rate), and data supporting the projection, making it irrefutable." },
        aiLeveragePoint: { type: Type.STRING, description: "A concrete example of how AI provides a 10x advantage in the product's delivery or its back-end operations." },
        pricingModel: pricingModelSchema,
        monetizationPathways: { type: Type.ARRAY, items: { type: Type.STRING } }
    },
    required: ['ideaName', 'description', 'profitPotential', 'financialNarrative', 'aiLeveragePoint', 'pricingModel', 'monetizationPathways']
};

const leadSourceProtocolSchema = {
    type: Type.OBJECT,
    properties: {
        sourcePlatform: { type: Type.STRING, description: "The exact platform to find leads, e.g., 'LinkedIn Sales Navigator', 'Apollo.io', 'BuiltWith', 'Clutch.co'." },
        filteringCriteria: { type: Type.ARRAY, items: { type: Type.STRING }, description: "The specific filters to apply on the platform." },
        rationale: { type: Type.STRING, description: "Why this specific source and filter set will yield high-quality leads." }
    },
    required: ['sourcePlatform', 'filteringCriteria', 'rationale']
};

const monetizationStrategySchema = {
    type: Type.OBJECT,
    properties: {
        coreOpportunity: { type: Type.STRING },
        productIdeas: {
            type: Type.ARRAY,
            items: productIdeaSchema
        },
        go_to_market_strategy: { type: Type.ARRAY, items: { type: Type.STRING } },
        leadSourceProtocol: {
            type: Type.ARRAY,
            items: leadSourceProtocolSchema
        }
    },
    required: ['coreOpportunity', 'productIdeas', 'go_to_market_strategy', 'leadSourceProtocol']
};

const b2bPlaybookSchema = {
    type: Type.OBJECT,
    properties: {
        positioningStatement: { type: Type.STRING },
        brandingPersona: { type: Type.STRING },
        idealClientProfile: { type: Type.ARRAY, items: { type: Type.STRING } },
        irresistibleOffer: {
            type: Type.OBJECT,
            properties: {
                offerName: { type: Type.STRING },
                pricePoint: { type: Type.STRING },
                components: { type: Type.ARRAY, items: { type: Type.STRING } },
                salesPitchAsset: salesPitchAssetSchema
            },
            required: ['offerName', 'pricePoint', 'components', 'salesPitchAsset']
        },
        marketingFunnel: { type: Type.ARRAY, items: { type: Type.STRING } },
        searchAndAcquisitionProtocol: {
            type: Type.OBJECT,
            properties: {
                alphaSignal: { type: Type.STRING },
                leveragePoint: { type: Type.STRING },
                protocolSteps: { type: Type.ARRAY, items: { type: Type.STRING } }
            },
            required: ['alphaSignal', 'leveragePoint', 'protocolSteps']
        },
        clientAcquisitionEngine: clientAcquisitionEngineSchema,
        finalWisdom: { type: Type.STRING }
    },
    required: ['positioningStatement', 'brandingPersona', 'idealClientProfile', 'irresistibleOffer', 'marketingFunnel', 'searchAndAcquisitionProtocol', 'clientAcquisitionEngine', 'finalWisdom']
};

const b2cPlaybookSchema = {
     type: Type.OBJECT,
    properties: {
        positioningStatement: { type: Type.STRING },
        brandingPersona: { type: Type.STRING },
        idealClientProfile: { type: Type.ARRAY, items: { type: Type.STRING } },
        irresistibleOffer: {
            type: Type.OBJECT,
            properties: {
                offerName: { type: Type.STRING },
                pricePoint: { type: Type.STRING },
                components: { type: Type.ARRAY, items: { type: Type.STRING } },
                salesPitchAsset: salesPitchAssetSchema
            },
            required: ['offerName', 'pricePoint', 'components', 'salesPitchAsset']
        },
        marketingFunnel: { type: Type.ARRAY, items: { type: Type.STRING } },
        asymmetricWedgeStrategy: {
            type: Type.OBJECT,
            description: "A concrete plan to instantly leapfrog and disrupt entrenched B2C competitors.",
            properties: {
                 targetMicroTribe: { type: Type.STRING, description: "A hyper-specific, non-obvious customer group to capture."},
                 asymmetricWedge: {
                     type: Type.OBJECT,
                     properties: {
                        wedgeType: { type: Type.STRING, description: "'Product', 'Media', or 'Community'"},
                        idea: { type: Type.STRING, description: "A concrete product or content idea designed to be irresistible ONLY to the micro-tribe."},
                        rationale: { type: Type.STRING, description: "Why this wedge will work to capture the tribe's heart."}
                     },
                     required: ['wedgeType', 'idea', 'rationale']
                 },
                 infiltrationPlan: { type: Type.ARRAY, items: {type: Type.STRING}, description: "A direct-response media plan to deploy the wedge."}
            },
            required: ['targetMicroTribe', 'asymmetricWedge', 'infiltrationPlan']
        },
        finalWisdom: { type: Type.STRING }
    },
    required: ['positioningStatement', 'brandingPersona', 'idealClientProfile', 'irresistibleOffer', 'marketingFunnel', 'asymmetricWedgeStrategy', 'finalWisdom']
};

const getModel = (isTurboMode: boolean) => (isTurboMode ? 'gemini-2.5-flash' : 'gemini-2.5-pro');

async function callGemini<T>(prompt: string, schema: any, isTurboMode: boolean): Promise<T> {
  const ai = new GoogleGenAI({ apiKey: process.env.API_KEY });
  const model = getModel(isTurboMode);
  
  try {
    const response = await ai.models.generateContent({
      model,
      contents: prompt,
      config: {
        responseMimeType: "application/json",
        responseSchema: schema,
      },
    });
    
    const jsonString = response.text;
    if (!jsonString) {
        throw new Error('API returned an empty response.');
    }
    
    const cleanedJsonString = jsonString.replace(/^```json\s*|```\s*$/g, '').trim();
    return JSON.parse(cleanedJsonString) as T;

  } catch (error) {
    console.error("Error calling Gemini API:", error);
    if (error instanceof Error) {
        throw new Error(`Gemini API call failed: ${error.message}`);
    }
    throw new Error('An unknown error occurred while calling the Gemini API.');
  }
}

async function generateImageFromNanoBanana(prompt: string): Promise<string | null> {
    const ai = new GoogleGenAI({ apiKey: process.env.API_KEY });
    try {
        const response = await ai.models.generateContent({
            model: 'gemini-2.5-flash-image',
            contents: { parts: [{ text: prompt }] },
            config: {
                responseModalities: [Modality.IMAGE],
            },
        });

        for (const part of response.candidates[0].content.parts) {
            if (part.inlineData) {
                return part.inlineData.data;
            }
        }
        return null;
    } catch (error) {
        console.error("Error generating image from Nano Banana:", error);
        return null;
    }
}


export const analyzeProspects = async (brief: StrategicBrief, isTurboMode: boolean): Promise<AnalysisResult> => {
  const prompt = `
    Act as a Quantitative Analyst and a master of psychographics. Your task is to perform a deep analysis of the provided context to create a hedge-fund-grade Ideal Customer Profile.

    **Context:**
    - Industry: ${brief.industry || 'Not provided'}
    - Company Website: ${brief.contextualUrl || 'Not provided'}
    - Competitor Website: ${brief.competitorUrl || 'Not provided'}
    - Golden Customer List:
    ${brief.prospectList}

    **Your Mandate:**
    1.  **Infer Demographics:** Use data synthesis to infer the likely age range, income level, and common geographic locations for these professionals.
    2.  **Deep Psychographics:** For 'motivations', go beyond surface-level desires. Provide a deep analysis of the underlying psychological drivers (e.g., Fear of Obsolescence, Aspiration for Status) and their direct purchasing implications.
    3.  **CRITICAL: Quantitative Modeling:** Replace any vague hypothesis with a rigorous, causal Quantitative Model.
        -   **Decision Score Formula:** You MUST provide a dimensionless decision score formula: \`Adoption Probability p = σ(β₀ + β·S)\`, where S is a composite score. Define S as: \`S = C · PV · Σᵢ (Wᵢ · Eᵢ · Rᵢ) − Cost\`.
        -   **Variable Definitions:** Provide "snap-in" definitions for every variable: Eᵢ (effect size), Rᵢ (reliability), Wᵢ (importance), PV (Proof Velocity), C (Credibility), and Cost.
        -   **Property Tests:** Define physics-style property tests for model integrity (Monotonicity, Bounds, Sanity, OOD).
        -   **Experiment Plan:** Outline a testable experiment (H1, Test, Metric, Success) to validate the model.
        -   **JSON Output:** Provide a sample JSON object for a lead based on this model, ready for a CRM.
    4.  **CRITICAL: Psycholinguistic Routing:** Convert the audience's emotional mix into an operational marketing system.
        -   **Routing Logic:** Explain the logic for mapping emotional drivers (Frustration, Anxiety, etc.) to marketing angles (Speed/Relief, Assurance/Safety, etc.).
        -   **Hero Variants:** You MUST provide four verbatim, drop-in hero variants. Each must include a compelling **headline** and a matching **ad hook**.
    5.  **CRITICAL: Data for Visualizations:** Generate structured data for the charts.
        -   For 'decisionDecomposition', provide an array of {label, value} objects.
        -   For 'angleUplift', provide an array of {segment, angle, uplift} objects.
    6.  **Generate Lookalikes:** Generate a list of 8-12 plausible lookalike prospects with rationales and search queries.
  `;
  return callGemini<AnalysisResult>(prompt, b2bAnalysisSchema, isTurboMode);
};

export const discoverAudiences = async (brief: StrategicBrief, isTurboMode: boolean): Promise<DiscoveredAudience[] | B2CDiscoveredAudience[]> => {
    const quantitativePrompt = `
        CRITICAL: Instead of a simple discovery hypothesis and correlational formula, you MUST generate a full, hedge-fund-grade Quantitative Model. This includes:
        1.  A causal 'DecisionScore' formula: p = σ(β₀ + β·S), where S = C·PV·Σ(W·E·R)−Cost.
        2.  "Snap-in" definitions for all variables (E, R, W, PV, C, Cost).
        3.  Physics-style property tests for model integrity.
        4.  A testable experiment plan.
        5.  A sample JSON object for a lead.
        
        CRITICAL: You must also generate structured data for the DataVisualizationSuite charts (decisionDecomposition and angleUplift).
    `;

    if (brief.analysisType === 'b2c') {
        const prompt = `
        Discover up to 5 distinct, high-potential B2C audience segments (consumer tribes) based on the following information.
        - Passions/Hobbies: ${brief.passionsAndHobbies}
        - Product Category: ${brief.productCategory || 'Not provided'}
        - Competitor Brands: ${brief.competitorBrands || 'Not provided'}
        For each discovered tribe, provide a detailed profile including demographics, psychographics, and buying triggers.
        ${quantitativePrompt}
        `;
        return callGemini<B2CDiscoveredAudience[]>(prompt, b2cDiscoverySchema, isTurboMode);
    }
    
    const prompt = `
    Discover up to 5 distinct, high-potential B2B audience segments based on the following information.
    - Target Industry: ${brief.industry || 'Not provided'}
    - User's Company Website (for context): ${brief.contextualUrl || 'Not provided'}
    - Competitor's Website: ${brief.competitorUrl || 'Not provided'}
    
    For each discovered audience, provide a detailed profile including demographics and psychographics.
    For 'motivations', provide a deep analysis detailing the core psychological driver and its purchasing implication.
    ${quantitativePrompt}
    `;
    return callGemini<DiscoveredAudience[]>(prompt, b2bDiscoverySchema, isTurboMode);
};

export const scoreProspects = async (prospectsToScore: string, analysisResult: AnalysisResult): Promise<ScoredProspect[]> => {
    const prompt = `
    Score the following raw list of prospects against the provided Ideal Customer Profile.
    Ideal Customer Profile Summary: ${analysisResult.sharedProfile.summary}
    Key Data Signals to look for: ${analysisResult.sharedProfile.psychographics.dataSignals.join(', ')}

    Raw Prospect List:
    ${prospectsToScore}

    For each prospect, provide a fit score from 0-100 and a brief rationale for your scoring.
    `;
    return callGemini<ScoredProspect[]>(prompt, scoredProspectsSchema, true); // Use turbo for speed
};

export const generateMonetizationStrategy = async (audience: DiscoveredAudience | B2CDiscoveredAudience, isTurboMode: boolean): Promise<MonetizationStrategy> => {
    const keyPoints = 'motivations' in audience.psychographics
        ? (audience as DiscoveredAudience).psychographics.motivations.map(m => `${m.driver}: ${m.purchasingImplication}`).join('; ')
        : (audience as B2CDiscoveredAudience).psychographics.definingInterests.join(', ');

    const prompt = `
    Generate a comprehensive monetization strategy for the following audience:
    - Audience Name: ${audience.audienceName}
    - Summary: ${audience.summary}
    - Quantitative Model Summary: ${audience.quantitativeModel.decisionScoreFormula}
    - Key Motivations & Purchasing Implications: ${keyPoints}

    Develop a core opportunity, several high-potential product/service ideas with detailed financial narratives and pricing, a go-to-market strategy, and a precise lead source protocol.
    `;
    return callGemini<MonetizationStrategy>(prompt, monetizationStrategySchema, isTurboMode);
};

export const generateHighLeveragePlaybook = async (strategy: MonetizationStrategy, hypothesis: string, type: 'b2b' | 'b2c', isTurboMode: boolean): Promise<HighLeveragePlaybook> => {
    const schema = type === 'b2b' ? b2bPlaybookSchema : b2cPlaybookSchema;
    
    const prompt = `
    Act as a master strategist, synthesizing the playbooks of Gabriel Weinberg (Traction), Russell Brunson (Dream 100), and Bob Serling (JVs). Your task is to generate a '24/7 Client Acquisition Engine'. Do NOT default to LinkedIn.

    **Context:**
    - Core Opportunity: ${strategy.coreOpportunity}
    - Market Hypothesis: ${hypothesis}
    - Target Audience Type: ${type.toUpperCase()}

    **Your Mandate:**
    1.  **Generate a High-Leverage Playbook:** Create a complete playbook including positioning, branding, a high-ticket irresistible offer (with a full Sales Pitch Asset), and marketing funnel.
    2.  **Architect the Client Acquisition Engine:** This is the most critical part.
        -   **Traction Channel Analysis:** Prioritize the top 3-5 channels from Weinberg's 19 that are most effective for THIS specific offer. Justify each choice.
        -   **Dream 100 Protocol:** Identify the specific associations, influencers, or companies that have already aggregated this audience.
        -   **Strategic Partnership Protocol:** For the Dream 100, craft an irresistible 'Engineering as Marketing' or value-add offer to gain access to their audience.
        -   **AI Agent Execution Protocol:** Detail the multi-agent protocol for researching the Dream 100, crafting partnership proposals, and managing outreach 24/7.

    End with a piece of 'Final Wisdom'.
    `;
    return callGemini<HighLeveragePlaybook>(prompt, schema, isTurboMode);
};

export const findStarvingCrowdOpportunity = async (brief: StrategicBrief, isTurboMode: boolean): Promise<OpportunityBrief> => {
    const prompt = `
    Act as a Quantitative Analyst and Venture Capitalist. Your goal is to find a monetizable "hair-on-fire" problem and architect a complete, hedge-fund-grade business model to solve it.

    **Context:**
    - Area of Interest / Known Problem: ${brief.areaOfInterest || 'Not provided'}
    - URL for Context (Forum, Competitor, etc.): ${brief.contextualUrl || 'Not provided'}
    - Target Demographic Hint: ${brief.targetDemographic || 'Not provided'}

    **Your Mandate:**
    1.  **Perform Gauntlet Analysis:** Rigorously test the opportunity against the "Gauntlet" criteria.
    2.  **Generate Opportunity Brief:** If viable, generate a complete Opportunity Brief, including the starving crowd, aspirin problem, AI-powered solution, fastest path to cash, JV protocol, and a full 'SalesPitchAsset'.
    3.  **CRITICAL: Quantitative Modeling:** You MUST generate a rigorous, causal Quantitative Model.
        -   **Decision Score Formula:** Provide a dimensionless decision score formula: \`p = σ(β₀ + β·S)\`, where S is a composite score defined as: \`S = C · PV · Σᵢ (Wᵢ · Eᵢ · Rᵢ) − Cost\`.
        -   **Variable Definitions:** Provide "snap-in" definitions for every variable: Eᵢ, Rᵢ, Wᵢ, PV, C, and Cost.
        -   **Property Tests:** Define physics-style property tests for model integrity.
        -   **Experiment Plan:** Outline a testable experiment (H1, Test, Metric, Success).
        -   **JSON Output:** Provide a sample JSON object for a lead.
    4.  **CRITICAL: Psycholinguistic Routing:** Convert the market's emotional mix into an operational system.
        -   **Routing Logic:** Explain the logic for mapping emotional drivers to marketing angles.
        -   **Hero Variants:** Provide four verbatim, drop-in hero variants. Each must include a compelling **headline** and a matching **ad hook**.
    5.  **CRITICAL: Data for Visualizations:** Generate structured data for the charts.
        -   For 'decisionDecomposition', provide an array of {label, value} objects.
        -   For 'angleUplift', provide an array of {segment, angle, uplift} objects.
    `;
    return callGemini<OpportunityBrief>(prompt, opportunityBriefSchema, isTurboMode);
};

export const generateCompetitiveDisplacementBrief = async (brief: StrategicBrief, isTurboMode: boolean): Promise<CompetitiveDisplacementBrief> => {
    const prompt = `
    Generate a Competitive Displacement Brief for the target competitor URL: ${brief.contextualUrl}.
    Analyze their market position, identify a strategic blind spot, and create an "AI-Powered Wedge" to exploit it.
    Develop a multi-channel outreach sequence (Email, RVM, Text) to attract their customers.
    
    CRITICAL: Instead of a simple discovery hypothesis and correlational formula, you MUST generate a full, hedge-fund-grade Quantitative Model. This includes:
    1.  A causal 'DecisionScore' formula: p = σ(β₀ + β·S), where S = C·PV·Σ(W·E·R)−Cost.
    2.  "Snap-in" definitions for all variables (E, R, W, PV, C, Cost).
    3.  Physics-style property tests for model integrity.
    4.  A testable experiment plan.
    5.  A sample JSON object for a lead.
    You must also generate a DataVisualizationSuite plan and a full MarketMindAnalysis with a psycholinguistic routing engine.
    `;
    return callGemini<CompetitiveDisplacementBrief>(prompt, competitiveDisplacementSchema, isTurboMode);
};

export const generateAlphaAcquisitionPlaybook = async (playbook: HighLeveragePlaybook, isTurboMode: boolean): Promise<AlphaAcquisitionPlaybook> => {
    const prompt = `
    Based on this high-leverage playbook, generate a detailed Alpha Acquisition Playbook.
    - Positioning: ${(playbook as B2BHighLeveragePlaybook | B2CHighLeveragePlaybook).positioningStatement}
    - Ideal Client: ${(playbook as B2BHighLeveragePlaybook | B2CHighLeveragePlaybook).idealClientProfile.join(', ')}
    - Offer: ${(playbook as B2BHighLeveragePlaybook | B2CHighLeveragePlaybook).irresistibleOffer.offerName}

    Develop a Channel Partnership Protocol with AI-powered search queries and an irresistible offer for partners.
    Also, create a Buying Trigger Protocol detailing specific events, where to find the signals, and the strategic approach for each.
    `;
    return callGemini<AlphaAcquisitionPlaybook>(prompt, alphaAcquisitionSchema, isTurboMode);
};

export const validateProspects = async (prospectsToValidate: LookalikeProspect[]): Promise<LookalikeProspect[]> => {
    const prompt = `
    Given the following list of potential business prospects, act as a validation expert. For each prospect, determine if they seem like a real, plausible person/company. 
    You do not need to access external websites. Base your judgment on the plausibility of the name, job title, and company combination.
    - If it seems plausible, set status to 'Validated'.
    - If it seems made-up or suspicious, set status to 'Needs Review'.
    Provide a brief rationale for your decision on each.

    Prospects to validate:
    ${prospectsToValidate.map(p => `- ${p.fullName}, ${p.jobTitle} at ${p.companyName}`).join('\n')}
    `;
    return callGemini<LookalikeProspect[]>(prompt, validatedProspectsSchema, false); // Use standard model for better reasoning
};

export const generateVideoDemoStrategy = async (brief: StrategicBrief, isTurboMode: boolean): Promise<VideoStrategy> => {
    const prompt = `
    Generate a complete video strategy to demonstrate the value of this service:
    - Service Description: ${brief.serviceDescription}
    Create a 30-second script with scene-by-scene visuals and voiceover.
    Provide a powerful, single text-to-video generation prompt to create the visuals.
    Outline a concise distribution strategy to use this video as a high-leverage marketing asset.
    `;
    return callGemini<VideoStrategy>(prompt, videoStrategySchema, isTurboMode);
};

export const generateVideoWedgeStrategy = async (brief: CompetitiveDisplacementBrief, isTurboMode: boolean): Promise<VideoStrategy> => {
    const prompt = `
    Based on this Competitive Displacement Brief, create a video wedge strategy.
    - Competitor's Blind Spot: ${brief.aiPoweredWedge.blindSpot}
    - Wedge Idea: ${brief.aiPoweredWedge.wedgeIdea}
    - Target Audience Psycholinguistics: ${brief.marketMindAnalysis.psycholinguisticRoutingEngine.routingLogic}
    
    Generate a 30-second video script (visuals & voiceover), a powerful text-to-video generation prompt, and a distribution strategy to deploy this video as a wedge against the competitor.
    `;
    return callGemini<VideoStrategy>(prompt, videoStrategySchema, isTurboMode);
};

export const generateVeoVideo = async ({ prompt, image, aspectRatio }: { prompt: string, image?: { imageBytes: string, mimeType: string }, aspectRatio: '16:9' | '9:16' }) => {
    const ai = new GoogleGenAI({ apiKey: process.env.API_KEY });
    return ai.models.generateVideos({
        model: 'veo-3.1-fast-generate-preview',
        prompt: prompt,
        image: image,
        config: {
            numberOfVideos: 1,
            resolution: '720p',
            aspectRatio: aspectRatio,
        }
    });
};

export const getVeoOperationStatus = async ({ operation }: { operation: any }) => {
    const ai = new GoogleGenAI({ apiKey: process.env.API_KEY });
    return ai.operations.getVideosOperation({ operation: operation });
};

export const generateAIVentureBlueprint = async (brief: StrategicBrief, isTurboMode: boolean): Promise<AIVentureBlueprint> => {
    const prompt = `
    Act as a "Data-First Architect" and full-stack AI strategist. Your task is to generate a complete AIVentureBlueprint for the provided business concept. Your primary mandate is to ensure the proposed tool is viable from a data perspective BEFORE architecting the full solution.

    **Business Concept:**
    ${brief.businessConcept}

    **Your Mandate (Execute in this order):**
    1.  **CRITICAL - Perform Data Feasibility Analysis:** Do NOT create a manual data gathering plan. First, analyze the tool's data requirements. Determine if the required data can be acquired programmatically and reliably (APIs, structured web data). Provide a 'Feasibility Score' (High, Medium, Low, Very Low), a detailed rationale, potential automated sources, and a clear 'Go/No-Go' recommendation. If data is not programmatically accessible (e.g., locked in PDFs across 1000s of different county websites), state this clearly, give a 'Very Low' score, and recommend a pivot to a tool that relies on user input or a more centralized data source.
    2.  **Validate the Core Opportunity:** (Only if Feasibility is High/Medium) Identify the starving crowd, aspirin problem, and core value proposition.
    3.  **Design the 'Results-in-Advance' Tool:** (Only if Feasibility is High/Medium) Name and describe the micro-tool.
    4.  **CRITICAL - Generate the Data Asset:** You MUST generate a realistic, specific, and plausible JSON data asset for the tool. This is not sample data; it is the core asset that makes the tool functional and impressive.
        -   **dataAssetFilename:** Give it a descriptive name (e.g., 'sports_predictions.json', 'real_estate_comps.json'). DO NOT use generic names like 'data.json' or 'mockData.json'.
        -   **dataAsset:** The JSON content must contain multiple entries and fields that are directly relevant to the tool's purpose. For a sports anomaly tool, this means real-looking game data and predictions. For a real estate tool, this means plausible property data. The goal is to make the tool look and feel real the moment the user opens it.
    5.  **Design the Lead Capture Mechanism:** Specify how the tool will capture user emails.
    6.  **Architect the AI Sales Agent:** Design a complete, intelligent sales agent (persona of Dan Kennedy/Frank Kern), including trigger logic, opening script, and a core knowledge base prompt.
    7.  **Engineer the Backend:** Provide the complete code for a secure Vercel Serverless Function (Node.js) to proxy API calls, and provide step-by-step deployment instructions.
    8.  **Define the Monetization Model:** Name and describe the full, paid solution.
    9.  **Create the Ultimate Prompt:** Create the detailed prompt for an AI to build the front-end of the micro-tool. This prompt MUST explicitly instruct the front-end code to fetch and use the local data asset you created (using its specific filename). It should also include logic for the embedded AI Sales Agent chat widget.
    `;
    return callGemini<AIVentureBlueprint>(prompt, aiVentureBlueprintSchema, isTurboMode);
};


export const generateAICode = async (ultimatePrompt: string, isTurboMode: boolean): Promise<AICode> => {
    const prompt = `
    Act as an elite full-stack developer. Your task is to write the complete, self-contained, single-file HTML code (with embedded CSS and JavaScript) for a functional web application based on the following detailed brief (The Ultimate Prompt).
    The application MUST be fully functional and self-contained in one file. Use TailwindCSS for styling via a CDN link.
    This includes building the front-end UI for the tool itself, the lead capture form, and the chat widget for the AI Sales Agent. The chat widget's JavaScript should be written to make a POST request to a relative endpoint (e.g., '/api/chat') which is where the user will deploy their secure serverless function. If the tool is meant to use local data (e.g., a data.json file), write the JavaScript to fetch and process that local file.

    **Ultimate Prompt:**
    ${ultimatePrompt}
    `;
    return callGemini<AICode>(prompt, aiCodeSchema, isTurboMode);
};

export const generateSalesCopilotResponse = async (brief: StrategicBrief, isTurboMode: boolean): Promise<SalesCopilotResponse> => {
    const prompt = `
    Act as an elite sales closer and psychologist, channeling the skills of Jordan Belfort and Chris Voss. The user is on a live sales call and needs help handling an objection.

    **Sales Context:**
    ${brief.salesContext}

    **Prospect's Objection/Question:**
    "${brief.prospectObjection}"

    Your task is to provide a powerful, psychologically-tuned response. Your output must include:
    1.  **Suggested Response:** The exact script the user should say.
    2.  **Psychological Tactic:** The name and a brief explanation of the persuasion principle being used (e.g., "Reframing", "Pattern Interrupt", "Future Pacing").
    `;
    return callGemini<SalesCopilotResponse>(prompt, salesCopilotSchema, isTurboMode);
};

export const generateSovereignEngineReport = async (brief: StrategicBrief, isTurboMode: boolean): Promise<SovereignEngineReport> => {
    const prompt = `
    Act as an "Intelligent Automation Architect." The user has provided a natural language description of a multi-step workflow. Your task is to interpret this workflow, execute the steps using your internal capabilities, and generate a consolidated report of all final assets.

    **Workflow Description:**
    ${brief.workflowDescription}

    **Initial Input Data:**
    ${brief.initialInput}

    **Your Output Must Include:**
    1.  A summary of the workflow you executed.
    2.  A step-by-step log of the actions you performed.
    3.  A final, consolidated output containing all the generated assets (e.g., reports, scripts, prompts) clearly labeled.
    `;
    return callGemini<SovereignEngineReport>(prompt, sovereignEngineSchema, isTurboMode);
};


export const deconstructB2CMarket = async (brief: StrategicBrief, isTurboMode: boolean): Promise<B2CMarketDeconstruction> => {
    const prompt = `
    Deconstruct the B2C market based on the provided seed information.
    - Seed Interest/Hobbies: ${brief.passionsAndHobbies}
    - Product Category: ${brief.productCategory}

    Identify influential brands, competitor brands, defining interests for this consumer tribe, and create several customer personas. Also, determine the key buying triggers and conduct a deep psycholinguistic analysis of the market, including a full psycholinguistic routing engine with hero variants and ad hooks.
    `;
    return callGemini<B2CMarketDeconstruction>(prompt, b2cDeconSchema, isTurboMode);
};

export const generateDominanceBlueprint = async (brief: StrategicBrief, isTurboMode: boolean): Promise<DominanceBlueprint> => {
    const competitorPrompt = brief.competitorUrl
        ? `
**CRITICAL SEO COUNTER-INTELLIGENCE:**
The user has provided a competitor's URL for analysis: ${brief.competitorUrl}.
Perform a deep, strategic SEO analysis of this competitor. Identify their key weaknesses (e.g., thin content, poor on-page SEO, lack of programmatic SEO, weak backlink profile, missed keyword clusters).
Based on these weaknesses, you MUST generate a set of specific, actionable counter-strategies within the 'competitorAnalysis' section of the 'aiPoweredSEOProtocol'. This is a non-negotiable part of the task. Your analysis must be ruthless and focused on exploitation.`
        : '';

    const prompt = `
    Act as a "God-Tier" business strategist and venture capital analyst, channeling the minds of Peter Thiel, Alex Hormozi, and marketing legends like Ron Popeil and Jordan Belfort. Your task is to generate a complete, investment-grade Dominance Blueprint for the following business concept.
    - Business Concept: ${brief.businessConcept}
    ${competitorPrompt}

    The blueprint must be an actionable plan for absolute market domination. It must include all standard sections, AND the following critical analyses:

    **1. Conceptual Image Prompt:** Generate a rich, descriptive prompt for an AI image generator to create a compelling conceptual image representing this business.

    **2. The 24/7 Client Acquisition Engine:**
       - **Traction Channel Analysis:** Prioritize the top 3-5 channels from Gabriel Weinberg's 'Traction' for THIS specific business.
       - **Dream 100 Protocol:** Identify the specific 'Dream 100' targets (associations, influencers) who have aggregated this audience.
       - **Strategic Partnership Protocol:** Craft a high-value 'Engineering as Marketing' offer to gain access to the Dream 100's lists.
       - **AI Agent Execution Protocol:** Detail the multi-agent protocol to execute this 24/7.
    
    **3. Sales Pitch Asset:** For the Consulting Angle, generate a complete SalesPitchAsset (Persona, Script, Video Prompt).

    **4. CRITICAL ANALYSIS: Proprietary AI & Valuation Impact**
    You MUST include two new, deeply analytical sections: "Proprietary AI & Human Intelligence Symbiosis" and "The Valuation Multiplier".

    **For "Proprietary AI & Human Intelligence Symbiosis":**
    - Architect a plan for an "AI Advancement Core" - a small, elite R&D "skunkworks" team. Detail their mission to build proprietary AI tools that give the company's human "SWAT teams" an insurmountable competitive advantage and create indefensible moats.
    - Provide concrete examples of 'Weaponized Methodologies'. For 1-2 specific business verticals (e.g., Salesforce, AWS, or one relevant to the business concept), design proprietary diagnostic tools (e.g., "ChimeraAWS Auditor"). Describe how each tool works and its impact.
    - Design a "Talent Academy Transformation" plan. Describe how to use AI Tutors & Simulators and AI-Powered Vetting to forge elite operators.
    - Outline the creation of new, high-margin "AI-Only Products" based on the proprietary data gathered from client engagements. Provide a specific product example (e.g., "ChimeraIntel CIO Report").

    **For "The Valuation Multiplier":**
    - Explain how building proprietary AI triggers a "Multiple Expansion Event," transforming the business from a services company valuation to a high-multiple SaaS valuation.
    - Provide a "Multiple Stack" analysis. Start with a base multiple for standard professional services. Then, add specific, quantified premium multiples for strategic layers like 'Talent Pipeline', 'Platform', and, most importantly, 'Proprietary AI & Data'. Justify each premium.
    - Conclude with a final, calculated multiple range (e.g., "12.0x - 18.0x EBITDA").
    - Provide a sample valuation calculation to quantify the financial impact (e.g., "$7.7M profit * 15x = $115.5M"). This is non-negotiable.

    Ensure all other standard sections (Executive Summary, Asymmetric Strategy, First 100 Customers, SEO Protocol, Unfair Advantage Sales Protocol, etc.) are also generated with world-class rigor. If the business has a physical component, include a "Phy-gital Synergy Protocol".
    `;
    const blueprint = await callGemini<DominanceBlueprint>(prompt, dominanceBlueprintSchema, isTurboMode);

    if (blueprint.conceptualImagePrompt) {
        try {
            const imageBase64 = await generateImageFromNanoBanana(blueprint.conceptualImagePrompt);
            if (imageBase64) {
                blueprint.conceptualImageUrl = `data:image/png;base64,${imageBase64}`;
            }
        } catch (imgError) {
            console.error("Error generating conceptual image for Dominance Blueprint:", imgError);
            // Non-fatal error, we can continue without the image.
        }
    }

    return blueprint;
};

export const generatePhygitalDemoVideoStrategy = async (blueprint: DominanceBlueprint, isTurboMode: boolean): Promise<PhyGitalVideoStrategy> => {
    const prompt = `
    Act as a legendary direct-response infomercial director in the style of Billy Mays or Ron Popeil. 
    Your task is to create a high-energy, compelling 30-60 second video strategy to demonstrate the following "phy-gital" service.

    **Service Context from Dominance Blueprint:**
    - Business: ${blueprint.executiveSummary}
    - Core Strategy: ${blueprint.asymmetricDominationStrategy.coreStrategy}
    - Target Customer Pain: ${blueprint.unfairAdvantageSalesProtocol.bleedingNeckQualification.rationale}

    **Your Output Must Include:**
    1.  A catchy video title.
    2.  The target audience.
    3.  The single, powerful core message.
    4.  A scene-by-scene script with visuals, a high-energy voiceover, and estimated duration for each scene.
    5.  A detailed prompt for a text-to-video AI to generate the visuals, describing an AI actor demonstrating the tool.
    6.  A plan for distributing the video for maximum impact.
    `;
    return callGemini<PhyGitalVideoStrategy>(prompt, phyGitalVideoStrategySchema, isTurboMode);
};

export const generateLandingPageBlueprint = async (prompt: string, isTurboMode: boolean): Promise<LandingPageBlueprint> => {
    const fullPrompt = `${prompt} Ensure the hero section is particularly compelling, with a powerful headline, a clear value proposition, and a strong, benefit-oriented call to action.`;
    return callGemini<LandingPageBlueprint>(fullPrompt, landingPageBlueprintSchema, isTurboMode);
};

export const generateLandingPageCode = async (blueprint: LandingPageBlueprint, isTurboMode: boolean): Promise<AICode> => {
    const prompt = `
    Act as an elite UI/UX designer and front-end developer. Your task is to write the complete, self-contained, single-file HTML code for a high-converting landing page based on the following blueprint.
    - Use TailwindCSS for styling via a CDN link.
    - The design should be modern, clean, and professional, suitable for a tech product.
    - Ensure it is fully responsive.
    - The output must be only the HTML code, starting with <!DOCTYPE html>.

    **Landing Page Blueprint:**
    ${JSON.stringify(blueprint, null, 2)}
    `;
    return callGemini<AICode>(prompt, aiCodeSchema, isTurboMode);
};

export const generateImageFoundry = async (brief: StrategicBrief, isTurboMode: boolean): Promise<ImageFoundryResult> => {
    if (!brief.prompt) {
        throw new Error("Prompt is required for Image Foundry.");
    }
    const imageBase64 = await generateImageFromNanoBanana(brief.prompt);
    if (imageBase64) {
        return { images: [`data:image/png;base64,${imageBase64}`] };
    }
    return { images: [] };
};

export const generateAIVideoFoundryReport = async (script: string, isTurboMode: boolean): Promise<AIVideoFoundryReport> => {
    const prompt = `
    Act as a "full-stack video SaaS architect," a combination of a master video director and a CTO. Your task is to take a sales script and generate a complete blueprint for creating the video AND building a SaaS tool like InVideo to produce it.

    **Video Script:**
    "${script}"

    **Your Mandate:**
    1.  **Create the Director's Cut:** Break the script into logical scenes. For each scene, provide detailed visual prompts (for stock footage or generative AI), the voiceover text, music cues, and any text overlays.
    2.  **Architect the Technical Implementation:** This is critical. Design the engineering plan for a browser-based video assembly tool. Recommend a core technology stack (e.g., FFmpeg.wasm for client-side video processing). Provide a step-by-step architecture for the front-end application that would allow a user to assemble the scenes and assets you've defined into a final video file.
    3.  **Design the SaaS Monetization Model:** Create a complete business plan for selling this new video tool, including pricing tiers and a go-to-market strategy.
    `;
    return callGemini<AIVideoFoundryReport>(prompt, aiVideoFoundrySchema, isTurboMode);
};


export const generateAlphaSignalReport = async (brief: StrategicBrief, isTurboMode: boolean): Promise<AlphaSignalReport> => {
    const prompt = `
    Act as a "Quantitative Dealmaker" AI. Your goal is to achieve a specific financial objective within a given timeframe by identifying high-probability 'revenue plays'.

    **Objective:**
    - Revenue Target: ${brief.revenueTarget}
    - Timeframe: ${brief.timeframe}
    - Area of Interest / Market to Exploit: ${brief.areaOfInterest}

    Generate an Alpha Signal Report containing 3-5 distinct, actionable revenue plays. For each play, provide:
    - A probability of success score with rationale.
    - The potential revenue.
    - Required assets.
    - The psychological edge to be exploited.
    - Step-by-step execution plan.
    - An AI Agent Protocol for automation.
    `;
    return callGemini<AlphaSignalReport>(prompt, alphaSignalReportSchema, isTurboMode);
};

export const generateChimericAgentReport = async (brief: StrategicBrief, isTurboMode: boolean): Promise<ChimericAgentReport> => {
    const prompt = `
    Act as a "Chimeric Agent" - an AI that performs a total synthesis of a high-value subject to generate hyper-personalized, high-stakes strategic solutions they could uniquely execute.

    **Subject Profile:**
    ${brief.subjectProfile}

    Based on the subject's known assets, network, skills, and goals, perform a deep synthesis. Then, generate a portfolio of 2-3 ambitious, high-stakes solutions. For each solution, define the problem domain, the AI leverage point, the monetization model, and a "first touch" protocol (a wedge) to enter the market.
    `;
    return callGemini<ChimericAgentReport>(prompt, chimericAgentReportSchema, isTurboMode);
};

export const generateLoneWolfReport = async (isTurboMode: boolean): Promise<LoneWolfReport> => {
    const prompt = `
    Act as a master strategist for solo operators. Your task is to generate a Lone Wolf Report containing 3-5 high-leverage, instant-monetization business plays.

    **Constraints for each play:**
    - Must be executable by a single person (a "lone wolf").
    - Must have a very short "time to first cash" (under 30 days).
    - Must require minimal upfront capital.
    - Must include a clever "gatekeeper bypass" tactic to avoid traditional friction points.

    For each play, provide the income potential, time to cash, required assets, the bypass tactic, execution steps, and an AI Agent Protocol.
    `;
    return callGemini<LoneWolfReport>(prompt, loneWolfReportSchema, isTurboMode);
};

export const generateSovereignAgents = async (play: any, sourceReportType: string, isTurboMode: boolean): Promise<SovereignAgent[]> => {
    const prompt = `
    Act as a "Sovereign Protocol" orchestrator. Your task is to instantiate a team of autonomous AI agents to execute the following strategic play. Think in sequences and define dependencies where logical.

    **Strategic Play Context:**
    - Source Report: ${sourceReportType}
    - Play/Solution Details: ${JSON.stringify(play, null, 2)}

    Based on the play's execution steps and AI Agent Protocol, define a team of 2-4 specialized agents (e.g., "Market Research Agent", "Outreach Copy Agent", "Deal Structuring Agent"). 
    For each agent:
    - Define their specific \`agentType\`.
    - Write their \`overallBrief\` (their core function).
    - Create an initial list of 1-3 specific \`tasks\` with clear briefs for them to execute, derived directly from the play's execution steps. Define task dependencies using the 'dependsOn' field where one task must follow another.
    - The initial task status should be 'Pending'.
    - Crucially, design the agents to be proactive. After completing a task, they should provide an \`insight\` (an educational briefing for the user) and a \`suggestedNextTask\`. They can also recommend \`integrations\` (like Make.com) or design \`microToolBlueprints\` to create custom tools.
    `;
    return callGemini<SovereignAgent[]>(prompt, sovereignWorkforceSchema, isTurboMode);
};

export const generateMarketMap = async (context: any, sourceReportType: string, isTurboMode: boolean): Promise<MarketMap> => {
    const prompt = `
    Act as a Market Intelligence Cartographer AI. Your task is to expand the provided strategic analysis into a full Market Map.

    **Source Analysis Context:**
    - Report Type: ${sourceReportType}
    - Report Data: ${JSON.stringify(context, null, 2)}

    Based on this context, generate a comprehensive market map that includes:
    1.  An executive summary of the market landscape.
    2.  A list of Key Players (Leaders, Challengers, Niche Specialists).
    3.  An analysis of key Audience Segments.
    4.  A list of actionable Whitespace Opportunities.
    `;
    return callGemini<MarketMap>(prompt, marketMapSchema, isTurboMode);
};

export const generatePlaybookDirectly = async (brief: StrategicBrief, isTurboMode: boolean): Promise<HighLeveragePlaybook> => {
    const prompt = `
    Generate a "Billionaire Playbook" for the following B2B market hypothesis.
    - Core Market Hypothesis: ${brief.discoveryHypothesis}

    Create a high-leverage B2B playbook including positioning, branding, a high-ticket irresistible offer, a marketing funnel, and a specific Search & Acquisition Protocol. End with a piece of "Final Wisdom".
    `;
    return callGemini<B2BHighLeveragePlaybook>(prompt, b2bPlaybookSchema, isTurboMode);
};

export const generateGatekeeperBypassReport = async (brief: StrategicBrief, isTurboMode: boolean): Promise<GatekeeperBypassReport> => {
    const prompt = `
    Act as a master strategist specializing in bypassing traditional gatekeepers (like business brokers) to reach business opportunity seekers directly.

    **Business Opportunity to Promote:**
    - ${brief.opportunityDescription}

    Generate a complete Gatekeeper Bypass Protocol including:
    1.  A deconstruction of the target audience (biz-opp seekers).
    2.  A "Honeypot Strategy" to attract them directly with a high-value free asset.
    3.  A "Profit-Split JV Protocol" to partner with others who have the audience's trust.
    4.  A roadmap for productizing the audience's interest.
    `;
    return callGemini<GatekeeperBypassReport>(prompt, gatekeeperBypassReportSchema, isTurboMode);
};

export const generateCashflowProtocolReport = async (brief: StrategicBrief, isTurboMode: boolean): Promise<CashflowProtocolReport> => {
    const prompt = `
    Act as a demanding, world-class business coach and master dealmaker, channeling the intensity of a top-tier hedge fund manager. Your persona is direct, analytical, and focused solely on generating massive cash flow within 48-72 hours by solving a "bleeding neck" problem with a high-ticket "aspirin" offer.
    
    **Client's Core Skill:** ${brief.coreSkill}

    Your task is to generate the "48-Hour Cashflow Protocol". This is a coaching document for a neophyte entrepreneur that provides a non-negotiable, step-by-step plan to generate a mid-5-figure income immediately.

    **Use the following elite-level examples as your mental models for constructing the offer and go-to-market strategy:**

    ---
    **PRIME EXAMPLE 1: The AI Hedge Fund "Alternative Data" Engine**

    *   **Niche:** Long/Short Equity Hedge Funds ($500M+ AUM).
    *   **The Multi-Million Dollar "Bleeding Neck" Problem:** All funds see the same Bloomberg data. The only way to win is with a unique information edge ("alpha"). Sourcing and analyzing "alternative data" is the holy grail, but it's a monumental data science challenge. A correct, non-consensus call on a single stock is worth tens of millions.
    *   **The High-Ticket "Aspirin" Offer:** "The Bespoke Alpha Engine" - Price: $100,000 Setup + $25,000/month.
        *   **AI Signal Intelligence:** Build a custom data pipeline to track real-world signals relevant to target stocks (satellite imagery, cargo ship movements, forum sentiment, corporate jet movements).
        *   **"Inflection Point" Detection:** The AI is trained to ignore noise and detect changes in the rate of change, predicting outcomes weeks before Wall Street.
        *   **"Thesis Confirmation" Dashboard:** A simple daily dashboard confirming or denying the fund's investment thesis with hard data.
    *   **The "Fire" Go-to-Market Strategy (Results-in-Advance):**
        1.  **Prove, Don't Pitch:** Pick a single, publicly traded company.
        2.  **Gather Proof:** Manually gather one alternative data set for 30 days (e.g., track customer sentiment on a relevant subreddit).
        3.  **Create the Hook:** Craft a single, powerful chart showing a correlation between your data and the stock's performance.
        4.  **Execute the Kill Shot Email:** Email a portfolio manager at a fund known for investing in that sector.
            *   **Subject:** A different look at [Stock Ticker].
            *   **Body:** "Hi [Name], I've been tracking sentiment on the official subreddit for [Company] as a proxy for customer loyalty. My analysis shows a significant drop in positive sentiment over the past 30 days which may precede a dip in same-store sales. Here's the chart. I build custom AI engines that track dozens of these non-financial signals in real-time. This is the kind of alpha we generate. Worth a conversation?"
    ---
    **PRIME EXAMPLE 2: The AI Invention & Patent Moat Generator**
    
    *   **Niche:** Corporate R&D Departments & Prolific Independent Inventors.
    *   **The Multi-Million Dollar Problem:** Creating a single truly novel invention is hard. Creating a "patent moat" or "picket fence"—a web of defensive patents around the core invention to block competitors—is even harder and requires immense strategic foresight. Competitors can often "invent around" a single patent, destroying the invention's commercial value.
    *   **The High-Ticket AI Offer:** "The 'Patent Moat' Generation Suite" - Price: $40,000 per project.
        *   **Conceptual Expansion AI:** An inventor provides their core invention. The AI then brainstorms hundreds of logical variations, alternative applications, and potential workarounds a competitor might use.
        *   **AI Generative Design:** For each promising workaround, the AI generates a novel engineering solution or design, effectively inventing a new, patentable concept that blocks that competitive pathway.
        *   **"Claim Construction" Assistant:** The AI drafts dozens of potential patent claims for these new concepts, written in the specific language used by patent offices. It identifies which claims are novel and which are likely to be rejected based on existing prior art.
        *   The result is a package of 5-10 pre-vetted, interconnected inventions, ready to be filed by a patent attorney, creating a powerful defensive wall.
    *   **How to Get Your First Customer Today ("Fire" Strategy):**
        *   Use the public USPTO database to find a mid-sized company that just received a single, important-looking patent.
        *   This means their invention is now public, and their competitors are already working to invent around it. The clock is ticking for them to build a moat.
        *   Manually brainstorm two obvious workarounds to their patent.
        *   Email the Chief Technology Officer (CTO) or the inventor listed on the patent. **Subject:** Defending your new patent for [Invention Name].
        *   **Email Body:** "Hi [Name], congratulations on the issuance of patent [Number]. Now that it's public, your competitors are undoubtedly trying to find ways around it, like [Workaround 1] or [Workaround 2]. My firm uses a generative AI to predict these workarounds and preemptively create a 'patent moat' of defensive inventions. We can generate a portfolio of 5-10 blocking patents in a matter of weeks. Is protecting your core invention worth a conversation?"
    ---

    **Now, applying that level of strategic thinking to the client's core skill, your protocol MUST include:**

    1.  **Mindset Calibration:** A core principle to adopt for high-stakes deal-making.
    2.  **High-Ticket Offer:** A complete offer stack based on their core skill, priced at a mid-5-figure level or higher. Define the "bleeding neck" problem it solves for a high-value niche.
    3.  **Prospecting Directive:** The exact profile of a client who is in pain NOW and the "kill list" query to find them.
    4.  **Closing Script:** A concise, powerful script based on Jordan Belfort's Straight Line system.
    5.  **48-Hour Battle Plan:** An hour-by-hour action plan.
    6.  **AI Agent Protocol:** How to use AI agents to accelerate the process.
    `;
    return callGemini<CashflowProtocolReport>(prompt, cashflowProtocolReportSchema, isTurboMode);
};

export const generateRealEstateAlphaReport = async (brief: StrategicBrief, isTurboMode: boolean): Promise<RealEstateAlphaReport> => {
    const conceptPrompt = brief.businessConcept 
        ? `**Core Business Concept to Architect:**\n${brief.businessConcept}`
        : `**Core Mandate:** Architect a platform for the niche: **${brief.realEstateNiche}**.`;
    
    let strategicLensPrompt = `Apply the most appropriate strategic business framework to this concept. Consider models like "The 48 Laws of Power" for competitive dynamics, "The Hero's Journey" for marketing narrative, or "Buy Then Build" for acquisition strategy. Justify your choice.`;
    if (brief.strategicLens && brief.strategicLens !== 'autoSelect') {
        const lensText = brief.strategicLens === 'custom' 
            ? brief.customStrategicLens 
            : brief.strategicLens;
        strategicLensPrompt = `Apply the following strategic lens to the business concept: **${lensText}**.`;
    }

    const uploadedDataPrompt = brief.uploadedData
        ? `**Proprietary User Data Provided:** The user has uploaded the following data. Analyze it, provide a summary and key insights in the 'uploadedDataAnalysis' section, and use these insights to enhance the rest of your strategic blueprint.\n\n---\n${brief.uploadedData}\n---\n`
        : '';

    const prompt = `
    Act as a "Hedge Fund Manager specializing in Real Estate Alternative Data." Your task is to generate an institutional-grade, multi-stage blueprint for the "AI Rainmaker" engine, a market-dominating real estate platform. You must think unconventionally and focus on finding "alpha" in non-public or obscure data sources. "Money is in secrets."

    ${conceptPrompt}
    ${strategicLensPrompt}
    ${uploadedDataPrompt}

    **Your blueprint must be a masterclass in analytical rigor and operational execution. It must include:**

    1.  **Esoteric Alpha Generation:** This is CRITICAL. Do not give generic advice. Synthesize actionable strategies from obscure, non-obvious sources. Your analysis should reflect deep, expert-level knowledge. Examples:
        -   The implicit, unstated tactics of master investors like Manny Khoshbin (e.g., analyzing tenant quality beyond financials) or Cherif Medawar.
        -   Finding arbitrage opportunities in city hall zoning meeting minutes or public notices from sites like publicnotices.com.
        -   Analyzing court records for patterns in probate or partition action cases.
        -   Derive actionable "secrets" from these sources.

    2.  **CRITICAL: Quantitative Modeling:** You MUST generate a rigorous, causal Quantitative Model.
        -   **Decision Score Formula:** Provide a dimensionless decision score formula: \`p = σ(β₀ + β·S)\`, where S is a composite score defined as: \`S = C · PV · Σᵢ (Wᵢ · Eᵢ · Rᵢ) − Cost\`.
        -   **Variable Definitions:** Provide "snap-in" definitions for every variable: Eᵢ, Rᵢ, Wᵢ, PV, C, and Cost.
        -   **Property Tests:** Define physics-style property tests for model integrity.
        -   **Experiment Plan:** Outline a testable experiment (H1, Test, Metric, Success).
        -   **JSON Output:** Provide a sample JSON object for a lead.

    3.  **The 'Invincible Company' Framework:** Define an 'Exploit' and 'Explore' portfolio based on Alex Osterwalder's model.

    4.  **The Three-Stage AI Deal Flow Engine (The AI Rainmaker):**
        -   Detail all three stages: Harvester, Validator, and Dossier.
        -   The 'Leverage Scoring Algorithm' MUST be detailed with a mathematical formula and quantified factors.
    
    5.  **The Investor Playbook:** A step-by-step playbook for subscribers.

    6.  **Data Visualization Suite:** Generate structured data for charts and a Sample Property Dossier, including a detailed 'imageGenerationPrompt'.
    
    7.  **CRITICAL ANALYSIS: Proprietary AI & Valuation Impact**
    You MUST include two new, deeply analytical sections: "Proprietary AI & Human Intelligence Symbiosis" and "The Valuation Multiplier".

    **For "Proprietary AI & Human Intelligence Symbiosis":**
    - Architect a plan for an "AI Advancement Core" - a small, elite R&D "skunkworks" team. Detail their mission to build proprietary AI tools that give the company's human "SWAT teams" an insurmountable competitive advantage and create indefensible moats.
    - Provide concrete examples of 'Weaponized Methodologies'. For 1-2 specific business verticals (e.g., Salesforce, AWS, or one relevant to the business concept), design proprietary diagnostic tools (e.g., "ChimeraAWS Auditor"). Describe how each tool works and its impact.
    - Design a "Talent Academy Transformation" plan. Describe how to use AI Tutors & Simulators and AI-Powered Vetting to forge elite operators.
    - Outline the creation of new, high-margin "AI-Only Products" based on the proprietary data gathered from client engagements. Provide a specific product example (e.g., "ChimeraIntel CIO Report").

    **For "The Valuation Multiplier":**
    - Explain how building proprietary AI triggers a "Multiple Expansion Event," transforming the business from a services company valuation to a high-multiple SaaS valuation.
    - Provide a "Multiple Stack" analysis. Start with a base multiple for standard professional services. Then, add specific, quantified premium multiples for strategic layers like 'Talent Pipeline', 'Platform', and, most importantly, 'Proprietary AI & Data'. Justify each premium.
    - Conclude with a final, calculated multiple range (e.g., "12.0x - 18.0x EBITDA").
    - Provide a sample valuation calculation to quantify the financial impact (e.g., "$7.7M profit * 15x = $115.5M"). This is non-negotiable.

    9.  **CRITICAL - The AI Agent Protocol (Operational Verification):**
        Define a specific, deployable team of agents for the "AI Rainmaker" (e.g., 'Data Harvester Agent', 'Due Diligence Agent'). For each agent, provide their mission brief and first tasks. This protocol will be used to immediately instantiate the AI agents.
    
    `;
    const report = await callGemini<RealEstateAlphaReport>(prompt, realEstateAlphaReportSchema, isTurboMode);

    const imagePrompt = report.dataVisualizationSuite.samplePropertyDossier.imageGenerationPrompt;
    if (imagePrompt) {
        try {
            const imageBase64 = await generateImageFromNanoBanana(imagePrompt);
            if (imageBase64) {
                report.dataVisualizationSuite.samplePropertyDossier.imageUrl = `data:image/png;base64,${imageBase64}`;
            }
        } catch (imgError) {
            console.error("Error generating property dossier image for Real Estate Alpha Report:", imgError);
            // Non-fatal error, we can continue without the image.
        }
    }
    
    return report;
};

export const generateArchimedesProtocolReport = async (isTurboMode: boolean): Promise<ArchimedesProtocolReport> => {
    const prompt = `
    Act as a master strategist and systems architect, synthesizing the wisdom of the greatest implementers in history (e.g., Napoleon's logistics, Ford's assembly line, Silicon Valley's agile development). Your task is to generate the "Archimedes Protocol" – a foolproof, multi-phase master gamelan for an operator to build an "Empire of Leverage" using AI.

    **Your Mandate:**
    Generate a complete, five-phase operational plan. This is not just a strategy; it's an executable operating system that bridges the gap between AI strategy and real-world execution.

    1.  **Phase 1: The Mandate (Mindset):** Define the core principle and affirmation for an operator executing this protocol. This is the psychological foundation.
    2.  **Phase 2: The Sovereign Foundry (Asset Generation):** Describe the automated workflow for turning a single "Spark of Insight" into a complete, deployable "Venture-in-a-Box" (Blueprint, Sales Protocol, Micro-Tool, etc.).
    3.  **Phase 3: The Agent C-Suite (Execution & Verification):** This is the most critical part. Define a pre-configured AI Agent Protocol for a "C-Suite" of AI agents (e.g., Chief Marketing Agent, Chief Technology Agent, Chief Revenue Agent). Provide a detailed protocol and rationale for their deployment. This protocol MUST be directly actionable.
    4.  **Phase 4: The Operator's Cockpit (The Human's 10%):** Clearly define the user's high-leverage role in this 90% automated system. What are the few critical decisions and actions only a human can perform?
    5.  **Phase 5: The Sovereign Arsenal (Tooling & Integration):** This is the final, crucial layer. Act as a master of operational leverage. For each core capability, you MUST provide a complete, deployable engineering and integration manual. This includes:
        -   **Tooling Stack Analysis:** Three options: 'Best-in-Class', a 'Cost-Effective Alternative', and a 'Free/Open-Source' option. Justify each choice.
        -   **Vercel Serverless Function:** The complete, copy-pasteable Node.js code for a Vercel Serverless Function that provides this capability.
        -   **Required Environment Variables:** A clear list of the API keys needed (e.g., \`TWILIO_ACCOUNT_SID\`).
        -   **AI Agent API Protocol:** The precise JSON payload an AI agent must construct to use the new serverless function.
        
        **CRITICAL DETAIL FOR EACH PROTOCOL:**
        - For the **Communications Protocol**, focus on Twilio for SMS/Voice and Postmark/SendGrid for email.
        - For the **Vision Protocol**, design a serverless function that takes an image URL or a text prompt and returns an AI-powered analysis or a generated image. The function should use the Gemini API (e.g., 'gemini-pro-vision' for analysis or 'gemini-2.5-flash-image' for generation). Detail the API call structure. The required environment variables will just be the API key. The agent API call protocol should be a JSON object specifying the \`imageUrl\` or \`prompt\` and the desired \`task\` ('analyze' or 'generate').
        - For the **Data Acquisition Protocol**, recommend industrial-grade services like Bright Data, but also provide a cost-effective alternative using a library like Puppeteer running on a serverless function, and explain the trade-offs (reliability, IP rotation).
        - For the **Voice Intelligence Protocol**, architect a system using Twilio to receive calls. Generate the TwiML script for call handling and the serverless function logic to process real-time audio transcription, send it to Gemini for a response, and return a spoken answer.

        -   Additionally, include a final, high-value section called **"Unconventional Tools & Free APIs."** Uncover 3-5 powerful, free, and often overlooked APIs or open-source tools that can be leveraged for immediate commercial advantage. For each, describe its high-leverage use case, and how an AI agent would interact with it. Leave nothing to chance. This entire section must be deeply practical and instantly actionable.
    `;
    return callGemini<ArchimedesProtocolReport>(prompt, archimedesProtocolReportSchema, isTurboMode);
};

export const generateFirstStrikeReport = async (context: any, isTurboMode: boolean): Promise<FirstStrikeReport> => {
    const prompt = `
    Act as a "Master Intelligence Analyst" and "AI Skip Tracer." Your sole mission is to bridge the gap from god-tier strategy to immediate, lethal execution by identifying the first 3-5 perfect, real-world targets.

    **Strategic Context (The Battle Plan):**
    ${JSON.stringify(context, null, 2)}

    **Your Mandate:**
    1.  **Synthesize the Context:** Deeply analyze the provided strategic blueprint. Understand the core value proposition, the ideal client profile, the "bleeding neck" problem, and the "esoteric alpha."
    2.  **Hedge Fund Grade Data Correlation:** Do not just look for job titles. Think like a quant. Use the data available in public records and online sources as a mental model (e.g., data points found in services like PropertyRadar: notice of default, property characteristics, owner-occupied status, LLC ownership, etc.). Correlate these disparate data points to create hyper-specific, high-value target archetypes. The money is in the non-obvious correlations.
    3.  **God-Tier Dorking:** For each archetype, generate 2-3 hyper-creative, complex Google Dork queries. These are not simple searches. They are surgical tools designed to find the specific individuals or companies that match your correlated data profile.
    4.  **Bespoke "First Contact" Angle:** For each archetype, craft a unique, psychologically-tuned outreach angle. This is the most important step. It must be specific, demonstrate you've done your homework, and be irresistible to someone fitting that exact profile.

    The output should be a "First Strike" protocol—a mission-ready "kill list" of archetypes and the precise instructions to find and engage them.
    `;
    return callGemini<FirstStrikeReport>(prompt, firstStrikeReportSchema, isTurboMode);
};
