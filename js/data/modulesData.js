/**
 * Modules Data Architecture
 * 
 * Official Data Science Subject Course Handout (CHO) & Study Materials
 * Mohan Babu University (MBU)
 * 
 * Total Periods: 45 Periods
 * 
 * Module 1 — Introduction (9 periods)
 * Module 2 — Data Extraction (9 periods)
 * Module 3 — Data Visualization (8 periods)
 * Module 4 — Statistical Thinking (11 periods)
 * Module 5 — Time Series Analysis and Predictive Modeling (8 periods)
 * 
 * Study Materials:
 * - Module 1 -> Module1INTRODUCTIONDS (1).pdf (PDF Document)
 * - Module 2 -> MODULE2DS.pdf (PDF Document)
 * - Module 3 -> Module_3_Data_Visualization_Detailed_Notes.pdf (PDF Document)
 * - Module 4 -> Module_4_Statistical_Thinking_Detailed_Notes.pdf (PDF Document)
 * - Module 5 -> Module_5_Time_Series_and_Predictive_Modeling_Detailed_Notes.pdf (PDF Document)
 * - Official Reference: Data_Science_CHO_Syllabus.docx
 */

export const courseSummary = {
  subjectName: "DATA SCIENCE",
  courseCode: "22DS102006",
  totalModules: 5,
  totalPeriods: 45,
  academicUnit: "Department of Data Science • Mohan Babu University (MBU)",
  choReferenceDoc: "Data_Science_CHO_Syllabus.docx",
  choReferencePath: "public/study-materials/Data_Science_CHO_Syllabus.docx",
  choPdfPath: "public/study-materials/Data_Science_CHO_Syllabus.pdf",
  description: "Official course curriculum and structured study materials for the Data Science Subject (45 Lecture Periods) spanning Foundations, Data Extraction, Graphical Analytics, Statistical Thinking, and Time Series Predictive Modeling."
};

