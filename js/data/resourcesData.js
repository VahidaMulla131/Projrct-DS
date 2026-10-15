/**
 * Curated Academic Learning Resources Data
 * 
 * Genuine, verified Data Science learning resources organized into 6 core categories:
 * - Python Programming
 * - Data Analysis
 * - Data Visualization
 * - Machine Learning and Statistics
 * - Practice Datasets
 * - Coding Practice
 */

export const resourceCategories = [
  { id: 'all', label: 'All Resources', icon: 'grid' },
  { id: 'python', label: 'Python Programming', icon: 'code' },
  { id: 'analysis', label: 'Data Analysis', icon: 'table' },
  { id: 'visualization', label: 'Data Visualization', icon: 'bar-chart' },
  { id: 'ml-stats', label: 'Machine Learning & Statistics', icon: 'cpu' },
  { id: 'datasets', label: 'Practice Datasets', icon: 'database' },
  { id: 'coding', label: 'Coding Practice', icon: 'terminal' }
];

export const resourcesData = [
  // A. Python Programming
  {
    id: 'res-python-tutorial',
    name: 'Python Official Tutorial',
    category: 'Python Programming',
    categoryKey: 'python',
    badge: 'Official Documentation',
    description: 'The foundational official Python documentation guiding through core language syntax, control flow, data structures, standard modules, and object-oriented programming concepts.',
    url: 'https://docs.python.org/3/tutorial/',
    domain: 'docs.python.org',
    tags: ['Python 3', 'Syntax', 'Data Structures', 'OOP']
  },
  {
    id: 'res-numpy-doc',
    name: 'NumPy Documentation',
    category: 'Python Programming',
    categoryKey: 'python',
    badge: 'Official Documentation',
    description: 'Comprehensive guides and API reference for NumPy, the fundamental package for scientific computing with Python, featuring N-dimensional arrays, linear algebra, and Fourier transforms.',
    url: 'https://numpy.org/doc/stable/',
    domain: 'numpy.org',
    tags: ['NumPy', 'Arrays', 'Linear Algebra', 'Vectorization']
  },

  // B. Data Analysis
  {
    id: 'res-pandas-doc',
    name: 'Pandas Documentation',
    category: 'Data Analysis',
    categoryKey: 'analysis',
    badge: 'Official Documentation',
    description: 'Authoritative documentation for Pandas, the premier Python data manipulation tool providing fast, flexible Series and DataFrame data structures for practical tabular data analysis.',
    url: 'https://pandas.pydata.org/docs/',
    domain: 'pandas.pydata.org',
    tags: ['Pandas', 'DataFrames', 'Data Wrangling', 'Aggregation']
  },
  {
    id: 'res-jupyter-doc',
    name: 'Jupyter Documentation',
    category: 'Data Analysis',
    categoryKey: 'analysis',
    badge: 'Environment Guide',
    description: 'Official ecosystem documentation for Jupyter Notebook and JupyterLab, the leading open-source interactive computational environment for live code, equations, visualizations, and text.',
    url: 'https://docs.jupyter.org/',
    domain: 'docs.jupyter.org',
    tags: ['JupyterLab', 'Notebooks', 'Interactive Computing']
  },

  // C. Data Visualization
  {
    id: 'res-matplotlib-tutorials',
    name: 'Matplotlib Tutorials',
    category: 'Data Visualization',
    categoryKey: 'visualization',
    badge: 'Official Tutorials',
    description: 'Step-by-step tutorials and recipe guides for Matplotlib, Python’s foundational plotting library for creating static, animated, and publication-quality interactive visualizations.',
    url: 'https://matplotlib.org/stable/tutorials/',
    domain: 'matplotlib.org',
    tags: ['Matplotlib', 'Plotting', 'Subplots', 'Figures']
  },
  {
    id: 'res-seaborn-doc',
    name: 'Seaborn Documentation',
    category: 'Data Visualization',
    categoryKey: 'visualization',
    badge: 'Official Documentation',
    description: 'Official API documentation and gallery for Seaborn, a high-level Python visualization library based on Matplotlib that provides an intuitive interface for drawing informative statistical graphics.',
    url: 'https://seaborn.pydata.org/',
    domain: 'seaborn.pydata.org',
    tags: ['Seaborn', 'Statistical Graphics', 'Heatmaps', 'Distributions']
  },

  // D. Machine Learning and Statistics
  {
    id: 'res-scikit-learn-tutorials',
    name: 'Scikit-learn Tutorials',
    category: 'Machine Learning and Statistics',
    categoryKey: 'ml-stats',
    badge: 'Interactive Tutorials',
    description: 'Official tutorials introducing predictive data analysis, model selection, classification, regression, clustering, dimensionality reduction, and pipeline preprocessing in Python.',
    url: 'https://scikit-learn.org/stable/tutorial/index.html',
    domain: 'scikit-learn.org',
    tags: ['Scikit-learn', 'Machine Learning', 'Classification', 'Regression']
  },
  {
    id: 'res-scipy-doc',
    name: 'SciPy Documentation',
    category: 'Machine Learning and Statistics',
    categoryKey: 'ml-stats',
    badge: 'Scientific Computing',
    description: 'Reference manual for the SciPy library containing algorithms for scientific computing, statistical distributions, numerical optimization, integration, and signal processing.',
    url: 'https://docs.scipy.org/doc/scipy/',
    domain: 'docs.scipy.org',
    tags: ['SciPy', 'Statistics', 'Optimization', 'Mathematics']
  },

  // E. Practice Datasets
  {
    id: 'res-uci-ml-repo',
    name: 'UCI Machine Learning Repository',
    category: 'Practice Datasets',
    categoryKey: 'datasets',
    badge: 'Benchmark Repository',
    description: 'One of the oldest and most respected public archives of benchmark datasets used worldwide by the machine learning community for empirical algorithm verification and student research.',
    url: 'https://archive.ics.uci.edu/',
    domain: 'archive.ics.uci.edu',
    tags: ['UCI', 'Benchmark Datasets', 'Academic Research']
  },
  {
    id: 'res-kaggle-datasets',
    name: 'Kaggle Datasets Hub',
    category: 'Practice Datasets',
    categoryKey: 'datasets',
    badge: 'Community Datasets',
    description: 'Vast community repository of open datasets spanning healthcare, finance, NLP, computer vision, sports, and social sciences, complete with shared analytical notebooks and code discussions.',
    url: 'https://www.kaggle.com/datasets',
    domain: 'kaggle.com',
    tags: ['Kaggle', 'Open Data', 'CSV Datasets', 'EDA']
  },
  {
    id: 'res-seaborn-datasets',
    name: 'Seaborn Example Datasets Repository',
    category: 'Practice Datasets',
    categoryKey: 'datasets',
    badge: 'Open GitHub Archive',
    description: 'The official collection of lightweight datasets maintained by the Seaborn community (including iris, titanic, tips, flights, planets) widely used for testing charts and rapid data exploration.',
    url: 'https://github.com/mwaskom/seaborn-data',
    domain: 'github.com/mwaskom/seaborn-data',
    tags: ['GitHub', 'Sample Data', 'Iris', 'Titanic', 'Tips']
  },

  // F. Coding Practice
  {
    id: 'res-hackerrank',
    name: 'HackerRank Problem Solving',
    category: 'Coding Practice',
    categoryKey: 'coding',
    badge: 'Coding Practice',
    description: 'Global competitive programming platform offering specialized skill tracks in Python, SQL, Data Structures, and Mathematics with automated test suites and progress badges.',
    url: 'https://www.hackerrank.com/',
    domain: 'hackerrank.com',
    tags: ['HackerRank', 'Python Track', 'SQL', 'Algorithms']
  },
  {
    id: 'res-leetcode',
    name: 'LeetCode Algorithms & Data Structures',
    category: 'Coding Practice',
    categoryKey: 'coding',
    badge: 'Algorithm Challenges',
    description: 'Leading online assessment platform for practicing algorithmic problem solving, array manipulation, tree traversals, and dynamic programming essential for technical interviews.',
    url: 'https://leetcode.com/',
    domain: 'leetcode.com',
    tags: ['LeetCode', 'Algorithms', 'Data Structures', 'Interview Prep']
  }
];