export const modulesData = [
  {
    id: "module-1",
    numericId: 1,
    moduleNumber: 1,
    title: "Module 1 — Introduction",
    shortTitle: "Introduction",
    periods: 9,
    periodsDisplay: "9 periods",
    choSyllabus: "Definition of data science, Skills for data science, Tools for data science, Data types, Data collections, Data preprocessing, Data analysis and data analytics, Descriptive analysis, Diagnostic analytics, Predictive analytics, Prescriptive analytics, Exploratory analysis, Mechanistic analysis..",
    syllabusTopics: [
      "Definition of data science",
      "Skills for data science",
      "Tools for data science",
      "Data types",
      "Data collections",
      "Data preprocessing",
      "Data analysis and data analytics",
      "Descriptive analysis",
      "Diagnostic analytics",
      "Predictive analytics",
      "Prescriptive analytics",
      "Exploratory analysis",
      "Mechanistic analysis"
    ],
    studyMaterial: {
      fileName: "Module1INTRODUCTIONDS (1).pdf",
      format: "pdf",
      fileType: "PDF Document (.pdf)",
      filePath: "public/study-materials/Module1INTRODUCTIONDS (1).pdf",
      fileSize: "856 KB",
      title: "Module 1 Introduction to Data Science Detailed Notes",
      description: "Official comprehensive lecture notes covering definitions, 3Vs of big data, core skill matrices, analytical taxonomy (descriptive through mechanistic), and preprocessing pipelines.",
      keyTopicsCovered: [
        "Data Science (DS) definitions, lifecycle, and multidisciplinary scope",
        "The 3Vs of Data: Volume, Velocity, and Variety justifying the data boom",
        "Essential skill taxonomy: Computer Science, Mathematics/Statistics, Domain Expertise",
        "Data types (structured, unstructured, semi-structured) and acquisition workflows",
        "Comprehensive analytics spectrum: Descriptive, Diagnostic, Predictive, Prescriptive, Exploratory, and Mechanistic",
        "Data cleaning and preprocessing routines"
      ]
    }
  },
  {
    id: "module-2",
    numericId: 2,
    moduleNumber: 2,
    title: "Module 2 — Data Extraction",
    shortTitle: "Data Extraction",
    periods: 9,
    periodsDisplay: "9 periods",
    choSyllabus: "Extracting meaning from data – Feature selection, User retention, Filters, Wrappers, Entropy, Decision tree algorithm; Random forests, The dimensionality problem, Single value decomposition, Principal component analysis.",
    syllabusTopics: [
      "Extracting meaning from data",
      "Feature selection",
      "User retention",
      "Filters",
      "Wrappers",
      "Entropy",
      "Decision tree algorithm",
      "Random forests",
      "The dimensionality problem",
      "Single value decomposition",
      "Principal component analysis"
    ],
    studyMaterial: {
      fileName: "MODULE2DS.pdf",
      format: "pdf",
      fileType: "PDF Document (.pdf)",
      filePath: "public/study-materials/MODULE2DS.pdf",
      fileSize: "1.1 MB",
      title: "Module 2 Data Extraction & Feature Engineering Detailed Notes",
      description: "Official comprehensive lecture notes covering industrial approaches (Kaggle & Google), feature selection paradigms (Filters vs. Wrappers), information entropy, Decision Trees, Random Forests, SVD, and PCA.",
      keyTopicsCovered: [
        "Extracting meaning from raw data: Case studies from William Cukierski (Kaggle) and David Huffaker (Google)",
        "Feature Selection Paradigms: Filter methods vs. Wrapper methods",
        "User retention modeling and behavioral analytics",
        "Information Entropy, Information Gain, and Gini Impurity",
        "Decision Tree algorithm and recursive binary splitting",
        "Random Forests and ensemble bagging mechanisms",
        "The Dimensionality Problem (Curse of Dimensionality in hyperspace)",
        "Singular Value Decomposition (SVD) and Principal Component Analysis (PCA)"
      ]
    }
  },
  {
    id: "module-3",
    numericId: 3,
    moduleNumber: 3,
    title: "Module 3 — Data Visualization",
    shortTitle: "Data Visualization",
    periods: 8,
    periodsDisplay: "8 periods",
    choSyllabus: "A Brief matplotlib API primer, Plotting with Pandas and Seaborn – Line plots, Bar plots, Histograms and density plots, Scatter plots, Facet grids and Categorical data; Other Python visualization tools",
    syllabusTopics: [
      "A Brief matplotlib API primer",
      "Plotting with Pandas and Seaborn",
      "Line plots",
      "Bar plots",
      "Histograms and density plots",
      "Scatter plots",
      "Facet grids and Categorical data",
      "Other Python visualization tools"
    ],
    studyMaterial: {
      fileName: "Module_3_Data_Visualization_Detailed_Notes.pdf",
      format: "pdf",
      fileType: "PDF Document (.pdf)",
      filePath: "public/study-materials/Module_3_Data_Visualization_Detailed_Notes.pdf",
      fileSize: "59 KB",
      title: "Module 3 Data Visualization Detailed Study Notes (14 Pages)",
      description: "Official uploaded 14-page detailed study notes PDF covering Matplotlib object-oriented APIs, Pandas plotting, Seaborn statistical visualization, Facet Grids, and other modern Python charting tools.",
      keyTopicsCovered: [
        "Matplotlib Figure & Axes object-oriented plotting primer",
        "High-level DataFrame plotting with Pandas (plot.line, plot.bar, plot.hist)",
        "Seaborn statistical graphics, aesthetic themes, and automatic error bars",
        "Line plots for temporal trends and Bar plots for categorical comparisons",
        "Histograms and Kernel Density Estimation (KDE) distributions",
        "Bivariate and multivariate Scatter plots with color (hue) and style mapping",
        "Facet Grids, Catplot, Pairplot, and Subplot multi-panel figures",
        "Modern Python visualization ecosystem: Plotly interactive charts, Bokeh, Altair"
      ]
    }
  },
  {
    id: "module-4",
    numericId: 4,
    moduleNumber: 4,
    title: "Module 4 — Statistical Thinking",
    shortTitle: "Statistical Thinking",
    periods: 11,
    periodsDisplay: "11 periods",
    choSyllabus: "Distributions – Representing and plotting histograms, Outliers, Summarizing distributions, Variance, Reporting results; Probability mass function – Plotting PMFs, Other visualizations, The class size paradox, Data frame indexing; Cumulative distribution functions - Limits of PMFs, Representing CDFs, Percentile based statistics, Random numbers, Comparing percentile ranks; Modeling distributions - Exponential distribution, Normal distribution, Lognormal distribution.",
    syllabusTopics: [
      "Distributions – Representing and plotting histograms",
      "Outliers",
      "Summarizing distributions",
      "Variance",
      "Reporting results",
      "Probability mass function – Plotting PMFs",
      "Other visualizations",
      "The class size paradox",
      "Data frame indexing",
      "Cumulative distribution functions - Limits of PMFs",
      "Representing CDFs",
      "Percentile based statistics",
      "Random numbers",
      "Comparing percentile ranks",
      "Modeling distributions - Exponential distribution",
      "Normal distribution",
      "Lognormal distribution"
    ],
    studyMaterial: {
      fileName: "Module_4_Statistical_Thinking_Detailed_Notes.pdf",
      format: "pdf",
      fileType: "PDF Document (.pdf)",
      filePath: "public/study-materials/Module_4_Statistical_Thinking_Detailed_Notes.pdf",
      fileSize: "52 KB",
      title: "Module 4 Statistical Thinking Detailed Study Notes (10 Pages)",
      description: "Official uploaded 10-page detailed study notes PDF covering statistical distributions, outlier detection, variance, Probability Mass Functions (PMFs), Cumulative Distribution Functions (CDFs), percentiles, and parametric distribution modeling.",
      keyTopicsCovered: [
        "Representing and interpreting histograms, bin sizing, and skewness",
        "Outlier identification (IQR boundaries, Z-scores) and variance summarization",
        "Probability Mass Functions (PMF): computation, normalization, and comparative plotting",
        "The Class Size Paradox: observer bias and weighted sampling distributions",
        "Cumulative Distribution Functions (CDF): overcoming PMF binning limits, percentile ranks",
        "Random number generation, Monte Carlo sampling, and empirical percentiles",
        "Parametric distribution modeling: Exponential, Normal (Gaussian), and Lognormal",
        "Q-Q plots, parameter estimation, and practical statistical reporting"
      ]
    }
  },
  {
    id: "module-5",
    numericId: 5,
    moduleNumber: 5,
    title: "Module 5 — Time Series Analysis and Predictive Modeling",
    shortTitle: "Time Series Analysis and Predictive Modeling",
    periods: 8,
    periodsDisplay: "8 periods",
    choSyllabus: "Time series analysis – Importing and cleaning, Plotting, Moving averages, Missing values, Serial correlation, Autocorrelation; Predictive modeling – Overview, Evaluating predictive models, Building predictive model solutions, Sentiment analysis.",
    syllabusTopics: [
      "Time series analysis – Importing and cleaning",
      "Plotting",
      "Moving averages",
      "Missing values",
      "Serial correlation",
      "Autocorrelation",
      "Predictive modeling – Overview",
      "Evaluating predictive models",
      "Building predictive model solutions",
      "Sentiment analysis"
    ],
    studyMaterial: {
      fileName: "Module_5_Time_Series_and_Predictive_Modeling_Detailed_Notes.pdf",
      format: "pdf",
      fileType: "PDF Document (.pdf)",
      filePath: "public/study-materials/Module_5_Time_Series_and_Predictive_Modeling_Detailed_Notes.pdf",
      fileSize: "48 KB",
      title: "Module 5 Time Series Analysis & Predictive Modeling Detailed Study Notes (9 Pages)",
      description: "Official uploaded 9-page detailed study notes PDF covering time series preprocessing, moving averages, autocorrelation (ACF), predictive machine learning pipelines, evaluation metrics, and sentiment analysis.",
      keyTopicsCovered: [
        "Time series data ingestion: DateTime parsing, frequency setting, and temporal cleaning",
        "Plotting sequential trends, seasonality, and residual decomposition",
        "Moving averages: simple, weighted, and exponential rolling statistical filters",
        "Handling missing temporal observations (forward fill, interpolation)",
        "Serial correlation and Autocorrelation Function (ACF) lag diagnostics",
        "Predictive modeling lifecycle: feature engineering, train/test splitting, cross-validation",
        "Model evaluation metrics: RMSE, MAE, R², Confusion Matrix, Precision, Recall, F1",
        "Natural Language Processing & Sentiment Analysis: text tokenization, VADER, and polarity prediction"
      ]
    }
  }
];
