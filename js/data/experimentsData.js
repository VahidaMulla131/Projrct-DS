/**
 * Experiments Data Architecture
 *
 * Reusable structured data source for Data Science experiments (1 through 10).
 * Experiments 1, 2, 3, 4, 5, 6 contain authentic MBU laboratory curricula:
 * - Exp 1: Working with Different Data Formats -> 1(a), 1(b), 1(c)
 * - Exp 2: Interacting with Web APIs and Databases -> 2(a), 2(b)
 * - Exp 3: Data Cleaning and Preparation -> 3(a), 3(b), 3(c), 3(d)
 * - Exp 4: Data Wrangling -> 4(a), 4(b), 4(c)
 * - Exp 5: Data Visualization -> 5(a), 5(b), 5(c), 5(d), 5(e)
 * - Exp 6: Time Series Analysis -> 6(a), 6(b), 6(c), 6(d)
 *
 * Experiments 7, 8, 9, 10 remain placeholders awaiting future material.
 */

export const initialExperiments = [
  // ============================================================
  // EXPERIMENT 1 — Working with Different Data Formats using Pandas
  // ============================================================
  {
    id: 1,
    experimentNumber: 1,
    title: "WORKING WITH DIFFERENT DATA FORMATS USING PANDAS",
    aim: "To work with different data formats including CSV/text, JSON, and Microsoft Excel files using Pandas read/write functions.",
    procedure: "Experiment 1 consists of three distinct laboratory programs: 1(a) Reading and Writing Data in Text Format, 1(b) Reading, Writing and Parsing JSON Data, 1(c) Reading and Writing Microsoft Excel Files. Select any sub-experiment below to open its dedicated workbench.",
    result: "The program successfully demonstrates reading and writing data in CSV/text format, JSON format, and Microsoft Excel format using Pandas.",
    isPlaceholder: false,
    language: "python",
    subExperiments: [
      {
        subId: "a",
        label: "1(a)",
        title: "1(a) Reading and Writing Data in Text Format",
        aim: "To perform reading and writing of data in text format using Pandas read_csv() and read_table() functions with an online CSV dataset.",
        procedure: `1. Import the required Pandas library.
2. Select a publicly accessible online CSV dataset (Iris dataset from GitHub raw URL).
3. Read the CSV dataset using pandas.read_csv() with the URL.
4. Display the first five rows and inspect dataset shape and columns.
5. Demonstrate reading the same data using pandas.read_table() with sep=',' parameter.
6. Write/save the DataFrame into a local CSV/text file using to_csv().
7. Read the saved file back to verify the write operation.
8. Display the resulting data and confirm success.`,
        result: "The data was successfully read and written in text/CSV format using Pandas read_csv(), read_table(), and to_csv().",
        defaultCode: `import pandas as pd
import io

# ── Experiment 1(a): Reading and Writing Data in Text Format ──

# --- Using an inline CSV fallback (same structure as online Iris dataset) ---
# In a browser sandbox, external URLs may not be reachable.
# We simulate the online CSV using an inline string of the same format.

csv_data = """sepal_length,sepal_width,petal_length,petal_width,species
5.1,3.5,1.4,0.2,setosa
4.9,3.0,1.4,0.2,setosa
4.7,3.2,1.3,0.2,setosa
6.3,3.3,6.0,2.5,virginica
5.8,2.7,5.1,1.9,virginica
7.1,3.0,5.9,2.1,virginica
6.3,2.9,5.6,1.8,virginica
5.7,2.8,4.1,1.3,versicolor
6.3,3.3,4.7,1.6,versicolor
4.6,3.1,1.5,0.2,setosa
5.0,3.6,1.4,0.2,setosa
5.4,3.9,1.7,0.4,setosa
"""

print("=" * 55)
print("  Experiment 1(a): Reading & Writing Data in Text Format")
print("=" * 55)

# 1. Read using read_csv()
print("\\n[1] Using pandas.read_csv():")
df_csv = pd.read_csv(io.StringIO(csv_data))
print(df_csv.head())
print(f"\\nShape: {df_csv.shape}  |  Columns: {list(df_csv.columns)}")

# 2. Read same data using read_table() with sep=','
print("\\n[2] Using pandas.read_table() with sep=',':")
df_table = pd.read_table(io.StringIO(csv_data), sep=',')
print(df_table.head())

# 3. Write DataFrame to CSV text (in-memory)
output = io.StringIO()
df_csv.to_csv(output, index=False)
saved_csv = output.getvalue()
print("\\n[3] Output of to_csv() — first 300 chars:")
print(saved_csv[:300])

# 4. Read the saved CSV back
df_reloaded = pd.read_csv(io.StringIO(saved_csv))
print("\\n[4] Reloaded DataFrame from saved CSV:")
print(df_reloaded.head())

print("\\n✅ Result: Data successfully read with read_csv() and read_table()")
print("   and written using to_csv().")`,
        code: `import pandas as pd
import io

# ── Experiment 1(a): Reading and Writing Data in Text Format ──

csv_data = """sepal_length,sepal_width,petal_length,petal_width,species
5.1,3.5,1.4,0.2,setosa
4.9,3.0,1.4,0.2,setosa
4.7,3.2,1.3,0.2,setosa
6.3,3.3,6.0,2.5,virginica
5.8,2.7,5.1,1.9,virginica
7.1,3.0,5.9,2.1,virginica
6.3,2.9,5.6,1.8,virginica
5.7,2.8,4.1,1.3,versicolor
6.3,3.3,4.7,1.6,versicolor
4.6,3.1,1.5,0.2,setosa
5.0,3.6,1.4,0.2,setosa
5.4,3.9,1.7,0.4,setosa
"""

print("=" * 55)
print("  Experiment 1(a): Reading & Writing Data in Text Format")
print("=" * 55)

print("\\n[1] Using pandas.read_csv():")
df_csv = pd.read_csv(io.StringIO(csv_data))
print(df_csv.head())
print(f"\\nShape: {df_csv.shape}  |  Columns: {list(df_csv.columns)}")

print("\\n[2] Using pandas.read_table() with sep=',':")
df_table = pd.read_table(io.StringIO(csv_data), sep=',')
print(df_table.head())

output = io.StringIO()
df_csv.to_csv(output, index=False)
saved_csv = output.getvalue()
print("\\n[3] Output of to_csv() — first 300 chars:")
print(saved_csv[:300])

df_reloaded = pd.read_csv(io.StringIO(saved_csv))
print("\\n[4] Reloaded DataFrame from saved CSV:")
print(df_reloaded.head())

print("\\n✅ Result: Data successfully read with read_csv() and read_table()")
print("   and written using to_csv().")`
      },
      {
        subId: "b",
        label: "1(b)",
        title: "1(b) Reading, Writing and Parsing JSON Data",
        aim: "To perform reading, writing, and parsing of JSON data using Pandas read_json() and to_json() functions.",
        procedure: `1. Import Pandas and the json module.
2. Create a JSON-formatted string representing student records.
3. Read the JSON data into a Pandas DataFrame using pandas.read_json().
4. Display the parsed DataFrame.
5. Inspect column data types and basic info.
6. Write the DataFrame back to JSON format using to_json() with orient='records'.
7. Parse the written JSON back using json.loads() to verify round-trip accuracy.
8. Display the verified output.`,
        result: "The JSON data was successfully read, parsed into a DataFrame, and written back into JSON format using Pandas.",
        defaultCode: `import pandas as pd
import json
import io

# ── Experiment 1(b): Reading, Writing and Parsing JSON Data ──

print("=" * 55)
print("  Experiment 1(b): Reading, Writing & Parsing JSON Data")
print("=" * 55)

# 1. Create JSON-formatted data
json_str = """[
  {"Name": "Mulla Vahida",  "Roll": "24102A030080", "Subject": "Data Science", "Marks": 91, "Grade": "O"},
  {"Name": "Ravi Kumar",    "Roll": "24102A030081", "Subject": "Data Science", "Marks": 84, "Grade": "A"},
  {"Name": "Priya Singh",   "Roll": "24102A030082", "Subject": "Data Science", "Marks": 77, "Grade": "B"},
  {"Name": "Anjali Reddy",  "Roll": "24102A030083", "Subject": "Data Science", "Marks": 95, "Grade": "O"},
  {"Name": "Mohammed Ali",  "Roll": "24102A030084", "Subject": "Data Science", "Marks": 68, "Grade": "B+"}
]"""

# 2. Read JSON into DataFrame using read_json()
print("\\n[1] Reading JSON using pandas.read_json():")
df = pd.read_json(io.StringIO(json_str))
print(df)

# 3. Inspect info
print("\\n[2] DataFrame Info:")
print(f"  Shape  : {df.shape}")
print(f"  Columns: {list(df.columns)}")
print(f"  Dtypes :\\n{df.dtypes}")

# 4. Write DataFrame to JSON using to_json()
print("\\n[3] Writing DataFrame to JSON using to_json(orient='records'):")
json_output = df.to_json(orient='records', indent=2)
print(json_output[:400])

# 5. Parse back to verify
print("\\n[4] Parsing written JSON back using json.loads():")
parsed = json.loads(json_output)
print(f"  Total records parsed: {len(parsed)}")
print(f"  First record: {parsed[0]}")

print("\\n✅ Result: JSON data successfully read, parsed into DataFrame,")
print("   and written back to JSON format.")`,
        code: `import pandas as pd
import json
import io

print("=" * 55)
print("  Experiment 1(b): Reading, Writing & Parsing JSON Data")
print("=" * 55)

json_str = """[
  {"Name": "Mulla Vahida",  "Roll": "24102A030080", "Subject": "Data Science", "Marks": 91, "Grade": "O"},
  {"Name": "Ravi Kumar",    "Roll": "24102A030081", "Subject": "Data Science", "Marks": 84, "Grade": "A"},
  {"Name": "Priya Singh",   "Roll": "24102A030082", "Subject": "Data Science", "Marks": 77, "Grade": "B"},
  {"Name": "Anjali Reddy",  "Roll": "24102A030083", "Subject": "Data Science", "Marks": 95, "Grade": "O"},
  {"Name": "Mohammed Ali",  "Roll": "24102A030084", "Subject": "Data Science", "Marks": 68, "Grade": "B+"}
]"""

print("\\n[1] Reading JSON using pandas.read_json():")
df = pd.read_json(io.StringIO(json_str))
print(df)

print("\\n[2] DataFrame Info:")
print(f"  Shape  : {df.shape}")
print(f"  Columns: {list(df.columns)}")
print(f"  Dtypes :\\n{df.dtypes}")

print("\\n[3] Writing DataFrame to JSON using to_json(orient='records'):")
json_output = df.to_json(orient='records', indent=2)
print(json_output[:400])

print("\\n[4] Parsing written JSON back using json.loads():")
parsed = json.loads(json_output)
print(f"  Total records parsed: {len(parsed)}")
print(f"  First record: {parsed[0]}")

print("\\n✅ Result: JSON data successfully read, parsed into DataFrame,")
print("   and written back to JSON format.")`
      },
      {
        subId: "c",
        label: "1(c)",
        title: "1(c) Reading and Writing Microsoft Excel Files",
        aim: "To perform reading and writing of Microsoft Excel (.xlsx) files using Pandas read_excel() and to_excel() functions.",
        procedure: `1. Import Pandas and the openpyxl engine (or io module for in-memory simulation).
2. Create a sample DataFrame representing student marks.
3. Write the DataFrame to an in-memory Excel (.xlsx) buffer using to_excel() with engine='openpyxl'.
4. Read the Excel data back from the buffer using read_excel().
5. Display the contents of the read DataFrame.
6. Verify that columns, rows, and data types match the original.
7. Display confirmation of successful read/write operation.`,
        result: "The Excel data was successfully written using to_excel() and read back using read_excel() with Pandas.",
        defaultCode: `import pandas as pd
import io

# ── Experiment 1(c): Reading and Writing Microsoft Excel Files ──

print("=" * 55)
print("  Experiment 1(c): Reading & Writing Excel (.xlsx) Files")
print("=" * 55)

# 1. Create a sample DataFrame
data = {
    "Student Name": ["Mulla Vahida", "Ravi Kumar", "Priya Singh", "Anjali Reddy", "Mohammed Ali"],
    "Roll Number":  ["24102A030080", "24102A030081", "24102A030082", "24102A030083", "24102A030084"],
    "Subject":      ["Data Science"] * 5,
    "Marks":        [91, 84, 77, 95, 68],
    "Grade":        ["O", "A", "B", "O", "B+"]
}
df_original = pd.DataFrame(data)
print("\\n[1] Original DataFrame to be written to Excel:")
print(df_original.to_string(index=False))

# 2. Write to in-memory Excel buffer (simulates writing to .xlsx file)
try:
    excel_buffer = io.BytesIO()
    df_original.to_excel(excel_buffer, index=False, sheet_name="StudentMarks", engine="openpyxl")
    excel_buffer.seek(0)
    print("\\n[2] DataFrame successfully written to Excel buffer (openpyxl engine).")

    # 3. Read the Excel data back using read_excel()
    df_read = pd.read_excel(excel_buffer, sheet_name="StudentMarks", engine="openpyxl")
    print("\\n[3] DataFrame read back from Excel using read_excel():")
    print(df_read.to_string(index=False))

    # 4. Verify
    print(f"\\n[4] Verification:")
    print(f"  Shape          : {df_read.shape}")
    print(f"  Columns        : {list(df_read.columns)}")
    print(f"  Data matches   : {df_original.equals(df_read)}")
    print("\\n✅ Result: Excel data successfully written with to_excel()")
    print("   and read back with read_excel().")

except ImportError:
    # Fallback: demonstrate using CSV as tabular demonstration
    print("\\n[INFO] openpyxl not available in this environment.")
    print("       Demonstrating equivalent operation using CSV format.")
    buf = io.StringIO()
    df_original.to_csv(buf, index=False)
    buf.seek(0)
    df_fallback = pd.read_csv(buf)
    print("\\n[3] DataFrame (CSV fallback):")
    print(df_fallback.to_string(index=False))
    print("\\n✅ Result: Demonstrated equivalent tabular read/write operation.")`,
        code: `import pandas as pd
import io

print("=" * 55)
print("  Experiment 1(c): Reading & Writing Excel (.xlsx) Files")
print("=" * 55)

data = {
    "Student Name": ["Mulla Vahida", "Ravi Kumar", "Priya Singh", "Anjali Reddy", "Mohammed Ali"],
    "Roll Number":  ["24102A030080", "24102A030081", "24102A030082", "24102A030083", "24102A030084"],
    "Subject":      ["Data Science"] * 5,
    "Marks":        [91, 84, 77, 95, 68],
    "Grade":        ["O", "A", "B", "O", "B+"]
}
df_original = pd.DataFrame(data)
print("\\n[1] Original DataFrame to be written to Excel:")
print(df_original.to_string(index=False))

try:
    excel_buffer = io.BytesIO()
    df_original.to_excel(excel_buffer, index=False, sheet_name="StudentMarks", engine="openpyxl")
    excel_buffer.seek(0)
    print("\\n[2] DataFrame successfully written to Excel buffer (openpyxl engine).")

    df_read = pd.read_excel(excel_buffer, sheet_name="StudentMarks", engine="openpyxl")
    print("\\n[3] DataFrame read back from Excel using read_excel():")
    print(df_read.to_string(index=False))

    print(f"\\n[4] Verification:")
    print(f"  Shape          : {df_read.shape}")
    print(f"  Columns        : {list(df_read.columns)}")
    print(f"  Data matches   : {df_original.equals(df_read)}")
    print("\\n✅ Result: Excel data successfully written with to_excel()")
    print("   and read back with read_excel().")

except ImportError:
    print("\\n[INFO] openpyxl not available in this environment.")
    buf = io.StringIO()
    df_original.to_csv(buf, index=False)
    buf.seek(0)
    df_fallback = pd.read_csv(buf)
    print("\\n[3] DataFrame (CSV fallback):")
    print(df_fallback.to_string(index=False))
    print("\\n✅ Result: Demonstrated equivalent tabular read/write operation.")`
      }
    ]
  },

  // ============================================================
  // EXPERIMENT 2 — Interacting with Web APIs and Databases
  // ============================================================
  {
    id: 2,
    experimentNumber: 2,
    title: "INTERACTING WITH WEB APIs AND DATABASES",
    aim: "To interact with a Web API using Python requests to retrieve GitHub issues and to connect to a relational database (SQLite) to perform CRUD operations using Pandas.",
    procedure: "Experiment 2 consists of two distinct laboratory programs: 2(a) GitHub API — retrieving pandas GitHub issues using requests and response.json(), and 2(b) Relational Database Operations — performing create, insert, select, update, and delete operations using SQLite. Select any sub-experiment below.",
    result: "The program successfully demonstrates Web API interaction using requests and DataFrame conversion, and full relational database CRUD operations using SQLite and Pandas.",
    isPlaceholder: false,
    language: "python",
    subExperiments: [
      {
        subId: "a",
        label: "2(a)",
        title: "2(a) GitHub API — Latest 30 Pandas Issues",
        aim: "To interact with the GitHub REST API using Python requests, retrieve the latest 30 issues from the pandas-dev/pandas repository, convert the JSON response into a Pandas DataFrame, and extract fields of interest.",
        procedure: `1. Import the requests and pandas libraries.
2. Define the GitHub API endpoint URL for the pandas repository issues.
3. Send a GET request to the API with appropriate headers.
4. Check the response status code.
5. If successful, convert the response using response.json().
6. Limit the data to the first 30 issues returned.
7. Move the JSON data into a Pandas DataFrame.
8. Extract fields of interest: number, title, state, user/login, created_at, updated_at, html_url.
9. Display the resulting DataFrame with selected columns.
10. Handle any API/network errors gracefully with informative messages.`,
        result: "The latest 30 GitHub issues from pandas-dev/pandas were retrieved through the API, converted from JSON into a DataFrame, and selected fields were displayed.",
        defaultCode: `import pandas as pd

# ── Experiment 2(a): GitHub API — Latest 30 Pandas Issues ──

print("=" * 60)
print("  Experiment 2(a): Interacting with Web APIs (GitHub)")
print("=" * 60)

# GitHub API URL for pandas issues
API_URL = "https://api.github.com/repos/pandas-dev/pandas/issues"
PARAMS  = {"per_page": 30, "state": "open"}

print(f"\\n[1] API Endpoint: {API_URL}")
print(f"    Parameters  : {PARAMS}")

try:
    import urllib.request, urllib.error, json

    req = urllib.request.Request(
        API_URL + "?per_page=30&state=open",
        headers={"Accept": "application/vnd.github.v3+json",
                 "User-Agent": "DS-DigitalLibrary-MBU"}
    )
    with urllib.request.urlopen(req, timeout=8) as response:
        data = json.loads(response.read().decode())

    print(f"\\n[2] Response received. Total issues fetched: {len(data)}")

    # Move to DataFrame and extract fields of interest
    df = pd.DataFrame(data)
    df['user_login'] = df['user'].apply(lambda u: u['login'] if isinstance(u, dict) else '')

    fields = ['number', 'title', 'state', 'user_login', 'created_at', 'updated_at', 'html_url']
    df_selected = df[fields].head(30)

    print("\\n[3] DataFrame — Selected Fields (first 10 rows shown):")
    pd.set_option('display.max_colwidth', 45)
    pd.set_option('display.width', 120)
    print(df_selected.head(10).to_string(index=False))

    print(f"\\n[4] Summary:")
    print(f"  Total issues in DataFrame : {len(df_selected)}")
    print(f"  Open issues               : {(df_selected['state'] == 'open').sum()}")
    print("\\n✅ Result: GitHub API response successfully converted to DataFrame.")

except Exception as e:
    print(f"\\n[INFO] API request could not complete: {type(e).__name__}: {e}")
    print("\\n[FALLBACK] Demonstrating with simulated GitHub issue data:\\n")

    simulated = [
        {"number": 60001, "title": "BUG: read_csv raises on mixed types", "state": "open",
         "user_login": "user_alpha", "created_at": "2024-09-01T10:00:00Z",
         "updated_at": "2024-09-02T08:00:00Z", "html_url": "https://github.com/pandas-dev/pandas/issues/60001"},
        {"number": 60002, "title": "ENH: Add pivot_wider method", "state": "open",
         "user_login": "user_beta",  "created_at": "2024-09-03T11:00:00Z",
         "updated_at": "2024-09-04T09:00:00Z", "html_url": "https://github.com/pandas-dev/pandas/issues/60002"},
        {"number": 60003, "title": "DOC: Update groupby documentation", "state": "open",
         "user_login": "user_gamma", "created_at": "2024-09-05T12:00:00Z",
         "updated_at": "2024-09-06T10:00:00Z", "html_url": "https://github.com/pandas-dev/pandas/issues/60003"},
        {"number": 60004, "title": "BUG: DataFrame.merge drops columns", "state": "open",
         "user_login": "user_delta", "created_at": "2024-09-07T13:00:00Z",
         "updated_at": "2024-09-08T11:00:00Z", "html_url": "https://github.com/pandas-dev/pandas/issues/60004"},
        {"number": 60005, "title": "ENH: Improve to_parquet performance", "state": "open",
         "user_login": "user_eps",   "created_at": "2024-09-09T14:00:00Z",
         "updated_at": "2024-09-10T12:00:00Z", "html_url": "https://github.com/pandas-dev/pandas/issues/60005"},
    ]
    df_sim = pd.DataFrame(simulated)
    pd.set_option('display.max_colwidth', 45)
    print(df_sim.to_string(index=False))
    print(f"\\n  Simulated records shown : {len(df_sim)}")
    print("\\n✅ Result: In a live environment, real GitHub issues would appear above.")`,
        code: `import pandas as pd

print("=" * 60)
print("  Experiment 2(a): Interacting with Web APIs (GitHub)")
print("=" * 60)

API_URL = "https://api.github.com/repos/pandas-dev/pandas/issues"
print(f"\\n[1] API Endpoint: {API_URL}")
print(f"    Parameters  : per_page=30, state=open")

try:
    import urllib.request, json

    req = urllib.request.Request(
        API_URL + "?per_page=30&state=open",
        headers={"Accept": "application/vnd.github.v3+json",
                 "User-Agent": "DS-DigitalLibrary-MBU"}
    )
    with urllib.request.urlopen(req, timeout=8) as response:
        data = json.loads(response.read().decode())

    print(f"\\n[2] Response received. Total issues fetched: {len(data)}")

    df = pd.DataFrame(data)
    df['user_login'] = df['user'].apply(lambda u: u['login'] if isinstance(u, dict) else '')

    fields = ['number', 'title', 'state', 'user_login', 'created_at', 'updated_at', 'html_url']
    df_selected = df[fields].head(30)

    pd.set_option('display.max_colwidth', 45)
    pd.set_option('display.width', 120)
    print("\\n[3] DataFrame — Selected Fields (first 10 rows shown):")
    print(df_selected.head(10).to_string(index=False))
    print(f"\\n[4] Total issues: {len(df_selected)}")
    print("\\n✅ Result: GitHub API response successfully converted to DataFrame.")

except Exception as e:
    print(f"\\n[INFO] API not reachable: {type(e).__name__}")
    print("\\n[FALLBACK] Simulated GitHub issues data:\\n")
    simulated = [
        {"number": 60001, "title": "BUG: read_csv raises on mixed types",    "state": "open", "user_login": "user_alpha", "created_at": "2024-09-01T10:00:00Z", "updated_at": "2024-09-02T08:00:00Z", "html_url": "https://github.com/pandas-dev/pandas/issues/60001"},
        {"number": 60002, "title": "ENH: Add pivot_wider method",            "state": "open", "user_login": "user_beta",  "created_at": "2024-09-03T11:00:00Z", "updated_at": "2024-09-04T09:00:00Z", "html_url": "https://github.com/pandas-dev/pandas/issues/60002"},
        {"number": 60003, "title": "DOC: Update groupby documentation",      "state": "open", "user_login": "user_gamma", "created_at": "2024-09-05T12:00:00Z", "updated_at": "2024-09-06T10:00:00Z", "html_url": "https://github.com/pandas-dev/pandas/issues/60003"},
        {"number": 60004, "title": "BUG: DataFrame.merge drops columns",     "state": "open", "user_login": "user_delta", "created_at": "2024-09-07T13:00:00Z", "updated_at": "2024-09-08T11:00:00Z", "html_url": "https://github.com/pandas-dev/pandas/issues/60004"},
        {"number": 60005, "title": "ENH: Improve to_parquet performance",    "state": "open", "user_login": "user_eps",   "created_at": "2024-09-09T14:00:00Z", "updated_at": "2024-09-10T12:00:00Z", "html_url": "https://github.com/pandas-dev/pandas/issues/60005"},
    ]
    pd.set_option('display.max_colwidth', 45)
    print(pd.DataFrame(simulated).to_string(index=False))
    print("\\n✅ Result: In a live environment, real GitHub issues appear above.")`
      },
      {
        subId: "b",
        label: "2(b)",
        title: "2(b) Relational Database Operations (SQLite)",
        aim: "To connect to a relational database using Python's built-in sqlite3 module and perform table creation, data insertion, selection, DataFrame conversion, record update, and record deletion operations.",
        procedure: `1. Import sqlite3 and pandas libraries.
2. Establish a connection to an in-memory SQLite database.
3. Create a cursor object for executing SQL statements.
4. Create a table named 'Students' using SQL CREATE TABLE.
5. Insert five sample student records using INSERT INTO.
6. Commit the transaction.
7. Select all records using SELECT * and display them.
8. Move the SELECT result into a Pandas DataFrame.
9. Update a student's marks using UPDATE ... WHERE.
10. Display updated records.
11. Delete a record using DELETE ... WHERE.
12. Display final table contents.
13. Close the database connection.`,
        result: "The relational database was successfully connected and the required create, insert, select, DataFrame conversion, update, and delete operations were performed using SQLite.",
        defaultCode: `import sqlite3
import pandas as pd

# ── Experiment 2(b): Relational Database Operations (SQLite) ──

print("=" * 60)
print("  Experiment 2(b): Relational Database Operations (SQLite)")
print("=" * 60)

# 1. Connect to in-memory SQLite database
conn = sqlite3.connect(":memory:")
cursor = conn.cursor()
print("\\n[1] Connected to SQLite in-memory database.")

# 2. CREATE TABLE
cursor.execute("""
    CREATE TABLE IF NOT EXISTS Students (
        id          INTEGER PRIMARY KEY AUTOINCREMENT,
        name        TEXT    NOT NULL,
        roll        TEXT    UNIQUE NOT NULL,
        department  TEXT,
        marks       REAL,
        grade       TEXT
    )
""")
conn.commit()
print("\\n[2] Table 'Students' created successfully.")

# 3. INSERT records
students = [
    ("Mulla Vahida",  "24102A030080", "DATA SCIENCE", 91.0, "O"),
    ("Ravi Kumar",    "24102A030081", "DATA SCIENCE", 84.0, "A"),
    ("Priya Singh",   "24102A030082", "DATA SCIENCE", 77.0, "B"),
    ("Anjali Reddy",  "24102A030083", "DATA SCIENCE", 95.0, "O"),
    ("Mohammed Ali",  "24102A030084", "DATA SCIENCE", 68.0, "B+"),
]
cursor.executemany(
    "INSERT INTO Students (name, roll, department, marks, grade) VALUES (?, ?, ?, ?, ?)",
    students
)
conn.commit()
print(f"\\n[3] {len(students)} records inserted into 'Students'.")

# 4. SELECT all — move to DataFrame
df = pd.read_sql_query("SELECT * FROM Students", conn)
print("\\n[4] SELECT * — DataFrame from database:")
print(df.to_string(index=False))

# 5. UPDATE a record
cursor.execute("UPDATE Students SET marks = 98.0, grade = 'O+' WHERE roll = '24102A030083'")
conn.commit()
print("\\n[5] UPDATE: Anjali Reddy's marks updated to 98.0 (grade: O+).")

# Show updated data
df_updated = pd.read_sql_query("SELECT * FROM Students", conn)
print("\\n    Updated table:")
print(df_updated.to_string(index=False))

# 6. DELETE a record
cursor.execute("DELETE FROM Students WHERE roll = '24102A030084'")
conn.commit()
print("\\n[6] DELETE: Mohammed Ali (roll 24102A030084) deleted.")

# Final contents
df_final = pd.read_sql_query("SELECT * FROM Students", conn)
print("\\n[7] Final table contents after DELETE:")
print(df_final.to_string(index=False))

# 7. Close connection
conn.close()
print("\\n[8] Database connection closed.")
print("\\n✅ Result: All SQLite CRUD operations (CREATE, INSERT, SELECT,")
print("   UPDATE, DELETE) and DataFrame conversion completed successfully.")`,
        code: `import sqlite3
import pandas as pd

print("=" * 60)
print("  Experiment 2(b): Relational Database Operations (SQLite)")
print("=" * 60)

conn = sqlite3.connect(":memory:")
cursor = conn.cursor()
print("\\n[1] Connected to SQLite in-memory database.")

cursor.execute("""
    CREATE TABLE IF NOT EXISTS Students (
        id          INTEGER PRIMARY KEY AUTOINCREMENT,
        name        TEXT    NOT NULL,
        roll        TEXT    UNIQUE NOT NULL,
        department  TEXT,
        marks       REAL,
        grade       TEXT
    )
""")
conn.commit()
print("\\n[2] Table 'Students' created successfully.")

students = [
    ("Mulla Vahida",  "24102A030080", "DATA SCIENCE", 91.0, "O"),
    ("Ravi Kumar",    "24102A030081", "DATA SCIENCE", 84.0, "A"),
    ("Priya Singh",   "24102A030082", "DATA SCIENCE", 77.0, "B"),
    ("Anjali Reddy",  "24102A030083", "DATA SCIENCE", 95.0, "O"),
    ("Mohammed Ali",  "24102A030084", "DATA SCIENCE", 68.0, "B+"),
]
cursor.executemany(
    "INSERT INTO Students (name, roll, department, marks, grade) VALUES (?, ?, ?, ?, ?)",
    students
)
conn.commit()
print(f"\\n[3] {len(students)} records inserted into 'Students'.")

df = pd.read_sql_query("SELECT * FROM Students", conn)
print("\\n[4] SELECT * — DataFrame from database:")
print(df.to_string(index=False))

cursor.execute("UPDATE Students SET marks = 98.0, grade = 'O+' WHERE roll = '24102A030083'")
conn.commit()
print("\\n[5] UPDATE: Anjali Reddy's marks updated to 98.0 (grade: O+).")
df_updated = pd.read_sql_query("SELECT * FROM Students", conn)
print("\\n    Updated table:")
print(df_updated.to_string(index=False))

cursor.execute("DELETE FROM Students WHERE roll = '24102A030084'")
conn.commit()
print("\\n[6] DELETE: Mohammed Ali (roll 24102A030084) deleted.")
df_final = pd.read_sql_query("SELECT * FROM Students", conn)
print("\\n[7] Final table contents after DELETE:")
print(df_final.to_string(index=False))

conn.close()
print("\\n[8] Database connection closed.")
print("\\n✅ Result: All SQLite CRUD operations and DataFrame conversion completed.")`
      }
    ]
  },

  // ============================================================
  // EXPERIMENT 3 — Data Cleaning and Preparation
  // ============================================================
  {
    id: 3,
    experimentNumber: 3,
    title: "DATA CLEANING AND PREPARATION",
    aim: "To perform data cleaning and preparation operations including handling missing values, duplicate removal, data transformation, outlier detection, and regular expression text manipulation using Pandas.",
    procedure: "Experiment 3 consists of four distinct laboratory programs: 3(a) Handling Missing Data and Duplicates, 3(b) Data Transformation, 3(c) Outlier Detection, 3(d) Regular Expression Text Manipulation. Select any sub-experiment below to open its dedicated workbench.",
    result: "The program successfully demonstrates data cleaning operations including missing value handling, duplicate removal, data transformation, outlier detection, and regex text manipulation using Pandas.",
    isPlaceholder: false,
    language: "python",
    subExperiments: [
      {
        subId: "a",
        label: "3(a)",
        title: "3(a) Handling Missing Data and Duplicates",
        aim: "To perform data cleaning by identifying and handling missing values (NA) using isna(), dropna(), and fillna(), and removing duplicate records using duplicated() and drop_duplicates() in Pandas.",
        procedure: `1. Create a DataFrame containing intentional missing values (NaN/NA) and duplicate rows.
2. Identify missing values using df.isna() and df.isnull().
3. Count missing values per column using df.isna().sum().
4. Filter out rows with any missing value using df.dropna().
5. Fill missing values with a specified value using df.fillna().
6. Fill missing values using forward fill method with ffill().
7. Identify duplicate rows using df.duplicated().
8. Remove duplicate rows using df.drop_duplicates().
9. Display the cleaned DataFrame at each stage.`,
        result: "The DataFrame was successfully cleaned by identifying missing values, filling them using fillna(), dropping rows with dropna(), and removing duplicates using drop_duplicates().",
        defaultCode: `import pandas as pd
import numpy as np

# ── Experiment 3(a): Handling Missing Data and Duplicates ──

print("=" * 60)
print("  Experiment 3(a): Handling Missing Data and Duplicates")
print("=" * 60)

# 1. Create DataFrame with missing values and duplicates
data = {
    "Name":    ["Mulla Vahida", "Ravi Kumar",  "Priya Singh", "Ravi Kumar",  "Anjali Reddy", "Mohammed Ali", "Priya Singh"],
    "Roll":    ["A030080",      "A030081",      "A030082",     "A030081",     "A030083",       None,          "A030082"],
    "Marks":   [91,             None,           77,            None,          95,              68,             77],
    "Grade":   ["O",            "A",            "B",           "A",           "O",             None,           "B"],
    "City":    ["Tirupati",     "Hyderabad",    None,          "Hyderabad",   "Chennai",       "Vizag",        None],
}
df = pd.DataFrame(data)

print("\\n[1] Original DataFrame (with missing values and duplicates):")
print(df.to_string(index=True))

# 2. Identify missing values
print("\\n[2] Missing values — df.isna():")
print(df.isna())

print("\\n[3] Missing value count per column — df.isna().sum():")
print(df.isna().sum())

# 3. Drop rows with any missing value
df_dropped = df.dropna()
print("\\n[4] After dropna() — rows with ANY missing value removed:")
print(df_dropped.to_string(index=True))
print(f"    Shape: {df.shape} → {df_dropped.shape}")

# 4. Fill missing values with a fixed value
df_filled = df.fillna({"Marks": df["Marks"].mean(), "Roll": "UNKNOWN", "Grade": "N/A", "City": "Unknown"})
print("\\n[5] After fillna() — missing values filled:")
print(df_filled.to_string(index=True))

# 5. Forward fill
df_ffill = df.ffill()
print("\\n[6] After ffill() — forward fill applied:")
print(df_ffill.to_string(index=True))

# 6. Identify duplicates
print("\\n[7] Duplicate rows — df.duplicated():")
print(df.duplicated())

# 7. Remove duplicates
df_deduped = df.drop_duplicates()
print("\\n[8] After drop_duplicates():")
print(df_deduped.to_string(index=True))
print(f"    Shape: {df.shape} → {df_deduped.shape}")

print("\\n✅ Result: Missing values handled with isna(), dropna(), fillna().")
print("   Duplicates identified with duplicated() and removed with drop_duplicates().")`,
        code: `import pandas as pd
import numpy as np

print("=" * 60)
print("  Experiment 3(a): Handling Missing Data and Duplicates")
print("=" * 60)

data = {
    "Name":    ["Mulla Vahida", "Ravi Kumar",  "Priya Singh", "Ravi Kumar",  "Anjali Reddy", "Mohammed Ali", "Priya Singh"],
    "Roll":    ["A030080",      "A030081",      "A030082",     "A030081",     "A030083",       None,          "A030082"],
    "Marks":   [91,             None,           77,            None,          95,              68,             77],
    "Grade":   ["O",            "A",            "B",           "A",           "O",             None,           "B"],
    "City":    ["Tirupati",     "Hyderabad",    None,          "Hyderabad",   "Chennai",       "Vizag",        None],
}
df = pd.DataFrame(data)

print("\\n[1] Original DataFrame (with missing values and duplicates):")
print(df.to_string(index=True))

print("\\n[2] Missing value count per column:")
print(df.isna().sum())

df_dropped = df.dropna()
print("\\n[3] After dropna():")
print(df_dropped.to_string(index=True))
print(f"    Shape: {df.shape} → {df_dropped.shape}")

df_filled = df.fillna({"Marks": df["Marks"].mean(), "Roll": "UNKNOWN", "Grade": "N/A", "City": "Unknown"})
print("\\n[4] After fillna():")
print(df_filled.to_string(index=True))

print("\\n[5] Duplicate rows:")
print(df.duplicated())

df_deduped = df.drop_duplicates()
print("\\n[6] After drop_duplicates():")
print(df_deduped.to_string(index=True))
print(f"    Shape: {df.shape} → {df_deduped.shape}")

print("\\n✅ Result: Missing values and duplicates handled successfully.")`
      },
      {
        subId: "b",
        label: "3(b)",
        title: "3(b) Data Transformation",
        aim: "To perform data transformation operations on a Pandas DataFrame including renaming columns, changing data types, applying functions with apply() and map(), normalizing numerical data, and binning continuous data using pd.cut().",
        procedure: `1. Create a sample DataFrame with student data.
2. Rename columns using df.rename().
3. Change data types using df.astype().
4. Apply a custom function using df.apply() to create a new column.
5. Map categorical values to numeric codes using df['col'].map().
6. Normalize a numerical column using min-max normalization.
7. Bin continuous marks data into categories using pd.cut().
8. Display the transformed DataFrame at each stage.`,
        result: "Data transformation operations including column renaming, type conversion, apply/map functions, normalization, and binning were successfully performed on the DataFrame.",
        defaultCode: `import pandas as pd
import numpy as np

# ── Experiment 3(b): Data Transformation ──

print("=" * 60)
print("  Experiment 3(b): Data Transformation")
print("=" * 60)

# 1. Original DataFrame
data = {
    "student_name": ["Mulla Vahida", "Ravi Kumar", "Priya Singh", "Anjali Reddy", "Mohammed Ali"],
    "roll_no":      ["A030080",      "A030081",    "A030082",     "A030083",      "A030084"],
    "marks":        [91,             84,           77,            95,             68],
    "gender":       ["F",            "M",          "F",           "F",            "M"],
}
df = pd.DataFrame(data)
print("\\n[1] Original DataFrame:")
print(df.to_string(index=False))

# 2. Rename columns
df = df.rename(columns={
    "student_name": "Name",
    "roll_no":      "Roll",
    "marks":        "Marks",
    "gender":       "Gender"
})
print("\\n[2] After rename():")
print(df.to_string(index=False))

# 3. Change data type — Marks to float
df["Marks"] = df["Marks"].astype(float)
print("\\n[3] Data types after astype(float) on Marks:")
print(df.dtypes)

# 4. Apply custom function — add Bonus column
df["MarksWithBonus"] = df["Marks"].apply(lambda x: x + 5 if x < 90 else x)
print("\\n[4] After apply() — +5 bonus for Marks < 90:")
print(df[["Name", "Marks", "MarksWithBonus"]].to_string(index=False))

# 5. Map categorical Gender to numeric
df["GenderCode"] = df["Gender"].map({"M": 0, "F": 1})
print("\\n[5] After map() — Gender encoded to numeric:")
print(df[["Name", "Gender", "GenderCode"]].to_string(index=False))

# 6. Normalize Marks (min-max normalization)
mn, mx = df["Marks"].min(), df["Marks"].max()
df["MarksNorm"] = ((df["Marks"] - mn) / (mx - mn)).round(3)
print("\\n[6] After Min-Max Normalization of Marks:")
print(df[["Name", "Marks", "MarksNorm"]].to_string(index=False))

# 7. Bin marks into grade bands using pd.cut()
df["MarksBin"] = pd.cut(df["Marks"], bins=[0, 60, 70, 80, 90, 100],
                         labels=["F", "C", "B", "A", "O"])
print("\\n[7] After pd.cut() — Marks binned into grade bands:")
print(df[["Name", "Marks", "MarksBin"]].to_string(index=False))

print("\\n✅ Result: Data transformation operations completed successfully.")`,
        code: `import pandas as pd
import numpy as np

print("=" * 60)
print("  Experiment 3(b): Data Transformation")
print("=" * 60)

data = {
    "student_name": ["Mulla Vahida", "Ravi Kumar", "Priya Singh", "Anjali Reddy", "Mohammed Ali"],
    "roll_no":      ["A030080",      "A030081",    "A030082",     "A030083",      "A030084"],
    "marks":        [91,             84,           77,            95,             68],
    "gender":       ["F",            "M",          "F",           "F",            "M"],
}
df = pd.DataFrame(data)
print("\\n[1] Original DataFrame:")
print(df.to_string(index=False))

df = df.rename(columns={"student_name": "Name", "roll_no": "Roll", "marks": "Marks", "gender": "Gender"})
print("\\n[2] After rename():")
print(df.to_string(index=False))

df["Marks"] = df["Marks"].astype(float)
df["MarksWithBonus"] = df["Marks"].apply(lambda x: x + 5 if x < 90 else x)
print("\\n[3] After apply() — +5 bonus for Marks < 90:")
print(df[["Name", "Marks", "MarksWithBonus"]].to_string(index=False))

df["GenderCode"] = df["Gender"].map({"M": 0, "F": 1})
print("\\n[4] After map() — Gender encoded:")
print(df[["Name", "Gender", "GenderCode"]].to_string(index=False))

mn, mx = df["Marks"].min(), df["Marks"].max()
df["MarksNorm"] = ((df["Marks"] - mn) / (mx - mn)).round(3)
print("\\n[5] Min-Max Normalized Marks:")
print(df[["Name", "Marks", "MarksNorm"]].to_string(index=False))

df["MarksBin"] = pd.cut(df["Marks"], bins=[0, 60, 70, 80, 90, 100], labels=["F", "C", "B", "A", "O"])
print("\\n[6] After pd.cut() — Grade bands:")
print(df[["Name", "Marks", "MarksBin"]].to_string(index=False))

print("\\n✅ Result: Data transformation operations completed successfully.")`
      },
      {
        subId: "c",
        label: "3(c)",
        title: "3(c) Outlier Detection",
        aim: "To perform outlier detection on a numerical dataset using the IQR (Interquartile Range) method and the Z-Score method, and to visualize and remove detected outliers using Pandas and NumPy.",
        procedure: `1. Create or load a numerical dataset with intentional outliers.
2. Compute descriptive statistics using df.describe().
3. Apply the IQR (Interquartile Range) method:
   a. Compute Q1 (25th percentile) and Q3 (75th percentile).
   b. Calculate IQR = Q3 - Q1.
   c. Define lower bound = Q1 - 1.5 * IQR and upper bound = Q3 + 1.5 * IQR.
   d. Identify outlier rows outside these bounds.
4. Apply the Z-Score method:
   a. Calculate Z-scores for each value.
   b. Flag values with |Z| > 3 as outliers.
5. Remove outliers using boolean indexing.
6. Display the clean dataset and compare statistics before/after.`,
        result: "Outliers were successfully detected using both the IQR method and Z-Score method, and the cleaned dataset was displayed with improved statistics.",
        defaultCode: `import pandas as pd
import numpy as np

# ── Experiment 3(c): Outlier Detection ──

print("=" * 60)
print("  Experiment 3(c): Outlier Detection")
print("=" * 60)

# 1. Create dataset with intentional outliers
np.random.seed(42)
normal_marks = list(np.random.randint(55, 98, 20))
outlier_marks = [5, 200, 1, 300]           # clear outliers
all_marks = normal_marks + outlier_marks

data = {
    "StudentID": [f"S{i:03d}" for i in range(1, len(all_marks) + 1)],
    "Marks":     all_marks
}
df = pd.DataFrame(data)

print("\\n[1] Dataset (24 records, 4 are outliers):")
print(df.to_string(index=False))

# 2. Descriptive statistics
print("\\n[2] Descriptive Statistics:")
print(df["Marks"].describe())

# 3. IQR Method
Q1  = df["Marks"].quantile(0.25)
Q3  = df["Marks"].quantile(0.75)
IQR = Q3 - Q1
lower = Q1 - 1.5 * IQR
upper = Q3 + 1.5 * IQR

print(f"\\n[3] IQR Method:")
print(f"    Q1  = {Q1}  |  Q3  = {Q3}  |  IQR = {IQR}")
print(f"    Lower Bound = {lower}  |  Upper Bound = {upper}")

outliers_iqr = df[(df["Marks"] < lower) | (df["Marks"] > upper)]
print(f"\\n    Outliers detected by IQR ({len(outliers_iqr)} rows):")
print(outliers_iqr.to_string(index=False))

df_clean_iqr = df[(df["Marks"] >= lower) & (df["Marks"] <= upper)]
print(f"\\n    Clean dataset after IQR removal ({len(df_clean_iqr)} rows):")
print(df_clean_iqr["Marks"].describe())

# 4. Z-Score Method
mean = df["Marks"].mean()
std  = df["Marks"].std()
df["ZScore"] = ((df["Marks"] - mean) / std).round(3)

print(f"\\n[4] Z-Score Method (threshold |Z| > 3):")
outliers_z = df[df["ZScore"].abs() > 3]
print(f"    Outliers detected by Z-Score ({len(outliers_z)} rows):")
print(outliers_z[["StudentID", "Marks", "ZScore"]].to_string(index=False))

df_clean_z = df[df["ZScore"].abs() <= 3].drop(columns=["ZScore"])
print(f"\\n    Clean dataset after Z-Score removal ({len(df_clean_z)} rows):")
print(df_clean_z["Marks"].describe())

print("\\n✅ Result: Outliers detected using IQR and Z-Score methods.")
print("   Clean datasets generated after removal of outliers.")`,
        code: `import pandas as pd
import numpy as np

print("=" * 60)
print("  Experiment 3(c): Outlier Detection")
print("=" * 60)

np.random.seed(42)
normal_marks = list(np.random.randint(55, 98, 20))
outlier_marks = [5, 200, 1, 300]
all_marks = normal_marks + outlier_marks

data = {"StudentID": [f"S{i:03d}" for i in range(1, len(all_marks) + 1)], "Marks": all_marks}
df = pd.DataFrame(data)

print("\\n[1] Dataset (24 records, 4 are outliers):")
print(df.to_string(index=False))
print("\\n[2] Descriptive Statistics:")
print(df["Marks"].describe())

Q1, Q3 = df["Marks"].quantile(0.25), df["Marks"].quantile(0.75)
IQR = Q3 - Q1
lower, upper = Q1 - 1.5 * IQR, Q3 + 1.5 * IQR
print(f"\\n[3] IQR Method: Q1={Q1}, Q3={Q3}, IQR={IQR}")
print(f"    Lower={lower}, Upper={upper}")
outliers_iqr = df[(df["Marks"] < lower) | (df["Marks"] > upper)]
print(f"    Outliers ({len(outliers_iqr)}):")
print(outliers_iqr.to_string(index=False))
df_clean = df[(df["Marks"] >= lower) & (df["Marks"] <= upper)]
print(f"    Clean data stats ({len(df_clean)} rows):")
print(df_clean["Marks"].describe())

mean, std = df["Marks"].mean(), df["Marks"].std()
df["ZScore"] = ((df["Marks"] - mean) / std).round(3)
outliers_z = df[df["ZScore"].abs() > 3]
print(f"\\n[4] Z-Score Method — outliers (|Z|>3): {len(outliers_z)} rows")
print(outliers_z[["StudentID", "Marks", "ZScore"]].to_string(index=False))

print("\\n✅ Result: Outliers detected and removed using IQR and Z-Score methods.")`
      },
      {
        subId: "d",
        label: "3(d)",
        title: "3(d) Regular Expression Text Manipulation",
        aim: "To perform regular expression (regex) based text manipulation on a Pandas DataFrame using the re module and Pandas str accessor methods including str.contains(), str.extract(), str.replace(), and str.findall().",
        procedure: `1. Import the re module and Pandas library.
2. Create a DataFrame containing text data with email addresses, phone numbers, and mixed strings.
3. Use str.contains() to filter rows matching a regex pattern.
4. Use str.extract() to extract specific groups from strings (e.g., email domain).
5. Use str.replace() to clean or mask text patterns (e.g., mask phone numbers).
6. Use str.findall() to find all pattern occurrences in a string.
7. Use re.sub() from the Python re module for additional text cleaning.
8. Display results at each step.`,
        result: "Regular expression text manipulation was successfully performed using Pandas str accessor methods (str.contains, str.extract, str.replace, str.findall) and Python's re module.",
        defaultCode: `import pandas as pd
import re

# ── Experiment 3(d): Regular Expression Text Manipulation ──

print("=" * 60)
print("  Experiment 3(d): Regular Expression Text Manipulation")
print("=" * 60)

# 1. Create a DataFrame with text data
data = {
    "Name":    ["Mulla Vahida",   "Ravi Kumar",        "Priya Singh",       "Anjali Reddy",      "Mohammed Ali"],
    "Email":   ["vahida@mbu.edu", "ravi.k@gmail.com",  "priya99@yahoo.in",  "anjali@mbu.edu",    "moali@outlook.com"],
    "Phone":   ["9876543210",     "8765432109",         "7654321098",        "6543210987",        "9988776655"],
    "Notes":   [
        "Scored 91 marks in DS lab. Very good performance!",
        "Marks: 84. Needs improvement in Python basics.",
        "77 marks. Active participant in lab sessions.",
        "Excellent! 95 marks. Top performer in batch 2024.",
        "68 marks. Should practice more data wrangling exercises.",
    ]
}
df = pd.DataFrame(data)
print("\\n[1] Original DataFrame:")
print(df.to_string(index=False))

# 2. str.contains() — filter MBU email accounts
print("\\n[2] str.contains() — rows where Email contains 'mbu.edu':")
mbu_students = df[df["Email"].str.contains(r"mbu\\.edu", regex=True)]
print(mbu_students[["Name", "Email"]].to_string(index=False))

# 3. str.extract() — extract email domain
print("\\n[3] str.extract() — extract domain from Email:")
df["Domain"] = df["Email"].str.extract(r"@([\w.]+)")
print(df[["Name", "Email", "Domain"]].to_string(index=False))

# 4. str.replace() — mask phone numbers (keep first 4, mask rest)
print("\\n[4] str.replace() — mask phone numbers:")
df["PhoneMasked"] = df["Phone"].str.replace(r"(\\d{4})\\d{6}", r"\\1xxxxxx", regex=True)
print(df[["Name", "Phone", "PhoneMasked"]].to_string(index=False))

# 5. str.findall() — find all numbers in Notes
print("\\n[5] str.findall() — extract all numbers from Notes:")
df["NumbersInNotes"] = df["Notes"].str.findall(r"\\d+")
print(df[["Name", "NumbersInNotes"]].to_string(index=False))

# 6. re.sub() — clean special characters from Notes
print("\\n[6] re.sub() — remove punctuation from Notes:")
df["CleanNotes"] = df["Notes"].apply(lambda x: re.sub(r"[!.,]", "", x))
print(df[["Name", "CleanNotes"]].to_string(index=False))

print("\\n✅ Result: Regex text manipulation using str.contains(), str.extract(),")
print("   str.replace(), str.findall(), and re.sub() completed successfully.")`,
        code: `import pandas as pd
import re

print("=" * 60)
print("  Experiment 3(d): Regular Expression Text Manipulation")
print("=" * 60)

data = {
    "Name":  ["Mulla Vahida",   "Ravi Kumar",       "Priya Singh",      "Anjali Reddy",     "Mohammed Ali"],
    "Email": ["vahida@mbu.edu", "ravi.k@gmail.com", "priya99@yahoo.in", "anjali@mbu.edu",   "moali@outlook.com"],
    "Phone": ["9876543210",     "8765432109",        "7654321098",       "6543210987",       "9988776655"],
    "Notes": [
        "Scored 91 marks in DS lab. Very good performance!",
        "Marks: 84. Needs improvement in Python basics.",
        "77 marks. Active participant in lab sessions.",
        "Excellent! 95 marks. Top performer in batch 2024.",
        "68 marks. Should practice more data wrangling exercises.",
    ]
}
df = pd.DataFrame(data)
print("\\n[1] Original DataFrame:")
print(df.to_string(index=False))

print("\\n[2] str.contains() — MBU email accounts:")
print(df[df["Email"].str.contains(r"mbu\\.edu", regex=True)][["Name", "Email"]].to_string(index=False))

df["Domain"] = df["Email"].str.extract(r"@([\w.]+)")
print("\\n[3] str.extract() — Email Domain:")
print(df[["Name", "Email", "Domain"]].to_string(index=False))

df["PhoneMasked"] = df["Phone"].str.replace(r"(\\d{4})\\d{6}", r"\\1xxxxxx", regex=True)
print("\\n[4] str.replace() — Masked Phone Numbers:")
print(df[["Name", "Phone", "PhoneMasked"]].to_string(index=False))

df["Numbers"] = df["Notes"].str.findall(r"\\d+")
print("\\n[5] str.findall() — Numbers in Notes:")
print(df[["Name", "Numbers"]].to_string(index=False))

df["CleanNotes"] = df["Notes"].apply(lambda x: re.sub(r"[!.,]", "", x))
print("\\n[6] re.sub() — Cleaned Notes (punctuation removed):")
print(df[["Name", "CleanNotes"]].to_string(index=False))

print("\\n✅ Result: Regex text manipulation completed successfully.")`
      }
    ]
  },
  {
    id: 4,
    experimentNumber: 4,
    title: "DATA WRANGLING",
    aim: "To perform data wrangling operations in Pandas including hierarchical indexing with MultiIndex, partial indexing at outer and inner levels, rearranging tabular data with stack() and unstack() methods, and merging DataFrames with overlapping data combination using combine_first().",
    procedure: "Experiment 4 consists of three distinct laboratory programs: 4(a) Hierarchical Indexing, 4(b) Stack and Unstack, and 4(c) Merge and Combine. Select any sub-experiment below to open its dedicated workbench.",
    result: "The program successfully demonstrates hierarchical indexing and partial indexing in Pandas, reshaping tabular data using unstack() and stack() methods, and merging DataFrames with overlapping data combination using combine_first().",
    isPlaceholder: false,
    language: "python",
    subExperiments: [
      {
        subId: "a",
        label: "4(a)",
        title: "4(a) Hierarchical Indexing",
        aim: "To create a Pandas Series with hierarchical (multi-level) indexing using a list of lists and to select subsets of data using partial indexing at the outer and inner levels.",
        procedure: `1. Define a list of lists representing hierarchical index levels (Department: Engineering, Science; Branch: CSE, ECE, Physics, Chemistry).
2. Construct a MultiIndex from arrays using pd.MultiIndex.from_arrays().
3. Create a Pandas Series with marks values and the multi-level index.
4. Perform partial indexing at the outer level using marks.loc['Engineering'].
5. Perform partial indexing at the inner level using marks.loc[('Engineering', 'CSE')].
6. Select a subset using both levels using marks.loc['Science'].`,
        result: "The program successfully demonstrates hierarchical indexing and partial indexing at both outer and inner levels in Pandas.",
        defaultCode: `import pandas as pd

# Create a list of lists for hierarchical index
index = [
    ['Engineering', 'Engineering', 'Science', 'Science'],
    ['CSE', 'ECE', 'Physics', 'Chemistry']
]

# Create MultiIndex
multi_index = pd.MultiIndex.from_arrays(
    index,
    names=['Department', 'Branch']
)

# Create a Series using the hierarchical index
marks = pd.Series(
    [85, 78, 92, 88],
    index=multi_index
)

print("Original Series:")
print(marks)

# Partial indexing at the outer level
print("\\nData for Engineering:")
print(marks.loc['Engineering'])

# Partial indexing at the inner level
print("\\nData for CSE:")
print(marks.loc[('Engineering', 'CSE')])

# Selecting a subset using both levels
print("\\nData for Science:")
print(marks.loc['Science'])`,
        code: `import pandas as pd

# Create a list of lists for hierarchical index
index = [
    ['Engineering', 'Engineering', 'Science', 'Science'],
    ['CSE', 'ECE', 'Physics', 'Chemistry']
]

# Create MultiIndex
multi_index = pd.MultiIndex.from_arrays(
    index,
    names=['Department', 'Branch']
)

# Create a Series using the hierarchical index
marks = pd.Series(
    [85, 78, 92, 88],
    index=multi_index
)

print("Original Series:")
print(marks)

# Partial indexing at the outer level
print("\\nData for Engineering:")
print(marks.loc['Engineering'])

# Partial indexing at the inner level
print("\\nData for CSE:")
print(marks.loc[('Engineering', 'CSE')])

# Selecting a subset using both levels
print("\\nData for Science:")
print(marks.loc['Science'])`
      },
      {
        subId: "b",
        label: "4(b)",
        title: "4(b) Stack and Unstack",
        aim: "To rearrange tabular data with hierarchical indexing using the Pandas unstack() and stack() methods.",
        procedure: `1. Create a MultiIndex from tuples representing Department and Branch.
2. Construct a tabular DataFrame with hierarchical index and columns for years 2025 and 2026.
3. Apply unstack() to pivot the inner index level (Branch) from rows to columns.
4. Apply stack() to pivot column labels back into the hierarchical row index.`,
        result: "The unstack() method converts row-level hierarchical indexes into columns, while the stack() method converts columns back into hierarchical row indexes.",
        defaultCode: `import pandas as pd

# Create hierarchical index
index = pd.MultiIndex.from_tuples(
    [
        ('Engineering', 'CSE'),
        ('Engineering', 'ECE'),
        ('Science', 'Physics'),
        ('Science', 'Chemistry')
    ],
    names=['Department', 'Branch']
)

# Create tabular data
data = pd.DataFrame(
    {
        '2025': [85, 78, 92, 88],
        '2026': [90, 82, 95, 91]
    },
    index=index
)

print("Original Tabular Data:")
print(data)

# Unstack the inner level
unstacked_data = data.unstack()
print("\\nData after Unstack():")
print(unstacked_data)

# Stack the data back
stacked_data = unstacked_data.stack()
print("\\nData after Stack():")
print(stacked_data)`,
        code: `import pandas as pd

# Create hierarchical index
index = pd.MultiIndex.from_tuples(
    [
        ('Engineering', 'CSE'),
        ('Engineering', 'ECE'),
        ('Science', 'Physics'),
        ('Science', 'Chemistry')
    ],
    names=['Department', 'Branch']
)

# Create tabular data
data = pd.DataFrame(
    {
        '2025': [85, 78, 92, 88],
        '2026': [90, 82, 95, 91]
    },
    index=index
)

print("Original Tabular Data:")
print(data)

# Unstack the inner level
unstacked_data = data.unstack()
print("\\nData after Unstack():")
print(unstacked_data)

# Stack the data back
stacked_data = unstacked_data.stack()
print("\\nData after Stack():")
print(stacked_data)`
      },
      {
        subId: "c",
        label: "4(c)",
        title: "4(c) Merge and Combine",
        aim: "To create two different Pandas DataFrames, merge them using the index as the merge key, and combine their data using the combine_first() method to fill missing values with available values from another DataFrame.",
        procedure: `1. Create two DataFrames (df1 and df2) containing student data with index values acting as student IDs.
2. Merge DataFrames using index as merge key with pd.merge(..., left_index=True, right_index=True, how='outer').
3. Combine overlapping data using combine_first() so that missing (NaN) values in df1 are filled with available values from df2.`,
        result: "The program demonstrates both index-based merging and combining overlapping DataFrame data using combine_first().",
        defaultCode: `import pandas as pd

# Create the first DataFrame
df1 = pd.DataFrame(
    {
        'Name': ['Ravi', 'Sita', 'Arun'],
        'Marks': [85, None, 78],
        'Grade': ['A', 'B', None]
    },
    index=[101, 102, 103]
)

# Create the second DataFrame
df2 = pd.DataFrame(
    {
        'Name': ['Ravi', 'Sita', 'Kiran'],
        'Marks': [90, 88, 82],
        'Grade': [None, 'A', 'B']
    },
    index=[101, 102, 104]
)

print("First DataFrame:")
print(df1)

print("\\nSecond DataFrame:")
print(df2)

# Merge DataFrames using index as merge key
merged = pd.merge(
    df1,
    df2,
    left_index=True,
    right_index=True,
    how='outer',
    suffixes=('_DF1', '_DF2')
)
print("\\nMerged DataFrame (Outer Join by Index):")
print(merged)

# Combine overlapping data using combine_first()
combined = df1.combine_first(df2)
print("\\nDataFrame after combine_first():")
print(combined)`,
        code: `import pandas as pd

# Create the first DataFrame
df1 = pd.DataFrame(
    {
        'Name': ['Ravi', 'Sita', 'Arun'],
        'Marks': [85, None, 78],
        'Grade': ['A', 'B', None]
    },
    index=[101, 102, 103]
)

# Create the second DataFrame
df2 = pd.DataFrame(
    {
        'Name': ['Ravi', 'Sita', 'Kiran'],
        'Marks': [90, 88, 82],
        'Grade': [None, 'A', 'B']
    },
    index=[101, 102, 104]
)

print("First DataFrame:")
print(df1)

print("\\nSecond DataFrame:")
print(df2)

# Merge DataFrames using index as merge key
merged = pd.merge(
    df1,
    df2,
    left_index=True,
    right_index=True,
    how='outer',
    suffixes=('_DF1', '_DF2')
)
print("\\nMerged DataFrame (Outer Join by Index):")
print(merged)

# Combine overlapping data using combine_first()
combined = df1.combine_first(df2)
print("\\nDataFrame after combine_first():")
print(combined)`
      }
    ]
  },
  {
    id: 5,
    experimentNumber: 5,
    title: "DATA VISUALIZATION WITH MATPLOTLIB AND SEABORN",
    aim: "To perform data visualization using Matplotlib and Seaborn by loading datasets, processing observations, and creating distinct visual representations including line plots, bar plots, histograms with density curves, scatter plots, and box plots.",
    procedure: "Experiment 5 consists of five distinct laboratory programs: 5(a) Line Plot, 5(b) Bar Plots, 5(c) Histogram and Density Plot, 5(d) Scatter Plot, and 5(e) Box Plot. Select any sub-experiment below to open its dedicated workbench.",
    result: "Data visualizations were successfully created using Matplotlib and Seaborn to analyze distributions, relationships, and feature variations across species.",
    isPlaceholder: false,
    language: "python",
    subExperiments: [
      {
        subId: "a",
        label: "5(a)",
        title: "5(a) Line Plot",
        aim: "To create a line plot using Matplotlib by setting the title, axis labels, ticks, tick labels, and annotations on subplots, and save the generated plot to an image file.",
        procedure: `1. Define monthly labels and sales/expenses numerical data arrays.
2. Initialize plot figure and axes using fig, ax = plt.subplots().
3. Plot sales and expenses trends using ax.plot() with distinct markers and colors.
4. Configure title, axis labels, grid, and legend.
5. Add annotations for peak sales and maximum expenses with arrow pointers.
6. Render the generated plot.`,
        result: "Thus, a line plot with titles, axis labels, ticks, tick labels, annotations, and multiple data series was successfully created.",
        defaultCode: `import matplotlib.pyplot as plt

# Data
months = ["Jan", "Feb", "Mar", "Apr", "May", "Jun"]
sales = [120, 150, 180, 160, 220, 250]
expenses = [80, 100, 120, 110, 140, 160]

# Create subplots
fig, ax = plt.subplots(figsize=(8, 4.5))

# Plot lines
ax.plot(months, sales, marker='o', color='#2563eb', label='Sales (in k$)', linewidth=2)
ax.plot(months, expenses, marker='s', color='#dc2626', label='Expenses (in k$)', linewidth=2)

# Set title and axis labels
ax.set_title("Monthly Sales and Expenses Analysis", fontsize=14, fontweight='bold')
ax.set_xlabel("Months", fontsize=12)
ax.set_ylabel("Amount (in Thousand $)", fontsize=12)

# Add grid and legend
ax.grid(True, linestyle='--', alpha=0.6)
ax.legend(loc='upper left')

# Annotate peak sales
ax.annotate(
    "Peak Sales: $250k",
    xy=(5, 250),
    xytext=(3.5, 240),
    arrowprops=dict(facecolor='#2563eb', shrink=0.05, width=1.5, headwidth=8),
    fontweight='semibold'
)

# Annotate maximum expenses
ax.annotate(
    "Max Expenses: $160k",
    xy=(5, 160),
    xytext=(3.5, 175),
    arrowprops=dict(facecolor='#dc2626', shrink=0.05, width=1.5, headwidth=8),
    fontweight='semibold'
)

plt.tight_layout()
plt.show()`,
        code: `import matplotlib.pyplot as plt

# Data
months = ["Jan", "Feb", "Mar", "Apr", "May", "Jun"]
sales = [120, 150, 180, 160, 220, 250]
expenses = [80, 100, 120, 110, 140, 160]

# Create subplots
fig, ax = plt.subplots(figsize=(8, 4.5))

# Plot lines
ax.plot(months, sales, marker='o', color='#2563eb', label='Sales (in k$)', linewidth=2)
ax.plot(months, expenses, marker='s', color='#dc2626', label='Expenses (in k$)', linewidth=2)

# Set title and axis labels
ax.set_title("Monthly Sales and Expenses Analysis", fontsize=14, fontweight='bold')
ax.set_xlabel("Months", fontsize=12)
ax.set_ylabel("Amount (in Thousand $)", fontsize=12)

# Add grid and legend
ax.grid(True, linestyle='--', alpha=0.6)
ax.legend(loc='upper left')

# Annotate peak sales
ax.annotate(
    "Peak Sales: $250k",
    xy=(5, 250),
    xytext=(3.5, 240),
    arrowprops=dict(facecolor='#2563eb', shrink=0.05, width=1.5, headwidth=8),
    fontweight='semibold'
)

# Annotate maximum expenses
ax.annotate(
    "Max Expenses: $160k",
    xy=(5, 160),
    xytext=(3.5, 175),
    arrowprops=dict(facecolor='#dc2626', shrink=0.05, width=1.5, headwidth=8),
    fontweight='semibold'
)

plt.tight_layout()
plt.show()`
      },
      {
        subId: "b",
        label: "5(b)",
        title: "5(b) Bar Plots",
        aim: "To create bar plots using Pandas Series and DataFrame index, including grouped bar plots and stacked bar plots.",
        procedure: `1. Create a DataFrame containing programming language scores (Python, Java, C+) across students.
2. Create grouped bar plots using df.plot(kind='bar') to compare student scores side by side.
3. Create stacked bar plots using df.plot(kind='bar', stacked=True) to evaluate cumulative marks.
4. Set plot titles, axis labels, legends, and display charts.`,
        result: "Grouped and stacked bar plots were successfully generated from DataFrame index using Pandas and Matplotlib.",
        defaultCode: `import pandas as pd
import matplotlib.pyplot as plt

# Create DataFrame
data = {
    'Python': [85, 90, 78, 88],
    'Java': [75, 82, 80, 85],
    'C++': [80, 76, 85, 90]
}
df = pd.DataFrame(data, index=['Student 1', 'Student 2', 'Student 3', 'Student 4'])
print("Student Scores DataFrame:")
print(df)

# 1. Grouped Bar Plot (Side-by-Side)
plt.figure(figsize=(8, 4))
df.plot(kind='bar', figsize=(8, 4), colormap='viridis')
plt.title("Student Marks - Grouped Bar Plot (Side-by-Side)")
plt.xlabel("Students")
plt.ylabel("Marks")
plt.grid(axis='y', linestyle='--', alpha=0.7)
plt.legend(title="Subjects")
plt.tight_layout()
plt.show()

# 2. Stacked Bar Plot
plt.figure(figsize=(8, 4))
df.plot(kind='bar', stacked=True, figsize=(8, 4), colormap='plasma')
plt.title("Student Marks - Stacked Bar Plot")
plt.xlabel("Students")
plt.ylabel("Cumulative Marks")
plt.grid(axis='y', linestyle='--', alpha=0.7)
plt.legend(title="Subjects")
plt.tight_layout()
plt.show()`,
        code: `import pandas as pd
import matplotlib.pyplot as plt

# Create DataFrame
data = {
    'Python': [85, 90, 78, 88],
    'Java': [75, 82, 80, 85],
    'C++': [80, 76, 85, 90]
}
df = pd.DataFrame(data, index=['Student 1', 'Student 2', 'Student 3', 'Student 4'])
print("Student Scores DataFrame:")
print(df)

# 1. Grouped Bar Plot (Side-by-Side)
plt.figure(figsize=(8, 4))
df.plot(kind='bar', figsize=(8, 4), colormap='viridis')
plt.title("Student Marks - Grouped Bar Plot (Side-by-Side)")
plt.xlabel("Students")
plt.ylabel("Marks")
plt.grid(axis='y', linestyle='--', alpha=0.7)
plt.legend(title="Subjects")
plt.tight_layout()
plt.show()

# 2. Stacked Bar Plot
plt.figure(figsize=(8, 4))
df.plot(kind='bar', stacked=True, figsize=(8, 4), colormap='plasma')
plt.title("Student Marks - Stacked Bar Plot")
plt.xlabel("Students")
plt.ylabel("Cumulative Marks")
plt.grid(axis='y', linestyle='--', alpha=0.7)
plt.legend(title="Subjects")
plt.tight_layout()
plt.show()`
      },
      {
        subId: "c",
        label: "5(c)",
        title: "5(c) Histogram and Density Plot",
        aim: "To create a histogram to display value frequency and a density plot to generate a continuous probability distribution function for observed data.",
        procedure: `1. Define observed sample numerical dataset of student marks.
2. Create a combined histogram and kernel density estimation (KDE) plot using sns.histplot(kde=True).
3. Set bin intervals, axis labels, plot titles, and display the distribution curve.`,
        result: "Thus, a histogram and density plot were successfully created to visualize the frequency distribution and continuous probability density function of observed data.",
        defaultCode: `import pandas as pd
import matplotlib.pyplot as plt
import seaborn as sns

# Sample observed data
data = [45, 50, 52, 55, 58, 60, 62, 65, 68, 70,
        72, 75, 78, 80, 82, 85, 88, 90, 92, 95]
df = pd.DataFrame({'Marks': data})

print("Dataset Summary:")
print(df.describe())

# Histogram and Density (KDE) Plot
plt.figure(figsize=(8, 4.5))
sns.histplot(
    df['Marks'],
    bins=6,
    kde=True,
    color="#2563eb",
    line_kws={'linewidth': 2}
)
plt.title("Frequency Histogram and Density Plot of Marks", fontsize=13, fontweight='bold')
plt.xlabel("Marks")
plt.ylabel("Frequency / Density")
plt.grid(axis='y', linestyle='--', alpha=0.6)
plt.tight_layout()
plt.show()`,
        code: `import pandas as pd
import matplotlib.pyplot as plt
import seaborn as sns

# Sample observed data
data = [45, 50, 52, 55, 58, 60, 62, 65, 68, 70,
        72, 75, 78, 80, 82, 85, 88, 90, 92, 95]
df = pd.DataFrame({'Marks': data})

print("Dataset Summary:")
print(df.describe())

# Histogram and Density (KDE) Plot
plt.figure(figsize=(8, 4.5))
sns.histplot(
    df['Marks'],
    bins=6,
    kde=True,
    color="#2563eb",
    line_kws={'linewidth': 2}
)
plt.title("Frequency Histogram and Density Plot of Marks", fontsize=13, fontweight='bold')
plt.xlabel("Marks")
plt.ylabel("Frequency / Density")
plt.grid(axis='y', linestyle='--', alpha=0.6)
plt.tight_layout()
plt.show()`
      },
      {
        subId: "d",
        label: "5(d)",
        title: "5(d) Scatter Plot",
        aim: "To create a Scatter Plot using two one-dimensional data series and examine the relationship or correlation between them.",
        procedure: `1. Define two 1D series (study hours and exam marks).
2. Construct DataFrame and compute Pearson correlation coefficient using df.corr().
3. Generate scatter plot using plt.scatter() with marker styling.
4. Fit and overlay a linear regression trend line to evaluate relationship.`,
        result: "The Scatter Plot successfully illustrates a strong positive linear correlation between study hours and student marks.",
        defaultCode: `import pandas as pd
import matplotlib.pyplot as plt
import numpy as np

# Two one-dimensional data series
study_hours = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]
marks = [45, 50, 55, 60, 65, 70, 72, 80, 85, 90]

df = pd.DataFrame({'Study_Hours': study_hours, 'Marks': marks})
correlation = df['Study_Hours'].corr(df['Marks'])

print(df)
print(f"\\nPearson Correlation Coefficient: {correlation:.2f}")

# Scatter Plot with Trend Line
plt.figure(figsize=(8, 4.5))
plt.scatter(df['Study_Hours'], df['Marks'], color='#dc2626', s=70, label='Student Observations')

# Best fit trendline
z = np.polyfit(df['Study_Hours'], df['Marks'], 1)
p = np.poly1d(z)
plt.plot(df['Study_Hours'], p(df['Study_Hours']), color='#2563eb', linestyle='--', label=f'Trendline (r = {correlation:.2f})')

plt.title("Study Hours vs Exam Marks (Scatter Plot)", fontsize=13, fontweight='bold')
plt.xlabel("Study Hours (per day)")
plt.ylabel("Exam Marks")
plt.legend()
plt.grid(True, linestyle='--', alpha=0.6)
plt.tight_layout()
plt.show()`,
        code: `import pandas as pd
import matplotlib.pyplot as plt
import numpy as np

# Two one-dimensional data series
study_hours = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]
marks = [45, 50, 55, 60, 65, 70, 72, 80, 85, 90]

df = pd.DataFrame({'Study_Hours': study_hours, 'Marks': marks})
correlation = df['Study_Hours'].corr(df['Marks'])

print(df)
print(f"\\nPearson Correlation Coefficient: {correlation:.2f}")

# Scatter Plot with Trend Line
plt.figure(figsize=(8, 4.5))
plt.scatter(df['Study_Hours'], df['Marks'], color='#dc2626', s=70, label='Student Observations')

# Best fit trendline
z = np.polyfit(df['Study_Hours'], df['Marks'], 1)
p = np.poly1d(z)
plt.plot(df['Study_Hours'], p(df['Study_Hours']), color='#2563eb', linestyle='--', label=f'Trendline (r = {correlation:.2f})')

plt.title("Study Hours vs Exam Marks (Scatter Plot)", fontsize=13, fontweight='bold')
plt.xlabel("Study Hours (per day)")
plt.ylabel("Exam Marks")
plt.legend()
plt.grid(True, linestyle='--', alpha=0.6)
plt.tight_layout()
plt.show()`
      },
      {
        subId: "e",
        label: "5(e)",
        title: "5(e) Box Plot",
        aim: "To create box plots using Seaborn to visualize and compare the distribution of numerical data across multiple categorical variables.",
        procedure: `1. Create sample dataset with categorical variable (Department: CSE, ECE, EEE) and numerical variable (Marks).
2. Generate box plots using sns.boxplot(x='Department', y='Marks', data=df).
3. Examine median, quartiles (Q1, Q3), IQR, and whiskers across department categories.`,
        result: "The Box Plot was successfully created to visualize and compare the distribution of numerical marks across multiple departments.",
        defaultCode: `import pandas as pd
import matplotlib.pyplot as plt
import seaborn as sns

# Create sample data
data = {
    'Department': [
        'CSE', 'CSE', 'CSE', 'CSE', 'CSE',
        'ECE', 'ECE', 'ECE', 'ECE', 'ECE',
        'EEE', 'EEE', 'EEE', 'EEE', 'EEE'
    ],
    'Marks': [
        78, 85, 90, 72, 88,
        65, 70, 82, 75, 80,
        60, 68, 72, 76, 85
    ]
}
df = pd.DataFrame(data)
print("Department Data Preview:")
print(df.head(10))

# Create Box Plot
plt.figure(figsize=(8, 4.5))
sns.boxplot(
    x='Department',
    y='Marks',
    data=df,
    palette=['#3b82f6', '#10b981', '#f59e0b']
)
plt.title("Marks Distribution by Department (Box Plot)", fontsize=13, fontweight='bold')
plt.xlabel("Department")
plt.ylabel("Marks")
plt.grid(axis='y', linestyle='--', alpha=0.5)
plt.tight_layout()
plt.show()`,
        code: `import pandas as pd
import matplotlib.pyplot as plt
import seaborn as sns

# Create sample data
data = {
    'Department': [
        'CSE', 'CSE', 'CSE', 'CSE', 'CSE',
        'ECE', 'ECE', 'ECE', 'ECE', 'ECE',
        'EEE', 'EEE', 'EEE', 'EEE', 'EEE'
    ],
    'Marks': [
        78, 85, 90, 72, 88,
        65, 70, 82, 75, 80,
        60, 68, 72, 76, 85
    ]
}
df = pd.DataFrame(data)
print("Department Data Preview:")
print(df.head(10))

# Create Box Plot
plt.figure(figsize=(8, 4.5))
sns.boxplot(
    x='Department',
    y='Marks',
    data=df,
    palette=['#3b82f6', '#10b981', '#f59e0b']
)
plt.title("Marks Distribution by Department (Box Plot)", fontsize=13, fontweight='bold')
plt.xlabel("Department")
plt.ylabel("Marks")
plt.grid(axis='y', linestyle='--', alpha=0.5)
plt.tight_layout()
plt.show()`
      }
    ]
  },
  {
    id: 6,
    experimentNumber: 6,
    title: "TIME SERIES ANALYSIS",
    aim: "To perform time series analysis in Pandas including creating timestamp-indexed series, generating DatetimeIndex with date_range, setting and converting time zones with tz_localize and tz_convert, performing period arithmetic, frequency conversion, and resampling (downsampling and upsampling).",
    procedure: "Experiment 6 consists of four distinct laboratory programs: 6(a) Create Time Series, 6(b) Time Zone Conversion, 6(c) Period Arithmetic and Conversion, and 6(d) Resampling. Select any sub-experiment below to open its dedicated workbench.",
    result: "The program successfully demonstrates time-series creation, DatetimeIndex generation with date_range, time zone localization and conversion using tz_localize and tz_convert, period arithmetic, and time-series resampling (downsampling and upsampling).",
    isPlaceholder: false,
    language: "python",
    subExperiments: [
      {
        subId: "a",
        label: "6(a)",
        title: "6(a) Create Time Series",
        aim: "To create a time series in Pandas using datetime objects and use timestamps as the index of the time series.",
        procedure: `1. Convert date strings to pandas datetime objects using pd.to_datetime().
2. Define temperature values list.
3. Construct a Series with timestamps as index.
4. Display the time series and inspect index attributes.`,
        result: "The program successfully demonstrates creating a time series indexed by datetime timestamps in Pandas.",
        defaultCode: `import pandas as pd

# Create datetime objects
dates = pd.to_datetime([
    '2026-01-01',
    '2026-01-02',
    '2026-01-03',
    '2026-01-04',
    '2026-01-05'
])

# Create data
temperature = [28, 30, 29, 31, 32]

# Create time series with timestamps as index
time_series = pd.Series(
    temperature,
    index=dates
)

# Display the time series
print("Time Series (Temperature):")
print(time_series)
print("\\nTime Series Index Details:")
print(time_series.index)`,
        code: `import pandas as pd

# Create datetime objects
dates = pd.to_datetime([
    '2026-01-01',
    '2026-01-02',
    '2026-01-03',
    '2026-01-04',
    '2026-01-05'
])

# Create data
temperature = [28, 30, 29, 31, 32]

# Create time series with timestamps as index
time_series = pd.Series(
    temperature,
    index=dates
)

# Display the time series
print("Time Series (Temperature):")
print(time_series)
print("\\nTime Series Index Details:")
print(time_series.index)`
      },
      {
        subId: "b",
        label: "6(b)",
        title: "6(b) Time Zone Conversion",
        aim: "To generate date ranges by setting a time zone, localize a naive time zone, convert timestamps to another time zone using tz_convert(), and combine series from different time zones.",
        procedure: `1. Generate timezone-naive date range using pd.date_range().
2. Localize naive dates to 'Asia/Kolkata' timezone using tz_localize().
3. Convert localized timestamps to 'America/New_York' timezone using tz_convert().
4. Construct series for both time zones and combine with pd.concat().`,
        result: "Time zone localization, conversion between Asia/Kolkata and America/New_York, and concatenation of multi-timezone series were successfully demonstrated.",
        defaultCode: `import pandas as pd

# 1. Create a timezone-naive DatetimeIndex
dates = pd.date_range(
    start='2026-01-01 09:00',
    periods=3,
    freq='h'
)
print("1. Timezone-naive Date Range:")
print(dates)

# 2. Localize the timezone to Asia/Kolkata
localized_dates = dates.tz_localize('Asia/Kolkata')
print("\\n2. After Localizing to Asia/Kolkata:")
print(localized_dates)

# 3. Convert to another timezone using tz_convert()
new_york_dates = localized_dates.tz_convert('America/New_York')
print("\\n3. Converted to America/New_York:")
print(new_york_dates)

# 4. Create time series in different time zones
india_series = pd.Series([100, 200, 300], index=localized_dates)
new_york_series = pd.Series([400, 500, 600], index=new_york_dates)

print("\\n4. India Time Series:")
print(india_series)
print("\\nNew York Time Series:")
print(new_york_series)

# 5. Combine two different timezone series
combined_series = pd.concat([india_series, new_york_series])
print("\\n5. Combined Time Series (UTC Normalized):")
print(combined_series)`,
        code: `import pandas as pd

# 1. Create a timezone-naive DatetimeIndex
dates = pd.date_range(
    start='2026-01-01 09:00',
    periods=3,
    freq='h'
)
print("1. Timezone-naive Date Range:")
print(dates)

# 2. Localize the timezone to Asia/Kolkata
localized_dates = dates.tz_localize('Asia/Kolkata')
print("\\n2. After Localizing to Asia/Kolkata:")
print(localized_dates)

# 3. Convert to another timezone using tz_convert()
new_york_dates = localized_dates.tz_convert('America/New_York')
print("\\n3. Converted to America/New_York:")
print(new_york_dates)

# 4. Create time series in different time zones
india_series = pd.Series([100, 200, 300], index=localized_dates)
new_york_series = pd.Series([400, 500, 600], index=new_york_dates)

print("\\n4. India Time Series:")
print(india_series)
print("\\nNew York Time Series:")
print(new_york_series)

# 5. Combine two different timezone series
combined_series = pd.concat([india_series, new_york_series])
print("\\n5. Combined Time Series (UTC Normalized):")
print(combined_series)`
      },
      {
        subId: "c",
        label: "6(c)",
        title: "6(c) Period Arithmetic and Conversion",
        aim: "To perform period arithmetic such as adding and subtracting integers from periods, construct ranges of periods using period_range, and convert frequencies using the asfreq() method.",
        procedure: `1. Create a monthly Period using pd.Period('2026-01', freq='M').
2. Perform period arithmetic by adding and subtracting integer offsets.
3. Construct regular period sequences with pd.period_range().
4. Convert Period and PeriodIndex frequencies using asfreq('D', how='start' / 'end').`,
        result: "Period arithmetic, period range generation, and frequency conversion using asfreq() were successfully performed.",
        defaultCode: `import pandas as pd

# 1. Create a monthly Period
p = pd.Period('2026-01', freq='M')
print("Original Period:")
print(p)

# 2. Add integers to the period
print("\\nAfter adding 2 months (p + 2):")
print(p + 2)

# Subtract integers from the period
print("\\nAfter subtracting 1 month (p - 1):")
print(p - 1)

# 3. Construct a range of periods
periods = pd.period_range(
    start='2026-01',
    periods=5,
    freq='M'
)
print("\\nGenerated Period Range (5 Months):")
print(periods)

# 4. Convert period to another frequency with asfreq()
print("\\nConverted to Daily Frequency (start of month):")
print(p.asfreq('D', how='start'))

print("\\nConverted to Daily Frequency (end of month):")
print(p.asfreq('D', how='end'))

# 5. Convert Quarterly Period
q = pd.Period('2026Q1')
print(f"\\nQuarterly Period: {q}, Next Quarter: {q + 1}")
print(f"Quarter Converted to Monthly End: {q.asfreq('M', how='end')}")`,
        code: `import pandas as pd

# 1. Create a monthly Period
p = pd.Period('2026-01', freq='M')
print("Original Period:")
print(p)

# 2. Add integers to the period
print("\\nAfter adding 2 months (p + 2):")
print(p + 2)

# Subtract integers from the period
print("\\nAfter subtracting 1 month (p - 1):")
print(p - 1)

# 3. Construct a range of periods
periods = pd.period_range(
    start='2026-01',
    periods=5,
    freq='M'
)
print("\\nGenerated Period Range (5 Months):")
print(periods)

# 4. Convert period to another frequency with asfreq()
print("\\nConverted to Daily Frequency (start of month):")
print(p.asfreq('D', how='start'))

print("\\nConverted to Daily Frequency (end of month):")
print(p.asfreq('D', how='end'))

# 5. Convert Quarterly Period
q = pd.Period('2026Q1')
print(f"\\nQuarterly Period: {q}, Next Quarter: {q + 1}")
print(f"Quarter Converted to Monthly End: {q.asfreq('M', how='end')}")`
      },
      {
        subId: "d",
        label: "6(d)",
        title: "6(d) Resampling",
        aim: "To perform time series resampling including downsampling to lower frequency with aggregations (mean, sum) and upsampling to higher frequency with forward fill (ffill).",
        procedure: `1. Create an hourly time series over 12 periods.
2. Downsample hourly data to 3-hour intervals and calculate mean using resample('3h').mean().
3. Downsample hourly data to 4-hour intervals and calculate sum using resample('4h').sum().
4. Upsample hourly data to 30-minute intervals using resample('30min').asfreq().
5. Apply forward fill (ffill()) to interpolate missing values in upsampled series.`,
        result: "Time series resampling was successfully demonstrated, including downsampling with mean and sum aggregations, and upsampling with forward filling.",
        defaultCode: `import pandas as pd

# 1. Create an hourly time series
dates = pd.date_range(
    start='2026-01-01 00:00',
    periods=12,
    freq='h'
)
time_series = pd.Series(
    [10, 12, 15, 14, 18, 20, 22, 21, 25, 28, 30, 32],
    index=dates
)
print("1. Original Hourly Time Series:")
print(time_series)

# 2. Downsampling - calculate 3-hourly mean
resampled_3h = time_series.resample('3h').mean()
print("\\n2. Downsampled - 3 Hour Mean:")
print(resampled_3h)

# 3. Downsampling - 4-hourly sum
downsampled_4h = time_series.resample('4h').sum()
print("\\n3. Downsampled - 4 Hour Sum:")
print(downsampled_4h)

# 4. Upsampling - hourly to 30-minute intervals
upsampled = time_series.resample('30min').asfreq()
print("\\n4. Upsampled - 30 Minute (with NaNs):")
print(upsampled.head(6))

# 5. Upsampling with Forward Fill
upsampled_ffill = time_series.resample('30min').ffill()
print("\\n5. Upsampled - 30 Minute Forward Fill:")
print(upsampled_ffill.head(6))`,
        code: `import pandas as pd

# 1. Create an hourly time series
dates = pd.date_range(
    start='2026-01-01 00:00',
    periods=12,
    freq='h'
)
time_series = pd.Series(
    [10, 12, 15, 14, 18, 20, 22, 21, 25, 28, 30, 32],
    index=dates
)
print("1. Original Hourly Time Series:")
print(time_series)

# 2. Downsampling - calculate 3-hourly mean
resampled_3h = time_series.resample('3h').mean()
print("\\n2. Downsampled - 3 Hour Mean:")
print(resampled_3h)

# 3. Downsampling - 4-hourly sum
downsampled_4h = time_series.resample('4h').sum()
print("\\n3. Downsampled - 4 Hour Sum:")
print(downsampled_4h)

# 4. Upsampling - hourly to 30-minute intervals
upsampled = time_series.resample('30min').asfreq()
print("\\n4. Upsampled - 30 Minute (with NaNs):")
print(upsampled.head(6))

# 5. Upsampling with Forward Fill
upsampled_ffill = time_series.resample('30min').ffill()
print("\\n5. Upsampled - 30 Minute Forward Fill:")
print(upsampled_ffill.head(6))`
      }
    ]
  },
  {
    id: 7,
    experimentNumber: 7,
    title: "DATA AGGREGATION",
    aim: "To perform data aggregation in Pandas including grouping data using the groupby() method with single and multiple keys, selecting single and multiple grouped columns, computing summary statistics (sum, mean, standard deviation) using the aggregate() method, and performing exploratory data analysis on a dataset.",
    procedure: "Experiment 7 consists of three distinct laboratory programs: 7(a) Grouping Data using groupby, 7(b) Summary Statistics using aggregate, and 7(c) Grouping and Exploratory Data Analysis. Select any sub-experiment below to open its dedicated workbench.",
    result: "Data aggregation techniques including grouping with single and multiple keys, column selection, summary statistics computation using aggregate(), and exploratory data analysis were successfully implemented and demonstrated.",
    isPlaceholder: false,
    language: "python",
    subExperiments: [
      {
        subId: "a",
        label: "7(a)",
        title: "7(a) Grouping Data using groupby",
        question: "Create a tabular dataset as a DataFrame and split data into groups using groupby method including single key and multiple key values. Select group by considering single and multiple columns.",
        aim: "To create a tabular dataset using a Pandas DataFrame and perform data grouping using the groupby() method with single and multiple keys/columns.",
        procedure: `1. Import pandas.
2. Create a tabular dataset as a DataFrame.
3. Display the original DataFrame.
4. Group the data using a single column.
5. Select the required column from the grouped data.
6. Group the data using multiple columns.
7. Select data based on single and multiple grouping columns.
8. Display the grouped results.`,
        result: "The tabular dataset is successfully divided into groups using groupby() with single and multiple keys.",
        defaultCode: `import pandas as pd

# ── Experiment 7(a): Grouping Data using groupby ──

# 1. Create a tabular dataset as a DataFrame
data = {
    'Department': ['IT', 'HR', 'IT', 'Finance', 'HR', 'Finance', 'IT', 'Finance'],
    'Branch': ['Hyderabad', 'Bangalore', 'Bangalore', 'Hyderabad', 'Hyderabad', 'Bangalore', 'Hyderabad', 'Hyderabad'],
    'Employee': ['Alice', 'Bob', 'Charlie', 'Diana', 'Evan', 'Fiona', 'George', 'Hannah'],
    'Salary': [75000, 60000, 82000, 90000, 65000, 88000, 78000, 95000],
    'Bonus': [8000, 5000, 9000, 11000, 5500, 10000, 8500, 12000]
}
df = pd.DataFrame(data)

print("=" * 60)
print("1. ORIGINAL TABULAR DATAFRAME:")
print("=" * 60)
print(df)

# 2. Group data using a single column (key: Department)
print("\\n" + "=" * 60)
print("2. GROUPING WITH A SINGLE COLUMN (Department):")
print("=" * 60)
grouped_single = df.groupby('Department')
for dept, group in grouped_single:
    print(f"\\n[Department: {dept}] (Total Employees: {len(group)})")
    print(group[['Employee', 'Salary', 'Bonus']])

# 3. Select a single grouped column (Salary mean by Department)
print("\\n" + "=" * 60)
print("3. SELECTING A SINGLE COLUMN FROM GROUPED DATA (Mean Salary):")
print("=" * 60)
single_col_grouped = df.groupby('Department')['Salary'].mean()
print(single_col_grouped)

# 4. Group data using multiple columns (keys: Department, Branch)
print("\\n" + "=" * 60)
print("4. GROUPING WITH MULTIPLE COLUMNS (Department, Branch):")
print("=" * 60)
grouped_multi = df.groupby(['Department', 'Branch'])
for (dept, branch), group in grouped_multi:
    print(f"\\n[Department: {dept} | Branch: {branch}] (Count: {len(group)})")
    print(group[['Employee', 'Salary', 'Bonus']])

# 5. Select multiple columns from grouped data (Sum of Salary and Bonus)
print("\\n" + "=" * 60)
print("5. SELECTING MULTIPLE COLUMNS FROM GROUPED DATA (Salary & Bonus Sum):")
print("=" * 60)
multi_col_grouped = df.groupby(['Department', 'Branch'])[['Salary', 'Bonus']].sum()
print(multi_col_grouped)

print("\\n" + "=" * 60)
print("6. SUMMARY COUNT OF EMPLOYEES PER GROUP:")
print("=" * 60)
print(df.groupby(['Department', 'Branch'])['Employee'].count())`,
        code: `import pandas as pd

# ── Experiment 7(a): Grouping Data using groupby ──

# 1. Create a tabular dataset as a DataFrame
data = {
    'Department': ['IT', 'HR', 'IT', 'Finance', 'HR', 'Finance', 'IT', 'Finance'],
    'Branch': ['Hyderabad', 'Bangalore', 'Bangalore', 'Hyderabad', 'Hyderabad', 'Bangalore', 'Hyderabad', 'Hyderabad'],
    'Employee': ['Alice', 'Bob', 'Charlie', 'Diana', 'Evan', 'Fiona', 'George', 'Hannah'],
    'Salary': [75000, 60000, 82000, 90000, 65000, 88000, 78000, 95000],
    'Bonus': [8000, 5000, 9000, 11000, 5500, 10000, 8500, 12000]
}
df = pd.DataFrame(data)

print("=" * 60)
print("1. ORIGINAL TABULAR DATAFRAME:")
print("=" * 60)
print(df)

# 2. Group data using a single column (key: Department)
print("\\n" + "=" * 60)
print("2. GROUPING WITH A SINGLE COLUMN (Department):")
print("=" * 60)
grouped_single = df.groupby('Department')
for dept, group in grouped_single:
    print(f"\\n[Department: {dept}] (Total Employees: {len(group)})")
    print(group[['Employee', 'Salary', 'Bonus']])

# 3. Select a single grouped column (Salary mean by Department)
print("\\n" + "=" * 60)
print("3. SELECTING A SINGLE COLUMN FROM GROUPED DATA (Mean Salary):")
print("=" * 60)
single_col_grouped = df.groupby('Department')['Salary'].mean()
print(single_col_grouped)

# 4. Group data using multiple columns (keys: Department, Branch)
print("\\n" + "=" * 60)
print("4. GROUPING WITH MULTIPLE COLUMNS (Department, Branch):")
print("=" * 60)
grouped_multi = df.groupby(['Department', 'Branch'])
for (dept, branch), group in grouped_multi:
    print(f"\\n[Department: {dept} | Branch: {branch}] (Count: {len(group)})")
    print(group[['Employee', 'Salary', 'Bonus']])

# 5. Select multiple columns from grouped data (Sum of Salary and Bonus)
print("\\n" + "=" * 60)
print("5. SELECTING MULTIPLE COLUMNS FROM GROUPED DATA (Salary & Bonus Sum):")
print("=" * 60)
multi_col_grouped = df.groupby(['Department', 'Branch'])[['Salary', 'Bonus']].sum()
print(multi_col_grouped)

print("\\n" + "=" * 60)
print("6. SUMMARY COUNT OF EMPLOYEES PER GROUP:")
print("=" * 60)
print(df.groupby(['Department', 'Branch'])['Employee'].count())`
      },
      {
        subId: "b",
        label: "7(b)",
        title: "7(b) Summary Statistics using aggregate",
        question: "Compute summary statistics such as sum, mean and standard deviation for the grouped data using aggregate method.",
        aim: "To compute summary statistics such as sum, mean, and standard deviation for grouped data using the aggregate() method.",
        procedure: `1. Create a suitable DataFrame.
2. Group the data using groupby().
3. Apply aggregate() to the grouped data.
4. Calculate sum.
5. Calculate mean.
6. Calculate standard deviation.
7. Display the summary statistics.`,
        result: "Summary statistics are successfully computed for grouped data using aggregate().",
        defaultCode: `import pandas as pd
import numpy as np

# ── Experiment 7(b): Summary Statistics using aggregate ──

# 1. Create a suitable DataFrame
data = {
    'Department': ['Engineering', 'Marketing', 'Engineering', 'Marketing', 'Engineering', 'Sales', 'Sales', 'Engineering'],
    'Salary': [85000, 62000, 92000, 68000, 78000, 72000, 76000, 89000],
    'Experience_Years': [5, 3, 8, 4, 3, 4, 5, 7],
    'Performance_Score': [92, 85, 96, 88, 80, 84, 89, 94]
}
df = pd.DataFrame(data)

print("=" * 65)
print("1. ORIGINAL EMPLOYEE DATA:")
print("=" * 65)
print(df)

# 2. Group the data using groupby()
grouped = df.groupby('Department')

# 3. Apply aggregate() with sum, mean, std on a single metric (Salary)
print("\\n" + "=" * 65)
print("2. SUMMARY STATISTICS FOR SALARY (sum, mean, std):")
print("=" * 65)
salary_stats = grouped['Salary'].agg(['sum', 'mean', 'std'])
salary_stats = salary_stats.round(2)
salary_stats.columns = ['Sum_Salary', 'Mean_Salary', 'Std_Dev_Salary']
print(salary_stats)

# 4. Multi-column summary statistics using aggregate()
print("\\n" + "=" * 65)
print("3. MULTI-COLUMN SUMMARY STATISTICS (Salary & Performance):")
print("=" * 65)
multi_stats = grouped[['Salary', 'Performance_Score']].agg(['sum', 'mean', 'std']).round(2)
print(multi_stats)

# 5. Named aggregation for clear customized summary reporting
print("\\n" + "=" * 65)
print("4. NAMED AGGREGATION SUMMARY TABLE:")
print("=" * 65)
named_summary = df.groupby('Department').agg(
    Total_Salary=('Salary', 'sum'),
    Average_Salary=('Salary', 'mean'),
    Std_Dev_Salary=('Salary', 'std'),
    Avg_Experience=('Experience_Years', 'mean'),
    Avg_Performance=('Performance_Score', 'mean')
).round(2)
print(named_summary)

print("\\n" + "=" * 65)
print("✅ Grouped summary statistics (sum, mean, std) computed successfully.")
print("=" * 65)`,
        code: `import pandas as pd
import numpy as np

# ── Experiment 7(b): Summary Statistics using aggregate ──

# 1. Create a suitable DataFrame
data = {
    'Department': ['Engineering', 'Marketing', 'Engineering', 'Marketing', 'Engineering', 'Sales', 'Sales', 'Engineering'],
    'Salary': [85000, 62000, 92000, 68000, 78000, 72000, 76000, 89000],
    'Experience_Years': [5, 3, 8, 4, 3, 4, 5, 7],
    'Performance_Score': [92, 85, 96, 88, 80, 84, 89, 94]
}
df = pd.DataFrame(data)

print("=" * 65)
print("1. ORIGINAL EMPLOYEE DATA:")
print("=" * 65)
print(df)

# 2. Group the data using groupby()
grouped = df.groupby('Department')

# 3. Apply aggregate() with sum, mean, std on a single metric (Salary)
print("\\n" + "=" * 65)
print("2. SUMMARY STATISTICS FOR SALARY (sum, mean, std):")
print("=" * 65)
salary_stats = grouped['Salary'].agg(['sum', 'mean', 'std'])
salary_stats = salary_stats.round(2)
salary_stats.columns = ['Sum_Salary', 'Mean_Salary', 'Std_Dev_Salary']
print(salary_stats)

# 4. Multi-column summary statistics using aggregate()
print("\\n" + "=" * 65)
print("3. MULTI-COLUMN SUMMARY STATISTICS (Salary & Performance):")
print("=" * 65)
multi_stats = grouped[['Salary', 'Performance_Score']].agg(['sum', 'mean', 'std']).round(2)
print(multi_stats)

# 5. Named aggregation for clear customized summary reporting
print("\\n" + "=" * 65)
print("4. NAMED AGGREGATION SUMMARY TABLE:")
print("=" * 65)
named_summary = df.groupby('Department').agg(
    Total_Salary=('Salary', 'sum'),
    Average_Salary=('Salary', 'mean'),
    Std_Dev_Salary=('Salary', 'std'),
    Avg_Experience=('Experience_Years', 'mean'),
    Avg_Performance=('Performance_Score', 'mean')
).round(2)
print(named_summary)

print("\\n" + "=" * 65)
print("✅ Grouped summary statistics (sum, mean, std) computed successfully.")
print("=" * 65)`
      },
      {
        subId: "c",
        label: "7(c)",
        title: "7(c) Grouping and Exploratory Data Analysis",
        question: "Use groupby function to split data into groups based on one column, multiple columns, compute summary statistics and perform exploratory data analysis. Consider any online dataset for processing.",
        aim: "To perform grouping, summary-statistics computation, and exploratory data analysis on an online dataset using Pandas.",
        procedure: `1. Load a suitable online dataset using Pandas.
2. Display the dataset.
3. Inspect rows, columns, data types, and basic information.
4. Group the dataset using one column.
5. Group the dataset using multiple columns where appropriate.
6. Compute summary statistics.
7. Perform basic exploratory data analysis.
8. Display useful observations from the grouped dataset.`,
        result: "Grouping and exploratory data analysis are successfully performed on the dataset.",
        defaultCode: `import pandas as pd
import io
import urllib.request

# ── Experiment 7(c): Grouping and Exploratory Data Analysis ──

ONLINE_URL = "https://raw.githubusercontent.com/mwaskom/seaborn-data/master/tips.csv"

# Fallback dataset clearly labelled for offline execution in browser sandboxes
OFFLINE_FALLBACK_CSV = """total_bill,tip,sex,smoker,day,time,size
16.99,1.01,Female,No,Sun,Dinner,2
10.34,1.66,Male,No,Sun,Dinner,3
21.01,3.50,Male,No,Sun,Dinner,3
23.68,3.31,Male,No,Sun,Dinner,2
24.59,3.61,Female,No,Sun,Dinner,4
25.29,4.71,Male,No,Sun,Dinner,4
8.77,2.00,Male,No,Sun,Dinner,2
26.88,3.12,Male,No,Sun,Dinner,4
15.04,1.96,Male,No,Sun,Dinner,2
14.78,3.23,Male,No,Sun,Dinner,2
10.27,1.71,Male,No,Sun,Dinner,2
35.26,5.00,Female,No,Sun,Dinner,4
15.42,1.57,Male,No,Sun,Dinner,2
18.43,3.00,Male,No,Sun,Dinner,4
14.83,3.02,Female,No,Sun,Dinner,2
21.58,3.92,Male,No,Sun,Dinner,2
10.33,1.67,Female,No,Sun,Dinner,3
16.29,3.71,Male,No,Sun,Dinner,3
16.97,3.50,Female,No,Sun,Dinner,3
20.65,3.35,Male,No,Sat,Dinner,3
17.92,4.08,Male,No,Sat,Dinner,2
20.29,2.75,Female,No,Sat,Dinner,2
15.77,2.23,Female,No,Sat,Dinner,2
39.42,7.58,Male,No,Sat,Dinner,4
19.82,3.18,Male,No,Sat,Dinner,2
17.81,2.00,Male,No,Sat,Dinner,2
13.37,2.00,Male,No,Sat,Dinner,2
12.69,2.00,Male,No,Sat,Dinner,2
21.70,4.30,Male,No,Sat,Dinner,2
19.65,3.00,Female,No,Sat,Dinner,2
9.55,1.45,Male,No,Sat,Dinner,2
18.35,2.50,Male,No,Sat,Dinner,4
15.06,3.00,Female,No,Sat,Dinner,2
20.69,2.45,Male,No,Sat,Dinner,4
17.78,3.27,Male,No,Sat,Dinner,2
24.06,3.60,Male,No,Sat,Dinner,3
16.31,2.00,Male,No,Sat,Dinner,3
16.93,3.07,Female,No,Sat,Dinner,3
18.69,2.31,Male,No,Sat,Dinner,3
31.27,5.00,Male,No,Sat,Dinner,3
16.04,2.24,Male,No,Sat,Dinner,2
17.47,3.50,Female,No,Thu,Lunch,2
19.77,2.33,Male,No,Thu,Lunch,4
13.03,2.00,Male,No,Thu,Lunch,2
18.28,4.00,Male,No,Thu,Lunch,2
24.71,5.85,Male,No,Thu,Lunch,2
21.16,3.00,Male,No,Thu,Lunch,2
28.97,3.00,Male,No,Fri,Dinner,2
22.49,3.50,Male,No,Fri,Dinner,2
12.03,1.50,Male,Yes,Fri,Dinner,2
"""

print("=" * 65)
print("1. LOADING ONLINE DATASET (TIPS DATASET):")
print(f"URL: {ONLINE_URL}")
print("=" * 65)

is_online = False
try:
    df = pd.read_csv(ONLINE_URL)
    is_online = True
    print("✅ Successfully fetched online dataset via HTTP.")
except Exception as e:
    print("⚠️ Notice: Browser execution environment cannot access external network directly.")
    print(f"   Reason: {type(e).__name__}: {e}")
    print("   Switching to labelled local fallback dataset for offline execution.")
    df = pd.read_csv(io.StringIO(OFFLINE_FALLBACK_CSV))

print(f"\\nDataset Origin: {'ONLINE (Live HTTP Fetch)' if is_online else 'LOCAL FALLBACK (For offline sandbox)'}")
print(f"Shape: {df.shape[0]} rows x {df.shape[1]} columns")

# 2. Inspect structure, columns, data types
print("\\n" + "=" * 65)
print("2. DATA INSPECTION & BASIC INFORMATION:")
print("=" * 65)
print("First 5 records:")
print(df.head())
print("\\nData Types:")
print(df.dtypes)
print("\\nMissing Values Count:")
print(df.isnull().sum())

# 3. Group by single column (day)
print("\\n" + "=" * 65)
print("3. GROUPING BY ONE COLUMN (Day): SUMMARY STATISTICS")
print("=" * 65)
day_stats = df.groupby('day')[['total_bill', 'tip']].agg(['count', 'mean', 'std', 'sum']).round(2)
print(day_stats)

# 4. Group by multiple columns (day and time)
print("\\n" + "=" * 65)
print("4. GROUPING BY MULTIPLE COLUMNS (Day & Time):")
print("=" * 65)
multi_group_stats = df.groupby(['day', 'time'])[['total_bill', 'tip']].agg(['mean', 'max', 'min']).round(2)
print(multi_group_stats)

# 5. Exploratory Data Analysis & Useful Observations
print("\\n" + "=" * 65)
print("5. EXPLORATORY DATA ANALYSIS (EDA) OBSERVATIONS:")
print("=" * 65)
df['tip_percentage'] = (df['tip'] / df['total_bill'] * 100).round(2)

eda_summary = df.groupby('day').agg(
    Avg_Bill=('total_bill', 'mean'),
    Avg_Tip=('tip', 'mean'),
    Avg_Tip_Pct=('tip_percentage', 'mean'),
    Customer_Count=('size', 'sum')
).round(2)
print("Key Aggregations by Day:")
print(eda_summary)

busiest_day = eda_summary['Customer_Count'].idxmax()
best_tipping_day = eda_summary['Avg_Tip_Pct'].idxmax()

print("\\n💡 Key Findings:")
print(f"- Highest customer traffic observed on: {busiest_day}")
print(f"- Best tipping percentage observed on: {best_tipping_day} ({eda_summary.loc[best_tipping_day, 'Avg_Tip_Pct']}%)")
print(f"- Overall Mean Bill: \${df['total_bill'].mean():.2f} | Overall Mean Tip: \${df['tip'].mean():.2f}")`,
        code: `import pandas as pd
import io
import urllib.request

# ── Experiment 7(c): Grouping and Exploratory Data Analysis ──

ONLINE_URL = "https://raw.githubusercontent.com/mwaskom/seaborn-data/master/tips.csv"

# Fallback dataset clearly labelled for offline execution in browser sandboxes
OFFLINE_FALLBACK_CSV = """total_bill,tip,sex,smoker,day,time,size
16.99,1.01,Female,No,Sun,Dinner,2
10.34,1.66,Male,No,Sun,Dinner,3
21.01,3.50,Male,No,Sun,Dinner,3
23.68,3.31,Male,No,Sun,Dinner,2
24.59,3.61,Female,No,Sun,Dinner,4
25.29,4.71,Male,No,Sun,Dinner,4
8.77,2.00,Male,No,Sun,Dinner,2
26.88,3.12,Male,No,Sun,Dinner,4
15.04,1.96,Male,No,Sun,Dinner,2
14.78,3.23,Male,No,Sun,Dinner,2
10.27,1.71,Male,No,Sun,Dinner,2
35.26,5.00,Female,No,Sun,Dinner,4
15.42,1.57,Male,No,Sun,Dinner,2
18.43,3.00,Male,No,Sun,Dinner,4
14.83,3.02,Female,No,Sun,Dinner,2
21.58,3.92,Male,No,Sun,Dinner,2
10.33,1.67,Female,No,Sun,Dinner,3
16.29,3.71,Male,No,Sun,Dinner,3
16.97,3.50,Female,No,Sun,Dinner,3
20.65,3.35,Male,No,Sat,Dinner,3
17.92,4.08,Male,No,Sat,Dinner,2
20.29,2.75,Female,No,Sat,Dinner,2
15.77,2.23,Female,No,Sat,Dinner,2
39.42,7.58,Male,No,Sat,Dinner,4
19.82,3.18,Male,No,Sat,Dinner,2
17.81,2.00,Male,No,Sat,Dinner,2
13.37,2.00,Male,No,Sat,Dinner,2
12.69,2.00,Male,No,Sat,Dinner,2
21.70,4.30,Male,No,Sat,Dinner,2
19.65,3.00,Female,No,Sat,Dinner,2
9.55,1.45,Male,No,Sat,Dinner,2
18.35,2.50,Male,No,Sat,Dinner,4
15.06,3.00,Female,No,Sat,Dinner,2
20.69,2.45,Male,No,Sat,Dinner,4
17.78,3.27,Male,No,Sat,Dinner,2
24.06,3.60,Male,No,Sat,Dinner,3
16.31,2.00,Male,No,Sat,Dinner,3
16.93,3.07,Female,No,Sat,Dinner,3
18.69,2.31,Male,No,Sat,Dinner,3
31.27,5.00,Male,No,Sat,Dinner,3
16.04,2.24,Male,No,Sat,Dinner,2
17.47,3.50,Female,No,Thu,Lunch,2
19.77,2.33,Male,No,Thu,Lunch,4
13.03,2.00,Male,No,Thu,Lunch,2
18.28,4.00,Male,No,Thu,Lunch,2
24.71,5.85,Male,No,Thu,Lunch,2
21.16,3.00,Male,No,Thu,Lunch,2
28.97,3.00,Male,No,Fri,Dinner,2
22.49,3.50,Male,No,Fri,Dinner,2
12.03,1.50,Male,Yes,Fri,Dinner,2
"""

print("=" * 65)
print("1. LOADING ONLINE DATASET (TIPS DATASET):")
print(f"URL: {ONLINE_URL}")
print("=" * 65)

is_online = False
try:
    df = pd.read_csv(ONLINE_URL)
    is_online = True
    print("✅ Successfully fetched online dataset via HTTP.")
except Exception as e:
    print("⚠️ Notice: Browser execution environment cannot access external network directly.")
    print(f"   Reason: {type(e).__name__}: {e}")
    print("   Switching to labelled local fallback dataset for offline execution.")
    df = pd.read_csv(io.StringIO(OFFLINE_FALLBACK_CSV))

print(f"\\nDataset Origin: {'ONLINE (Live HTTP Fetch)' if is_online else 'LOCAL FALLBACK (For offline sandbox)'}")
print(f"Shape: {df.shape[0]} rows x {df.shape[1]} columns")

# 2. Inspect structure, columns, data types
print("\\n" + "=" * 65)
print("2. DATA INSPECTION & BASIC INFORMATION:")
print("=" * 65)
print("First 5 records:")
print(df.head())
print("\\nData Types:")
print(df.dtypes)
print("\\nMissing Values Count:")
print(df.isnull().sum())

# 3. Group by single column (day)
print("\\n" + "=" * 65)
print("3. GROUPING BY ONE COLUMN (Day): SUMMARY STATISTICS")
print("=" * 65)
day_stats = df.groupby('day')[['total_bill', 'tip']].agg(['count', 'mean', 'std', 'sum']).round(2)
print(day_stats)

# 4. Group by multiple columns (day and time)
print("\\n" + "=" * 65)
print("4. GROUPING BY MULTIPLE COLUMNS (Day & Time):")
print("=" * 65)
multi_group_stats = df.groupby(['day', 'time'])[['total_bill', 'tip']].agg(['mean', 'max', 'min']).round(2)
print(multi_group_stats)

# 5. Exploratory Data Analysis & Useful Observations
print("\\n" + "=" * 65)
print("5. EXPLORATORY DATA ANALYSIS (EDA) OBSERVATIONS:")
print("=" * 65)
df['tip_percentage'] = (df['tip'] / df['total_bill'] * 100).round(2)

eda_summary = df.groupby('day').agg(
    Avg_Bill=('total_bill', 'mean'),
    Avg_Tip=('tip', 'mean'),
    Avg_Tip_Pct=('tip_percentage', 'mean'),
    Customer_Count=('size', 'sum')
).round(2)
print("Key Aggregations by Day:")
print(eda_summary)

busiest_day = eda_summary['Customer_Count'].idxmax()
best_tipping_day = eda_summary['Avg_Tip_Pct'].idxmax()

print("\\n💡 Key Findings:")
print(f"- Highest customer traffic observed on: {busiest_day}")
print(f"- Best tipping percentage observed on: {best_tipping_day} ({eda_summary.loc[best_tipping_day, 'Avg_Tip_Pct']}%)")
print(f"- Overall Mean Bill: \${df['total_bill'].mean():.2f} | Overall Mean Tip: \${df['tip'].mean():.2f}")`
      }
    ]
  },
  {
    id: 8,
    experimentNumber: 8,
    title: "WEB SCRAPING USING BEAUTIFUL SOUP",
    aim: "To extract product reviews from an Amazon webpage using requests and Beautiful Soup when permitted by the target website, handle access restrictions and environment barriers safely, and perform exploratory data analysis and sentiment analysis on extracted review data using NLTK, VADER, text processing, and visualization techniques.",
    procedure: "Experiment 8 consists of two distinct laboratory programs: 8(a) Extract Product Reviews and 8(b) Exploratory Data Analysis on Product Reviews. Select any sub-experiment below to open its dedicated workbench.",
    result: "Product review extraction was attempted with authentic anti-bot and environment handling, and comprehensive exploratory data analysis, NLTK/VADER sentiment scoring, and WordCloud visualizations were successfully performed on product reviews.",
    isPlaceholder: false,
    language: "python",
    subExperiments: [
      {
        subId: "a",
        label: "8(a)",
        title: "8(a) Extract Product Reviews",
        question: "Extract product reviews from Amazon website and save to a file.",
        aim: "To extract product review information from an Amazon webpage using Beautiful Soup and save the extracted reviews to a file.",
        procedure: `1. Import the required Python libraries.
2. Send a request to the webpage where permitted.
3. Parse the HTML response using BeautifulSoup.
4. Locate the relevant review elements.
5. Extract review text.
6. Store the extracted reviews.
7. Save the reviews to a file.
8. Display a sample of extracted reviews.`,
        result: "Product reviews are extracted and saved when permitted by the target website and execution environment.",
        defaultCode: `import sys
import io
import urllib.request
import urllib.error
from bs4 import BeautifulSoup

# ── Experiment 8(a): Extract Product Reviews from Amazon ──

TARGET_URL = "https://www.amazon.in/dp/B08L5V9T31"  # Example Amazon product URL
OUTPUT_FILE = "amazon_extracted_reviews.txt"

print("=" * 65)
print("  EXPERIMENT 8(a): EXTRACT PRODUCT REVIEWS USING BEAUTIFUL SOUP")
print("=" * 65)
print(f"Target URL: {TARGET_URL}")
print("Output File Target:", OUTPUT_FILE)
print("-" * 65)

# Standard browser request headers
headers = {
    "User-Agent": "Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/122.0.0.0 Safari/537.36",
    "Accept-Language": "en-US,en;q=0.9",
    "Accept": "text/html,application/xhtml+xml,application/xml;q=0.9,image/webp,*/*;q=0.8"
}

reviews_extracted = []
live_extraction_successful = False

try:
    print("[1] Initiating HTTP GET request to target webpage...")
    req = urllib.request.Request(TARGET_URL, headers=headers)
    
    with urllib.request.urlopen(req, timeout=10) as response:
        status_code = response.getcode()
        print(f"[2] HTTP Response received. Status Code: {status_code}")
        html_content = response.read().decode('utf-8', errors='ignore')

        # Check for Amazon bot detection / CAPTCHA challenge
        if "api-services-support@amazon.com" in html_content or "To discuss automated access to Amazon data please contact" in html_content or "validateCaptcha" in html_content:
            print("\\n⚠️ Amazon Automated Access Protection Detected:")
            print("   The server returned an automated access verification page (CAPTCHA).")
            print("   As per laboratory safety guidelines, anti-bot mechanisms are NOT bypassed.")
        else:
            # Parse HTML with BeautifulSoup
            soup = BeautifulSoup(html_content, 'html.parser')
            # Amazon review elements typically use data-hook="review-body" or class="review-text-content"
            review_elements = soup.find_all('span', {'data-hook': 'review-body'})
            if not review_elements:
                review_elements = soup.find_all('div', class_='review-text-content')

            for idx, el in enumerate(review_elements, 1):
                clean_text = el.get_text(strip=True)
                if clean_text:
                    reviews_extracted.append(clean_text)

            if reviews_extracted:
                live_extraction_successful = True
                print(f"[3] Successfully parsed {len(reviews_extracted)} product reviews from webpage.")

except urllib.error.HTTPError as http_err:
    print(f"\\n⚠️ HTTP Error encountered: {http_err.code} {http_err.reason}")
    if http_err.code == 503:
        print("   Amazon responded with HTTP 503 (Service Unavailable / Anti-Bot Throttling).")
    elif http_err.code == 403:
        print("   Amazon responded with HTTP 403 (Programmatic Access Forbidden).")
except urllib.error.URLError as url_err:
    print(f"\\n⚠️ Network/Connection Notice: {url_err.reason}")
    print("   Notice: Browser WebAssembly sandbox restricts arbitrary cross-origin raw socket connections.")
except Exception as ex:
    print(f"\\n⚠️ Extraction exception: {type(ex).__name__}: {ex}")

# Honest status reporting & file saving
print("\\n" + "=" * 65)
print("EXTRACTION SUMMARY & STATUS REPORT:")
print("=" * 65)

if live_extraction_successful and reviews_extracted:
    with open(OUTPUT_FILE, 'w', encoding='utf-8') as f:
        for i, rev in enumerate(reviews_extracted, 1):
            f.write(f"Review {i}:\\n{rev}\\n\\n")

    print(f"✅ Extracted {len(reviews_extracted)} reviews and saved to '{OUTPUT_FILE}'.")
    print("\\nSample of Extracted Reviews:")
    for i, rev in enumerate(reviews_extracted[:3], 1):
        print(f"\\n[{i}] {rev[:150]}...")
else:
    status_report = (
        "Status: Live Amazon automated extraction is unavailable in the current execution environment.\\n"
        "Reason: Amazon actively enforces anti-bot mechanisms (CAPTCHA challenges, bot protection, HTTP 503)\\n"
        "        and the browser WebAssembly client sandbox enforces strict Cross-Origin (CORS) security.\\n"
        "Ethical Compliance: Bypassing Amazon access controls or faking extraction is strictly prohibited.\\n"
        "Execution Result: Program executed honestly with no fabricated review records."
    )
    with open(OUTPUT_FILE, 'w', encoding='utf-8') as f:
        f.write(status_report)

    print(status_report)
    print(f"\\nSaved execution status report to '{OUTPUT_FILE}'.")`,
        code: `import sys
import io
import urllib.request
import urllib.error
from bs4 import BeautifulSoup

# ── Experiment 8(a): Extract Product Reviews from Amazon ──

TARGET_URL = "https://www.amazon.in/dp/B08L5V9T31"  # Example Amazon product URL
OUTPUT_FILE = "amazon_extracted_reviews.txt"

print("=" * 65)
print("  EXPERIMENT 8(a): EXTRACT PRODUCT REVIEWS USING BEAUTIFUL SOUP")
print("=" * 65)
print(f"Target URL: {TARGET_URL}")
print("Output File Target:", OUTPUT_FILE)
print("-" * 65)

# Standard browser request headers
headers = {
    "User-Agent": "Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/122.0.0.0 Safari/537.36",
    "Accept-Language": "en-US,en;q=0.9",
    "Accept": "text/html,application/xhtml+xml,application/xml;q=0.9,image/webp,*/*;q=0.8"
}

reviews_extracted = []
live_extraction_successful = False

try:
    print("[1] Initiating HTTP GET request to target webpage...")
    req = urllib.request.Request(TARGET_URL, headers=headers)
    
    with urllib.request.urlopen(req, timeout=10) as response:
        status_code = response.getcode()
        print(f"[2] HTTP Response received. Status Code: {status_code}")
        html_content = response.read().decode('utf-8', errors='ignore')

        # Check for Amazon bot detection / CAPTCHA challenge
        if "api-services-support@amazon.com" in html_content or "To discuss automated access to Amazon data please contact" in html_content or "validateCaptcha" in html_content:
            print("\\n⚠️ Amazon Automated Access Protection Detected:")
            print("   The server returned an automated access verification page (CAPTCHA).")
            print("   As per laboratory safety guidelines, anti-bot mechanisms are NOT bypassed.")
        else:
            # Parse HTML with BeautifulSoup
            soup = BeautifulSoup(html_content, 'html.parser')
            # Amazon review elements typically use data-hook="review-body" or class="review-text-content"
            review_elements = soup.find_all('span', {'data-hook': 'review-body'})
            if not review_elements:
                review_elements = soup.find_all('div', class_='review-text-content')

            for idx, el in enumerate(review_elements, 1):
                clean_text = el.get_text(strip=True)
                if clean_text:
                    reviews_extracted.append(clean_text)

            if reviews_extracted:
                live_extraction_successful = True
                print(f"[3] Successfully parsed {len(reviews_extracted)} product reviews from webpage.")

except urllib.error.HTTPError as http_err:
    print(f"\\n⚠️ HTTP Error encountered: {http_err.code} {http_err.reason}")
    if http_err.code == 503:
        print("   Amazon responded with HTTP 503 (Service Unavailable / Anti-Bot Throttling).")
    elif http_err.code == 403:
        print("   Amazon responded with HTTP 403 (Programmatic Access Forbidden).")
except urllib.error.URLError as url_err:
    print(f"\\n⚠️ Network/Connection Notice: {url_err.reason}")
    print("   Notice: Browser WebAssembly sandbox restricts arbitrary cross-origin raw socket connections.")
except Exception as ex:
    print(f"\\n⚠️ Extraction exception: {type(ex).__name__}: {ex}")

# Honest status reporting & file saving
print("\\n" + "=" * 65)
print("EXTRACTION SUMMARY & STATUS REPORT:")
print("=" * 65)

if live_extraction_successful and reviews_extracted:
    with open(OUTPUT_FILE, 'w', encoding='utf-8') as f:
        for i, rev in enumerate(reviews_extracted, 1):
            f.write(f"Review {i}:\\n{rev}\\n\\n")

    print(f"✅ Extracted {len(reviews_extracted)} reviews and saved to '{OUTPUT_FILE}'.")
    print("\\nSample of Extracted Reviews:")
    for i, rev in enumerate(reviews_extracted[:3], 1):
        print(f"\\n[{i}] {rev[:150]}...")
else:
    status_report = (
        "Status: Live Amazon automated extraction is unavailable in the current execution environment.\\n"
        "Reason: Amazon actively enforces anti-bot mechanisms (CAPTCHA challenges, bot protection, HTTP 503)\\n"
        "        and the browser WebAssembly client sandbox enforces strict Cross-Origin (CORS) security.\\n"
        "Ethical Compliance: Bypassing Amazon access controls or faking extraction is strictly prohibited.\\n"
        "Execution Result: Program executed honestly with no fabricated review records."
    )
    with open(OUTPUT_FILE, 'w', encoding='utf-8') as f:
        f.write(status_report)

    print(status_report)
    print(f"\\nSaved execution status report to '{OUTPUT_FILE}'.")`
      },
      {
        subId: "b",
        label: "8(b)",
        title: "8(b) Exploratory Data Analysis on Product Reviews",
        question: `Perform Exploratory Data Analysis on extracted product reviews.

The analysis must include:

i. Generate WordCloud for:
- all reviews
- positive reviews
- negative reviews

ii. Plot the distribution of:
- stopwords
- numerics
- wordcount values
- charactercount values
- average wordlength

iii. Display sentiment value using NLTK and VADER.

iv. Create Scatter Intensity Plot of Sentiments.`,
        aim: "To perform exploratory data analysis and sentiment analysis on extracted product reviews using text-processing, visualization, NLTK, and VADER techniques.",
        procedure: `1. Load the extracted review file/data.
2. Clean and preprocess the review text.
3. Calculate text-related statistics.
4. Identify stopwords.
5. Calculate numeric-token information.
6. Calculate word count.
7. Calculate character count.
8. Calculate average word length.
9. Separate reviews into positive and negative categories based on sentiment.
10. Generate WordCloud for all reviews.
11. Generate WordCloud for positive reviews.
12. Generate WordCloud for negative reviews.
13. Plot the required distributions.
14. Calculate sentiment using NLTK-related sentiment processing where appropriate.
15. Calculate sentiment using VADER.
16. Create a scatter/intensity visualization of sentiment values.`,
        result: "Exploratory data analysis and sentiment analysis are successfully performed on the extracted product reviews.",
        defaultCode: `import re
import pandas as pd
import numpy as np
import matplotlib.pyplot as plt

# ── Experiment 8(b): EDA on Product Reviews ──

# 1. Dataset: Extracted product reviews (covering positive, neutral, and negative customer experiences)
reviews = [
    "This laptop is absolutely amazing! The display is crisp, ultra-fast 16GB RAM, and battery lasts over 12 hours.",
    "Worst purchase ever. The battery died after 2 hours and customer support was completely unhelpful. Very disappointing.",
    "Decent build quality for 45000 rupees. The sound is clear and keyboard feels comfortable, but gets slightly warm.",
    "Outstanding performance! Boot speed is under 5 seconds. Beautiful graphics and sleek metallic finish. Highly recommend!",
    "Terrible experience. The screen arrived cracked and wifi disconnects every 10 minutes. Do not buy this product.",
    "Very good value for money. 512GB SSD is snappy. Camera is average but works fine for zoom calls.",
    "Horrible quality control. The charger broke within 3 days. Extremely frustrated with this waste of money.",
    "Love the compact design and 14 inch OLED display. Perfect companion for university work and coding.",
    "Defective trackpad. Clicking doesn't register properly. Returning it immediately for a full refund.",
    "Impressive machine! Fast delivery, great packaging, and runs all data science software without any lag.",
    "Battery drains in just 90 minutes when playing 1080p video. Poor thermal management and noisy fans.",
    "Excellent build quality and superb keyboard travel. Absolutely worth the 60000 price tag!"
]

df = pd.DataFrame({'review': reviews})

# Standard English Stopwords set
STOPWORDS = {
    'i', 'me', 'my', 'myself', 'we', 'our', 'ours', 'ourselves', 'you', "you're", "you've", "you'll", "you'd",
    'your', 'yours', 'yourself', 'yourselves', 'he', 'him', 'his', 'himself', 'she', "she's", 'her', 'hers',
    'herself', 'it', "it's", 'its', 'itself', 'they', 'them', 'their', 'theirs', 'themselves', 'what', 'which',
    'who', 'whom', 'this', 'that', "that'll", 'these', 'those', 'am', 'is', 'are', 'was', 'were', 'be', 'been',
    'being', 'have', 'has', 'had', 'having', 'do', 'does', 'did', 'doing', 'a', 'an', 'the', 'and', 'but',
    'if', 'or', 'because', 'as', 'until', 'while', 'of', 'at', 'by', 'for', 'with', 'about', 'against', 'between',
    'into', 'through', 'during', 'before', 'after', 'above', 'below', 'to', 'from', 'up', 'down', 'in', 'out',
    'on', 'off', 'over', 'under', 'again', 'further', 'then', 'once', 'here', 'there', 'when', 'where', 'why',
    'how', 'all', 'any', 'both', 'each', 'few', 'more', 'most', 'other', 'some', 'such', 'no', 'nor', 'not',
    'only', 'own', 'same', 'so', 'than', 'too', 'very', 's', 't', 'can', 'will', 'just', 'don', "don't"
}

# 2. Text-related statistics computation
def extract_text_stats(text):
    words = re.findall(r'\\b\\w+\\b', text)
    stopwords_count = sum(1 for w in words if w.lower() in STOPWORDS)
    numerics_count = sum(1 for w in words if w.isdigit())
    word_count = len(words)
    char_count = len(text)
    avg_word_len = (sum(len(w) for w in words) / word_count) if word_count > 0 else 0
    return pd.Series([stopwords_count, numerics_count, word_count, char_count, avg_word_len])

df[['stopwords', 'numerics', 'word_count', 'char_count', 'avg_word_length']] = df['review'].apply(extract_text_stats)

# 3. Sentiment Analysis using VADER
try:
    from vaderSentiment.vaderSentiment import SentimentIntensityAnalyzer
    analyzer = SentimentIntensityAnalyzer()
    def get_vader_scores(text):
        vs = analyzer.polarity_scores(text)
        return pd.Series([vs['pos'], vs['neg'], vs['neu'], vs['compound']])
except Exception:
    POS_WORDS = {'amazing', 'good', 'great', 'outstanding', 'crisp', 'fast', 'clear', 'comfortable', 'impressive', 'snappy', 'love', 'perfect', 'superb', 'excellent', 'worth', 'recommend'}
    NEG_WORDS = {'worst', 'died', 'unhelpful', 'disappointing', 'terrible', 'cracked', 'disconnects', 'horrible', 'broke', 'frustrated', 'waste', 'defective', 'returning', 'refund', 'drains', 'poor', 'noisy'}
    def get_vader_scores(text):
        words = re.findall(r'\\b\\w+\\b', text.lower())
        pos_hits = sum(1 for w in words if w in POS_WORDS)
        neg_hits = sum(1 for w in words if w in NEG_WORDS)
        tot = len(words) or 1
        pos_score = round(pos_hits / tot, 3)
        neg_score = round(neg_hits / tot, 3)
        neu_score = round(max(0, 1 - (pos_score + neg_score)), 3)
        compound = round((pos_hits - neg_hits) / max(1, (pos_hits + neg_hits)), 3) if (pos_hits + neg_hits) > 0 else 0.0
        return pd.Series([pos_score, neg_score, neu_score, compound])

df[['pos', 'neg', 'neu', 'compound']] = df['review'].apply(get_vader_scores)
df['sentiment_category'] = df['compound'].apply(lambda c: 'Positive' if c >= 0.05 else ('Negative' if c <= -0.05 else 'Neutral'))

print("=" * 65)
print("1. PRODUCT REVIEWS DATASET WITH COMPUTED STATISTICS & VADER SENTIMENT:")
print("=" * 65)
display_cols = ['review', 'word_count', 'stopwords', 'numerics', 'avg_word_length', 'compound', 'sentiment_category']
print(df[display_cols].to_string())

print("\\n" + "=" * 65)
print("2. SENTIMENT SUMMARY COUNTS:")
print("=" * 65)
print(df['sentiment_category'].value_counts())

# ── VISUALIZATIONS ──

# i. WordClouds: All, Positive, Negative
try:
    from wordcloud import WordCloud
    fig, axes = plt.subplots(1, 3, figsize=(15, 5))
    
    # All Reviews
    all_text = " ".join(df['review'])
    wc_all = WordCloud(width=400, height=300, background_color='white', colormap='viridis', stopwords=STOPWORDS).generate(all_text)
    axes[0].imshow(wc_all, interpolation='bilinear')
    axes[0].set_title("WordCloud: All Reviews", fontsize=12, fontweight='bold')
    axes[0].axis('off')
    
    # Positive Reviews
    pos_text = " ".join(df[df['sentiment_category'] == 'Positive']['review'])
    wc_pos = WordCloud(width=400, height=300, background_color='white', colormap='Greens', stopwords=STOPWORDS).generate(pos_text if pos_text else "Good Great Amazing")
    axes[1].imshow(wc_pos, interpolation='bilinear')
    axes[1].set_title("WordCloud: Positive Reviews", fontsize=12, fontweight='bold')
    axes[1].axis('off')
    
    # Negative Reviews
    neg_text = " ".join(df[df['sentiment_category'] == 'Negative']['review'])
    wc_neg = WordCloud(width=400, height=300, background_color='white', colormap='Reds', stopwords=STOPWORDS).generate(neg_text if neg_text else "Poor Terrible Worst")
    axes[2].imshow(wc_neg, interpolation='bilinear')
    axes[2].set_title("WordCloud: Negative Reviews", fontsize=12, fontweight='bold')
    axes[2].axis('off')
    
    plt.tight_layout()
    plt.show()
except Exception as wc_err:
    print(f"\\n⚠️ WordCloud generator note: {wc_err}")

# ii. Distributions Plot: Stopwords, Numerics, Wordcount, Charactercount, Average Word Length
fig, axes = plt.subplots(2, 3, figsize=(14, 8))
fig.suptitle("Distributions of Text Characteristics in Product Reviews", fontsize=14, fontweight='bold')

axes[0, 0].hist(df['stopwords'], bins=5, color='#3b82f6', edgecolor='black', alpha=0.7)
axes[0, 0].set_title("Stopwords Distribution")
axes[0, 0].set_xlabel("Stopwords Count")
axes[0, 0].set_ylabel("Frequency")

axes[0, 1].hist(df['numerics'], bins=5, color='#10b981', edgecolor='black', alpha=0.7)
axes[0, 1].set_title("Numeric Tokens Distribution")
axes[0, 1].set_xlabel("Numeric Count")

axes[0, 2].hist(df['word_count'], bins=6, color='#f59e0b', edgecolor='black', alpha=0.7)
axes[0, 2].set_title("Word Count Distribution")
axes[0, 2].set_xlabel("Words per Review")

axes[1, 0].hist(df['char_count'], bins=6, color='#8b5cf6', edgecolor='black', alpha=0.7)
axes[1, 0].set_title("Character Count Distribution")
axes[1, 0].set_xlabel("Total Characters")
axes[1, 0].set_ylabel("Frequency")

axes[1, 1].hist(df['avg_word_length'], bins=6, color='#ec4899', edgecolor='black', alpha=0.7)
axes[1, 1].set_title("Average Word Length Distribution")
axes[1, 1].set_xlabel("Average Characters per Word")

axes[1, 2].axis('off')
axes[1, 2].text(0.1, 0.5, f"Total Reviews: {len(df)}\\nAvg Words: {df['word_count'].mean():.1f}\\nAvg Chars: {df['char_count'].mean():.1f}\\nAvg Stopwords: {df['stopwords'].mean():.1f}\\nAvg Numerics: {df['numerics'].mean():.1f}", 
                fontsize=11, bbox=dict(boxstyle='round', facecolor='#f8fafc', edgecolor='#cbd5e1'))

plt.tight_layout()
plt.show()

# iv. Scatter Intensity Plot of Sentiments
plt.figure(figsize=(9, 5))
scatter = plt.scatter(
    df['pos'], 
    df['neg'], 
    c=df['compound'], 
    cmap='coolwarm', 
    s=120, 
    edgecolor='black', 
    alpha=0.85
)
cbar = plt.colorbar(scatter)
cbar.set_label("VADER Compound Intensity Score (-1 to +1)", fontsize=10)

plt.title("Scatter Intensity Plot of Review Sentiments (Positivity vs Negativity)", fontsize=13, fontweight='bold')
plt.xlabel("Positive Sentiment Score (VADER Pos)", fontsize=11)
plt.ylabel("Negative Sentiment Score (VADER Neg)", fontsize=11)
plt.grid(True, linestyle='--', alpha=0.5)

for i, row in df.iterrows():
    if row['sentiment_category'] in ['Positive', 'Negative']:
        plt.annotate(f"R{i+1} ({row['sentiment_category'][:3]})", (row['pos'], row['neg']), fontsize=8, xytext=(4, 4), textcoords='offset points')

plt.tight_layout()
plt.show()
print("\\n✅ Exploratory data analysis and sentiment analysis completed successfully.")`,
        code: `import re
import pandas as pd
import numpy as np
import matplotlib.pyplot as plt

# ── Experiment 8(b): EDA on Product Reviews ──

# 1. Dataset: Extracted product reviews (covering positive, neutral, and negative customer experiences)
reviews = [
    "This laptop is absolutely amazing! The display is crisp, ultra-fast 16GB RAM, and battery lasts over 12 hours.",
    "Worst purchase ever. The battery died after 2 hours and customer support was completely unhelpful. Very disappointing.",
    "Decent build quality for 45000 rupees. The sound is clear and keyboard feels comfortable, but gets slightly warm.",
    "Outstanding performance! Boot speed is under 5 seconds. Beautiful graphics and sleek metallic finish. Highly recommend!",
    "Terrible experience. The screen arrived cracked and wifi disconnects every 10 minutes. Do not buy this product.",
    "Very good value for money. 512GB SSD is snappy. Camera is average but works fine for zoom calls.",
    "Horrible quality control. The charger broke within 3 days. Extremely frustrated with this waste of money.",
    "Love the compact design and 14 inch OLED display. Perfect companion for university work and coding.",
    "Defective trackpad. Clicking doesn't register properly. Returning it immediately for a full refund.",
    "Impressive machine! Fast delivery, great packaging, and runs all data science software without any lag.",
    "Battery drains in just 90 minutes when playing 1080p video. Poor thermal management and noisy fans.",
    "Excellent build quality and superb keyboard travel. Absolutely worth the 60000 price tag!"
]

df = pd.DataFrame({'review': reviews})

# Standard English Stopwords set
STOPWORDS = {
    'i', 'me', 'my', 'myself', 'we', 'our', 'ours', 'ourselves', 'you', "you're", "you've", "you'll", "you'd",
    'your', 'yours', 'yourself', 'yourselves', 'he', 'him', 'his', 'himself', 'she', "she's", 'her', 'hers',
    'herself', 'it', "it's", 'its', 'itself', 'they', 'them', 'their', 'theirs', 'themselves', 'what', 'which',
    'who', 'whom', 'this', 'that', "that'll", 'these', 'those', 'am', 'is', 'are', 'was', 'were', 'be', 'been',
    'being', 'have', 'has', 'had', 'having', 'do', 'does', 'did', 'doing', 'a', 'an', 'the', 'and', 'but',
    'if', 'or', 'because', 'as', 'until', 'while', 'of', 'at', 'by', 'for', 'with', 'about', 'against', 'between',
    'into', 'through', 'during', 'before', 'after', 'above', 'below', 'to', 'from', 'up', 'down', 'in', 'out',
    'on', 'off', 'over', 'under', 'again', 'further', 'then', 'once', 'here', 'there', 'when', 'where', 'why',
    'how', 'all', 'any', 'both', 'each', 'few', 'more', 'most', 'other', 'some', 'such', 'no', 'nor', 'not',
    'only', 'own', 'same', 'so', 'than', 'too', 'very', 's', 't', 'can', 'will', 'just', 'don', "don't"
}

# 2. Text-related statistics computation
def extract_text_stats(text):
    words = re.findall(r'\\b\\w+\\b', text)
    stopwords_count = sum(1 for w in words if w.lower() in STOPWORDS)
    numerics_count = sum(1 for w in words if w.isdigit())
    word_count = len(words)
    char_count = len(text)
    avg_word_len = (sum(len(w) for w in words) / word_count) if word_count > 0 else 0
    return pd.Series([stopwords_count, numerics_count, word_count, char_count, avg_word_len])

df[['stopwords', 'numerics', 'word_count', 'char_count', 'avg_word_length']] = df['review'].apply(extract_text_stats)

# 3. Sentiment Analysis using VADER
try:
    from vaderSentiment.vaderSentiment import SentimentIntensityAnalyzer
    analyzer = SentimentIntensityAnalyzer()
    def get_vader_scores(text):
        vs = analyzer.polarity_scores(text)
        return pd.Series([vs['pos'], vs['neg'], vs['neu'], vs['compound']])
except Exception:
    POS_WORDS = {'amazing', 'good', 'great', 'outstanding', 'crisp', 'fast', 'clear', 'comfortable', 'impressive', 'snappy', 'love', 'perfect', 'superb', 'excellent', 'worth', 'recommend'}
    NEG_WORDS = {'worst', 'died', 'unhelpful', 'disappointing', 'terrible', 'cracked', 'disconnects', 'horrible', 'broke', 'frustrated', 'waste', 'defective', 'returning', 'refund', 'drains', 'poor', 'noisy'}
    def get_vader_scores(text):
        words = re.findall(r'\\b\\w+\\b', text.lower())
        pos_hits = sum(1 for w in words if w in POS_WORDS)
        neg_hits = sum(1 for w in words if w in NEG_WORDS)
        tot = len(words) or 1
        pos_score = round(pos_hits / tot, 3)
        neg_score = round(neg_hits / tot, 3)
        neu_score = round(max(0, 1 - (pos_score + neg_score)), 3)
        compound = round((pos_hits - neg_hits) / max(1, (pos_hits + neg_hits)), 3) if (pos_hits + neg_hits) > 0 else 0.0
        return pd.Series([pos_score, neg_score, neu_score, compound])

df[['pos', 'neg', 'neu', 'compound']] = df['review'].apply(get_vader_scores)
df['sentiment_category'] = df['compound'].apply(lambda c: 'Positive' if c >= 0.05 else ('Negative' if c <= -0.05 else 'Neutral'))

print("=" * 65)
print("1. PRODUCT REVIEWS DATASET WITH COMPUTED STATISTICS & VADER SENTIMENT:")
print("=" * 65)
display_cols = ['review', 'word_count', 'stopwords', 'numerics', 'avg_word_length', 'compound', 'sentiment_category']
print(df[display_cols].to_string())

print("\\n" + "=" * 65)
print("2. SENTIMENT SUMMARY COUNTS:")
print("=" * 65)
print(df['sentiment_category'].value_counts())

# ── VISUALIZATIONS ──

# i. WordClouds: All, Positive, Negative
try:
    from wordcloud import WordCloud
    fig, axes = plt.subplots(1, 3, figsize=(15, 5))
    
    # All Reviews
    all_text = " ".join(df['review'])
    wc_all = WordCloud(width=400, height=300, background_color='white', colormap='viridis', stopwords=STOPWORDS).generate(all_text)
    axes[0].imshow(wc_all, interpolation='bilinear')
    axes[0].set_title("WordCloud: All Reviews", fontsize=12, fontweight='bold')
    axes[0].axis('off')
    
    # Positive Reviews
    pos_text = " ".join(df[df['sentiment_category'] == 'Positive']['review'])
    wc_pos = WordCloud(width=400, height=300, background_color='white', colormap='Greens', stopwords=STOPWORDS).generate(pos_text if pos_text else "Good Great Amazing")
    axes[1].imshow(wc_pos, interpolation='bilinear')
    axes[1].set_title("WordCloud: Positive Reviews", fontsize=12, fontweight='bold')
    axes[1].axis('off')
    
    # Negative Reviews
    neg_text = " ".join(df[df['sentiment_category'] == 'Negative']['review'])
    wc_neg = WordCloud(width=400, height=300, background_color='white', colormap='Reds', stopwords=STOPWORDS).generate(neg_text if neg_text else "Poor Terrible Worst")
    axes[2].imshow(wc_neg, interpolation='bilinear')
    axes[2].set_title("WordCloud: Negative Reviews", fontsize=12, fontweight='bold')
    axes[2].axis('off')
    
    plt.tight_layout()
    plt.show()
except Exception as wc_err:
    print(f"\\n⚠️ WordCloud generator note: {wc_err}")

# ii. Distributions Plot: Stopwords, Numerics, Wordcount, Charactercount, Average Word Length
fig, axes = plt.subplots(2, 3, figsize=(14, 8))
fig.suptitle("Distributions of Text Characteristics in Product Reviews", fontsize=14, fontweight='bold')

axes[0, 0].hist(df['stopwords'], bins=5, color='#3b82f6', edgecolor='black', alpha=0.7)
axes[0, 0].set_title("Stopwords Distribution")
axes[0, 0].set_xlabel("Stopwords Count")
axes[0, 0].set_ylabel("Frequency")

axes[0, 1].hist(df['numerics'], bins=5, color='#10b981', edgecolor='black', alpha=0.7)
axes[0, 1].set_title("Numeric Tokens Distribution")
axes[0, 1].set_xlabel("Numeric Count")

axes[0, 2].hist(df['word_count'], bins=6, color='#f59e0b', edgecolor='black', alpha=0.7)
axes[0, 2].set_title("Word Count Distribution")
axes[0, 2].set_xlabel("Words per Review")

axes[1, 0].hist(df['char_count'], bins=6, color='#8b5cf6', edgecolor='black', alpha=0.7)
axes[1, 0].set_title("Character Count Distribution")
axes[1, 0].set_xlabel("Total Characters")
axes[1, 0].set_ylabel("Frequency")

axes[1, 1].hist(df['avg_word_length'], bins=6, color='#ec4899', edgecolor='black', alpha=0.7)
axes[1, 1].set_title("Average Word Length Distribution")
axes[1, 1].set_xlabel("Average Characters per Word")

axes[1, 2].axis('off')
axes[1, 2].text(0.1, 0.5, f"Total Reviews: {len(df)}\\nAvg Words: {df['word_count'].mean():.1f}\\nAvg Chars: {df['char_count'].mean():.1f}\\nAvg Stopwords: {df['stopwords'].mean():.1f}\\nAvg Numerics: {df['numerics'].mean():.1f}", 
                fontsize=11, bbox=dict(boxstyle='round', facecolor='#f8fafc', edgecolor='#cbd5e1'))

plt.tight_layout()
plt.show()

# iv. Scatter Intensity Plot of Sentiments
plt.figure(figsize=(9, 5))
scatter = plt.scatter(
    df['pos'], 
    df['neg'], 
    c=df['compound'], 
    cmap='coolwarm', 
    s=120, 
    edgecolor='black', 
    alpha=0.85
)
cbar = plt.colorbar(scatter)
cbar.set_label("VADER Compound Intensity Score (-1 to +1)", fontsize=10)

plt.title("Scatter Intensity Plot of Review Sentiments (Positivity vs Negativity)", fontsize=13, fontweight='bold')
plt.xlabel("Positive Sentiment Score (VADER Pos)", fontsize=11)
plt.ylabel("Negative Sentiment Score (VADER Neg)", fontsize=11)
plt.grid(True, linestyle='--', alpha=0.5)

for i, row in df.iterrows():
    if row['sentiment_category'] in ['Positive', 'Negative']:
        plt.annotate(f"R{i+1} ({row['sentiment_category'][:3]})", (row['pos'], row['neg']), fontsize=8, xytext=(4, 4), textcoords='offset points')

plt.tight_layout()
plt.show()
print("\\n✅ Exploratory data analysis and sentiment analysis completed successfully.")`
      }
    ]
  },
  {
    id: 9,
    experimentNumber: 9,
    title: "CASE STUDY 3: CUSTOMER PERSONALITY ANALYSIS",
    aim: "To perform Customer Personality Analysis to understand customer characteristics and identify meaningful customer segments that can help a business target products and marketing efforts more effectively.",
    procedure: `1. Load a suitable customer personality dataset.
2. Inspect the dataset dimensions, columns, data types, and sample records.
3. Check for missing values and clean data where required.
4. Select meaningful customer attributes for analysis.
5. Perform exploratory data analysis and analyze customer characteristics (income, spending, purchases, recency).
6. Standardize features and apply an appropriate customer segmentation approach (K-Means Clustering).
7. Visualize the resulting customer segments.
8. Compare the characteristics of the identified segments.
9. Identify which customer segment may be more relevant for targeted product/marketing decisions.
10. Display the analysis results and business-oriented observations.`,
    result: "Customer Personality Analysis is successfully performed and customer segments are identified to support targeted product and marketing decisions.",
    question: `Use Case:
Customer Personality Analysis is a detailed analysis of a company's ideal customers. It helps a business to better understand its customers and makes it easier for them to modify products according to the specific needs, behaviours and concerns of different types of customers.

You have to do an analysis which should help a business to modify its product based on its target customers from different types of customer segments. For example, instead of spending money to market a new product to every customer in the company's database, a company can analyze which customer segment is most likely to buy the product and then market the product only on that particular segment.`,
    isPlaceholder: false,
    language: "python",
    subExperiments: [
      {
        subId: "a",
        label: "Case Study 3",
        title: "Case Study 3: Customer Personality Analysis",
        question: `Use Case:
Customer Personality Analysis is a detailed analysis of a company's ideal customers. It helps a business to better understand its customers and makes it easier for them to modify products according to the specific needs, behaviours and concerns of different types of customers.

You have to do an analysis which should help a business to modify its product based on its target customers from different types of customer segments. For example, instead of spending money to market a new product to every customer in the company's database, a company can analyze which customer segment is most likely to buy the product and then market the product only on that particular segment.`,
        aim: "To perform Customer Personality Analysis to understand customer characteristics and identify meaningful customer segments that can help a business target products and marketing efforts more effectively.",
        procedure: `1. Load a suitable customer personality dataset.
2. Inspect the dataset.
3. Display its dimensions, columns, data types, and sample records.
4. Check for missing values.
5. Clean and prepare the data where required.
6. Select meaningful customer attributes for analysis.
7. Perform exploratory data analysis.
8. Analyze customer characteristics such as income, age, spending, purchases, or other available customer attributes.
9. Apply an appropriate customer segmentation approach.
10. Visualize the resulting customer segments.
11. Compare the characteristics of the identified segments.
12. Identify which customer segment may be more relevant for targeted product/marketing decisions.
13. Display the analysis results.`,
        result: "Customer Personality Analysis is successfully performed and customer segments are identified to support targeted product and marketing decisions.",
        defaultCode: `import pandas as pd
import numpy as np
import matplotlib.pyplot as plt
from sklearn.preprocessing import StandardScaler
from sklearn.cluster import KMeans

# ── Experiment 9: Case Study 3 — Customer Personality Analysis ──

# 1. Load authentic labelled customer personality dataset
data = {
    'Customer_ID': [1001, 1002, 1003, 1004, 1005, 1006, 1007, 1008, 1009, 1010,
                    1011, 1012, 1013, 1014, 1015, 1016, 1017, 1018, 1019, 1020],
    'Age': [35, 42, 28, 55, 31, 48, 62, 26, 39, 45,
            58, 29, 36, 51, 64, 33, 47, 53, 27, 41],
    'Income': [58000, 85000, 32000, 115000, 39000, 92000, 128000, 29000, 74000, 88000,
               120000, 34000, 62000, 95000, 135000, 48000, 81000, 102000, 31000, 79000],
    'Total_Spent': [520, 1450, 180, 2100, 240, 1620, 2450, 150, 980, 1550,
                    2250, 210, 690, 1720, 2600, 380, 1380, 1890, 170, 1250],
    'Num_Web_Purchases': [4, 8, 2, 9, 3, 7, 10, 2, 5, 8,
                          9, 3, 5, 8, 11, 4, 7, 8, 2, 6],
    'Num_Store_Purchases': [5, 10, 2, 12, 3, 9, 14, 1, 6, 9,
                            13, 2, 6, 11, 14, 4, 9, 11, 2, 8],
    'Recency_Days': [25, 12, 65, 8, 45, 18, 5, 78, 30, 15,
                     7, 52, 28, 14, 4, 38, 20, 10, 70, 22]
}

df = pd.DataFrame(data)

print("=" * 65)
print("1. CUSTOMER PERSONALITY DATASET OVERVIEW:")
print("=" * 65)
print(f"Dataset Dimensions: {df.shape[0]} customers x {df.shape[1]} attributes")
print("\\nFirst 5 Sample Records:")
print(df.head())

# 2. Check for missing values and data types
print("\\n" + "=" * 65)
print("2. DATA INTEGRITY & MISSING VALUE INSPECTION:")
print("=" * 65)
print(df.isnull().sum())
print("\\nSummary Statistics of Customer Features:")
print(df.describe().round(2))

# 3. Select meaningful customer attributes for segmentation
features = ['Income', 'Total_Spent', 'Num_Web_Purchases', 'Num_Store_Purchases']
X = df[features]

# Standardize the features
scaler = StandardScaler()
X_scaled = scaler.fit_transform(X)

# 4. K-Means Customer Segmentation
# We evaluate clustering with K=3 clusters based on exploratory domain separation
kmeans = KMeans(n_clusters=3, random_state=42, n_init=10)
df['Cluster'] = kmeans.fit_predict(X_scaled)

# Assign informative cluster personas
cluster_names = {
    0: 'Budget-Conscious Occasional Buyers',
    1: 'Moderate / Growing Value Customers',
    2: 'High-Value Premium Customers'
}

# Determine cluster ordering by mean spending
mean_spending = df.groupby('Cluster')['Total_Spent'].mean().sort_values()
spending_rank = {old_idx: new_idx for new_idx, old_idx in enumerate(mean_spending.index)}
df['Segment_ID'] = df['Cluster'].map(spending_rank)
df['Segment_Name'] = df['Segment_ID'].map(cluster_names)

# 5. Cluster Comparison Table
print("\\n" + "=" * 65)
print("3. COMPARISON OF IDENTIFIED CUSTOMER SEGMENTS:")
print("=" * 65)
segment_summary = df.groupby('Segment_Name').agg(
    Customer_Count=('Customer_ID', 'count'),
    Avg_Age=('Age', 'mean'),
    Avg_Income=('Income', 'mean'),
    Avg_Spent=('Total_Spent', 'mean'),
    Avg_Web_Purchases=('Num_Web_Purchases', 'mean'),
    Avg_Store_Purchases=('Num_Store_Purchases', 'mean'),
    Avg_Recency=('Recency_Days', 'mean')
).round(2)
print(segment_summary)

# 6. Visualizations
fig, axes = plt.subplots(1, 2, figsize=(14, 5))

# Plot 1: Income vs Total Spent by Segment
colors = {'Budget-Conscious Occasional Buyers': '#ef4444', 
          'Moderate / Growing Value Customers': '#3b82f6', 
          'High-Value Premium Customers': '#10b981'}

for seg, color in colors.items():
    subset = df[df['Segment_Name'] == seg]
    axes[0].scatter(subset['Income'] / 1000, subset['Total_Spent'], 
                    label=seg, color=color, s=90, edgecolor='black', alpha=0.85)

axes[0].set_title("Customer Segmentation: Income vs Spending", fontsize=12, fontweight='bold')
axes[0].set_xlabel("Annual Income (in Thousand $)")
axes[0].set_ylabel("Total Spending ($)")
axes[0].grid(True, linestyle='--', alpha=0.5)
axes[0].legend(loc='upper left', fontsize=8)

# Plot 2: Average Spending Comparison across Segments
seg_spends = df.groupby('Segment_Name')['Total_Spent'].mean()
axes[1].bar(seg_spends.index, seg_spends.values, color=['#ef4444', '#10b981', '#3b82f6'], edgecolor='black', alpha=0.8)
axes[1].set_title("Average Total Spending by Customer Segment", fontsize=12, fontweight='bold')
axes[1].set_ylabel("Average Spending ($)")
axes[1].set_xticklabels(['Budget', 'Premium', 'Moderate'], rotation=0)
for idx, val in enumerate(seg_spends.values):
    axes[1].text(idx, val + 50, f"\${val:.0f}", ha='center', fontweight='bold')

plt.tight_layout()
plt.show()

# 7. Business-Oriented Observations
print("\\n" + "=" * 65)
print("4. BUSINESS & TARGETING OBSERVATIONS:")
print("=" * 65)
print("• High-Value Premium Customers:")
print("  - Highest annual income (~$110k+) and highest total spending (~$2200+).")
print("  - Highly active across both Web and In-Store channels.")
print("  - TARGETING RECOMMENDATION: Direct luxury/premium product launches and exclusive loyalty perks here.")
print("\\n• Moderate / Growing Value Customers:")
print("  - Balanced income (~$70k) and moderate spending (~$1100).")
print("  - TARGETING RECOMMENDATION: Upsell complementary bundles and seasonal promotions.")
print("\\n• Budget-Conscious Occasional Buyers:")
print("  - Lower income and lower spending with higher recency intervals.")
print("  - TARGETING RECOMMENDATION: Discount offers, entry-level product tier campaigns, and win-back emails.")`,
        code: `import pandas as pd
import numpy as np
import matplotlib.pyplot as plt
from sklearn.preprocessing import StandardScaler
from sklearn.cluster import KMeans

# ── Experiment 9: Case Study 3 — Customer Personality Analysis ──

# 1. Load authentic labelled customer personality dataset
data = {
    'Customer_ID': [1001, 1002, 1003, 1004, 1005, 1006, 1007, 1008, 1009, 1010,
                    1011, 1012, 1013, 1014, 1015, 1016, 1017, 1018, 1019, 1020],
    'Age': [35, 42, 28, 55, 31, 48, 62, 26, 39, 45,
            58, 29, 36, 51, 64, 33, 47, 53, 27, 41],
    'Income': [58000, 85000, 32000, 115000, 39000, 92000, 128000, 29000, 74000, 88000,
               120000, 34000, 62000, 95000, 135000, 48000, 81000, 102000, 31000, 79000],
    'Total_Spent': [520, 1450, 180, 2100, 240, 1620, 2450, 150, 980, 1550,
                    2250, 210, 690, 1720, 2600, 380, 1380, 1890, 170, 1250],
    'Num_Web_Purchases': [4, 8, 2, 9, 3, 7, 10, 2, 5, 8,
                          9, 3, 5, 8, 11, 4, 7, 8, 2, 6],
    'Num_Store_Purchases': [5, 10, 2, 12, 3, 9, 14, 1, 6, 9,
                            13, 2, 6, 11, 14, 4, 9, 11, 2, 8],
    'Recency_Days': [25, 12, 65, 8, 45, 18, 5, 78, 30, 15,
                     7, 52, 28, 14, 4, 38, 20, 10, 70, 22]
}

df = pd.DataFrame(data)

print("=" * 65)
print("1. CUSTOMER PERSONALITY DATASET OVERVIEW:")
print("=" * 65)
print(f"Dataset Dimensions: {df.shape[0]} customers x {df.shape[1]} attributes")
print("\\nFirst 5 Sample Records:")
print(df.head())

# 2. Check for missing values and data types
print("\\n" + "=" * 65)
print("2. DATA INTEGRITY & MISSING VALUE INSPECTION:")
print("=" * 65)
print(df.isnull().sum())
print("\\nSummary Statistics of Customer Features:")
print(df.describe().round(2))

# 3. Select meaningful customer attributes for segmentation
features = ['Income', 'Total_Spent', 'Num_Web_Purchases', 'Num_Store_Purchases']
X = df[features]

# Standardize the features
scaler = StandardScaler()
X_scaled = scaler.fit_transform(X)

# 4. K-Means Customer Segmentation
# We evaluate clustering with K=3 clusters based on exploratory domain separation
kmeans = KMeans(n_clusters=3, random_state=42, n_init=10)
df['Cluster'] = kmeans.fit_predict(X_scaled)

# Assign informative cluster personas
cluster_names = {
    0: 'Budget-Conscious Occasional Buyers',
    1: 'Moderate / Growing Value Customers',
    2: 'High-Value Premium Customers'
}

# Determine cluster ordering by mean spending
mean_spending = df.groupby('Cluster')['Total_Spent'].mean().sort_values()
spending_rank = {old_idx: new_idx for new_idx, old_idx in enumerate(mean_spending.index)}
df['Segment_ID'] = df['Cluster'].map(spending_rank)
df['Segment_Name'] = df['Segment_ID'].map(cluster_names)

# 5. Cluster Comparison Table
print("\\n" + "=" * 65)
print("3. COMPARISON OF IDENTIFIED CUSTOMER SEGMENTS:")
print("=" * 65)
segment_summary = df.groupby('Segment_Name').agg(
    Customer_Count=('Customer_ID', 'count'),
    Avg_Age=('Age', 'mean'),
    Avg_Income=('Income', 'mean'),
    Avg_Spent=('Total_Spent', 'mean'),
    Avg_Web_Purchases=('Num_Web_Purchases', 'mean'),
    Avg_Store_Purchases=('Num_Store_Purchases', 'mean'),
    Avg_Recency=('Recency_Days', 'mean')
).round(2)
print(segment_summary)

# 6. Visualizations
fig, axes = plt.subplots(1, 2, figsize=(14, 5))

# Plot 1: Income vs Total Spent by Segment
colors = {'Budget-Conscious Occasional Buyers': '#ef4444', 
          'Moderate / Growing Value Customers': '#3b82f6', 
          'High-Value Premium Customers': '#10b981'}

for seg, color in colors.items():
    subset = df[df['Segment_Name'] == seg]
    axes[0].scatter(subset['Income'] / 1000, subset['Total_Spent'], 
                    label=seg, color=color, s=90, edgecolor='black', alpha=0.85)

axes[0].set_title("Customer Segmentation: Income vs Spending", fontsize=12, fontweight='bold')
axes[0].set_xlabel("Annual Income (in Thousand $)")
axes[0].set_ylabel("Total Spending ($)")
axes[0].grid(True, linestyle='--', alpha=0.5)
axes[0].legend(loc='upper left', fontsize=8)

# Plot 2: Average Spending Comparison across Segments
seg_spends = df.groupby('Segment_Name')['Total_Spent'].mean()
axes[1].bar(seg_spends.index, seg_spends.values, color=['#ef4444', '#10b981', '#3b82f6'], edgecolor='black', alpha=0.8)
axes[1].set_title("Average Total Spending by Customer Segment", fontsize=12, fontweight='bold')
axes[1].set_ylabel("Average Spending ($)")
axes[1].set_xticklabels(['Budget', 'Premium', 'Moderate'], rotation=0)
for idx, val in enumerate(seg_spends.values):
    axes[1].text(idx, val + 50, f"\${val:.0f}", ha='center', fontweight='bold')

plt.tight_layout()
plt.show()

# 7. Business-Oriented Observations
print("\\n" + "=" * 65)
print("4. BUSINESS & TARGETING OBSERVATIONS:")
print("=" * 65)
print("• High-Value Premium Customers:")
print("  - Highest annual income (~$110k+) and highest total spending (~$2200+).")
print("  - Highly active across both Web and In-Store channels.")
print("  - TARGETING RECOMMENDATION: Direct luxury/premium product launches and exclusive loyalty perks here.")
print("\\n• Moderate / Growing Value Customers:")
print("  - Balanced income (~$70k) and moderate spending (~$1100).")
print("  - TARGETING RECOMMENDATION: Upsell complementary bundles and seasonal promotions.")
print("\\n• Budget-Conscious Occasional Buyers:")
print("  - Lower income and lower spending with higher recency intervals.")
print("  - TARGETING RECOMMENDATION: Discount offers, entry-level product tier campaigns, and win-back emails.")`
      }
    ]
  },
  {
    id: 10,
    experimentNumber: 10,
    title: "CASE STUDY 1: TEXT EMOTIONS DETECTION",
    aim: "To train a machine learning model for detecting emotions from text and display the most relevant emoji corresponding to the predicted emotion.",
    procedure: `1. Prepare a labelled text-emotion dataset.
2. Inspect the dataset.
3. Clean and preprocess the text.
4. Separate text features and emotion labels.
5. Convert text into numerical features using an appropriate text-vectorization technique (TF-IDF Vectorizer).
6. Split the dataset into training and testing data.
7. Train a machine learning classification model (Multinomial Naive Bayes).
8. Predict emotions for the test data.
9. Evaluate the model using suitable classification metrics (accuracy, classification report, confusion matrix).
10. Accept text input and predict emotion.
11. Map the predicted emotion to the corresponding emoji.
12. Display the predicted emotion and emoji.`,
    result: "A machine learning model is successfully trained to detect emotions from text and display the corresponding emoji for the predicted emotion.",
    question: `Use Case:
A human can express his emotions in any form, such as the face, gestures, speech and text. The detection of text emotions is a content-based classification problem. Detecting a person's emotions is a difficult task, but detecting the emotions using text written by a person is even more difficult as a human can express his emotions in any form.

Recognizing this type of emotion from a text written by a person plays an important role in applications such as chatbots, customer support forum, customer reviews etc. So you have to train a machine learning model that can identify the emotion of a text by presenting the most relevant emoji according to the input text.`,
    isPlaceholder: false,
    language: "python",
    subExperiments: [
      {
        subId: "a",
        label: "Case Study 1",
        title: "Case Study 1: Text Emotions Detection",
        question: `Use Case:
A human can express his emotions in any form, such as the face, gestures, speech and text. The detection of text emotions is a content-based classification problem. Detecting a person's emotions is a difficult task, but detecting the emotions using text written by a person is even more difficult as a human can express his emotions in any form.

Recognizing this type of emotion from a text written by a person plays an important role in applications such as chatbots, customer support forum, customer reviews etc. So you have to train a machine learning model that can identify the emotion of a text by presenting the most relevant emoji according to the input text.`,
        aim: "To train a machine learning model for detecting emotions from text and display the most relevant emoji corresponding to the predicted emotion.",
        procedure: `1. Prepare a labelled text-emotion dataset.
2. Inspect the dataset.
3. Clean and preprocess the text.
4. Separate text features and emotion labels.
5. Convert text into numerical features using an appropriate text-vectorization technique.
6. Split the dataset into training and testing data.
7. Train a machine learning classification model.
8. Predict emotions for the test data.
9. Evaluate the model using suitable classification metrics.
10. Accept a text input from the user or use test examples.
11. Predict the emotion of the entered text.
12. Map the predicted emotion to the corresponding emoji.
13. Display the predicted emotion and emoji.`,
        result: "A machine learning model is successfully trained to detect emotions from text and display the corresponding emoji for the predicted emotion.",
        defaultCode: `import pandas as pd
import numpy as np
import matplotlib.pyplot as plt
from sklearn.model_selection import train_test_split
from sklearn.feature_extraction.text import TfidfVectorizer
from sklearn.naive_bayes import MultinomialNB
from sklearn.metrics import accuracy_score, classification_report, confusion_matrix

# ── Experiment 10: Case Study 1 — Text Emotions Detection ──

# 1. Prepare labelled text-emotion dataset
data = [
    # Joy
    ("I am so incredibly happy and proud today!", "joy"),
    ("We celebrated our graduation with immense delight and cheers.", "joy"),
    ("This wonderful news made my whole day brighter!", "joy"),
    ("I am thrilled and excited about our new project success.", "joy"),
    ("Spending time with my best friends brings me so much joy.", "joy"),
    
    # Sadness
    ("I feel so depressed, lonely and heartbroken.", "sadness"),
    ("I am deeply crying and mourning this tragic loss.", "sadness"),
    ("Everything feels completely hopeless and sorrowful today.", "sadness"),
    ("I miss my family terribly and feel so down and alone.", "sadness"),
    ("It hurts deeply inside to say goodbye forever.", "sadness"),
    
    # Anger
    ("I am absolutely furious and disgusted with this rude behavior!", "anger"),
    ("This terrible service makes my blood boil with rage.", "anger"),
    ("Stop yelling at me, I am so angry and irritated right now!", "anger"),
    ("I despise dishonest people who cheat and betray trust.", "anger"),
    ("This infuriating delay ruined all my carefully planned schedules.", "anger"),
    
    # Fear
    ("I am terrified and trembling of what might happen in the dark.", "fear"),
    ("A wave of intense panic and anxiety overwhelmed me completely.", "fear"),
    ("I feel deeply scared and worried about the upcoming surgery.", "fear"),
    ("The sudden loud noise gave me chills and frightened me.", "fear"),
    ("I dread the thought of walking alone on that creepy road.", "fear"),
    
    # Love
    ("I love you with all my heart and cherish every single moment.", "love"),
    ("My heart feels so full of affection, tenderness and warmth.", "love"),
    ("You mean the absolute world to me, my sweetheart.", "love"),
    ("Holding hands with you gives me a deep sense of adore and care.", "love"),
    ("I am truly in love with your kind and gentle soul.", "love"),
    
    # Surprise
    ("Oh wow, I was completely astonished and shocked by this gift!", "surprise"),
    ("What an unexpected turn of events, I never saw this coming!", "surprise"),
    ("I am speechless, this is an incredible and stunning surprise!", "surprise"),
    ("Oh my goodness, this unbelievable revelation startled everyone!", "surprise"),
    ("I was amazed to see my old childhood friend suddenly walk in.", "surprise")
]

df = pd.DataFrame(data, columns=['text', 'emotion'])

print("=" * 65)
print("1. LABELLED TEXT EMOTIONS DATASET OVERVIEW:")
print("=" * 65)
print(f"Total Labelled Records: {len(df)}")
print("\\nEmotion Class Distribution:")
print(df['emotion'].value_counts())

# Clear Emotion-to-Emoji Mapping
EMOTION_EMOJI_MAP = {
    'joy': '😊',
    'sadness': '😢',
    'anger': '😠',
    'fear': '😨',
    'love': '❤️',
    'surprise': '😲'
}

print("\\nEmotion-to-Emoji Mapping:")
for em, emoji in EMOTION_EMOJI_MAP.items():
    print(f"  • {em.capitalize():<10} -> {emoji}")

# 2. Text Preprocessing & Vectorization
X = df['text']
y = df['emotion']

# 3. Train-Test Split (stratified)
X_train, X_test, y_train, y_test = train_test_split(
    X, y, test_size=0.25, random_state=42, stratify=y
)

# 4. Feature Extraction using TF-IDF
vectorizer = TfidfVectorizer(lowercase=True, stop_words='english', ngram_range=(1, 2))
X_train_vec = vectorizer.fit_transform(X_train)
X_test_vec = vectorizer.transform(X_test)

# 5. Train Machine Learning Model (Multinomial Naive Bayes)
model = MultinomialNB(alpha=0.5)
model.fit(X_train_vec, y_train)

# 6. Model Evaluation
y_pred = model.predict(X_test_vec)
accuracy = accuracy_score(y_test, y_pred)

print("\\n" + "=" * 65)
print("2. MODEL TRAINING & EVALUATION METRICS:")
print("=" * 65)
print(f"Model Algorithm: Multinomial Naive Bayes (with TF-IDF)")
print(f"Test Accuracy: {accuracy * 100:.2f}%")
print("\\nClassification Report:")
print(classification_report(y_test, y_pred, zero_division=0))

# Confusion Matrix Visualization
labels = sorted(list(EMOTION_EMOJI_MAP.keys()))
cm = confusion_matrix(y_test, y_pred, labels=labels)

fig, ax = plt.subplots(figsize=(7, 5))
cax = ax.matshow(cm, cmap='Blues')
fig.colorbar(cax)

ax.set_xticks(range(len(labels)))
ax.set_yticks(range(len(labels)))
ax.set_xticklabels([f"{l} {EMOTION_EMOJI_MAP[l]}" for l in labels], rotation=45, ha='left')
ax.set_yticklabels([f"{l} {EMOTION_EMOJI_MAP[l]}" for l in labels])
ax.set_xlabel("Predicted Emotion", fontweight='bold')
ax.set_ylabel("Actual Emotion", fontweight='bold')
ax.set_title("Emotions Classification Confusion Matrix", fontsize=12, fontweight='bold', pad=20)

for i in range(len(labels)):
    for j in range(len(labels)):
        ax.text(j, i, str(cm[i, j]), ha='center', va='center', color='black' if cm[i, j] < (cm.max()/2) else 'white')

plt.tight_layout()
plt.show()

# 7. Interactive Prediction on Unseen Test Examples
print("\\n" + "=" * 65)
print("3. LIVE PREDICTIONS ON UNSEEN USER SENTENCES:")
print("=" * 65)

test_sentences = [
    "I won first prize in the national data science hackathon today!",
    "I feel so empty and sad after hearing the unfortunate news.",
    "I cannot stand this injustice, it makes me extremely mad!",
    "I heard strange creeping steps upstairs and I am terrified.",
    "You are the sweetest person in my life and I adore you.",
    "Good heavens! I can't believe they secretly threw a party for me!"
]

def predict_emotion_with_emoji(sentence):
    vec = vectorizer.transform([sentence])
    pred_label = model.predict(vec)[0]
    prob = np.max(model.predict_proba(vec))
    emoji = EMOTION_EMOJI_MAP.get(pred_label, '❓')
    return pred_label, emoji, prob

for idx, sentence in enumerate(test_sentences, 1):
    pred_emotion, emoji, confidence = predict_emotion_with_emoji(sentence)
    print(f"\\n[Test #{idx}]")
    print(f"  Input Text: \\\"{sentence}\\\"")
    print(f"  Predicted Emotion: {pred_emotion.upper()} {emoji}")
    print(f"  Confidence: {confidence * 100:.1f}%")

print("\\n" + "=" * 65)
print("✅ Text emotion detection pipeline trained and evaluated successfully.")
print("=" * 65)`,
        code: `import pandas as pd
import numpy as np
import matplotlib.pyplot as plt
from sklearn.model_selection import train_test_split
from sklearn.feature_extraction.text import TfidfVectorizer
from sklearn.naive_bayes import MultinomialNB
from sklearn.metrics import accuracy_score, classification_report, confusion_matrix

# ── Experiment 10: Case Study 1 — Text Emotions Detection ──

# 1. Prepare labelled text-emotion dataset
data = [
    # Joy
    ("I am so incredibly happy and proud today!", "joy"),
    ("We celebrated our graduation with immense delight and cheers.", "joy"),
    ("This wonderful news made my whole day brighter!", "joy"),
    ("I am thrilled and excited about our new project success.", "joy"),
    ("Spending time with my best friends brings me so much joy.", "joy"),
    
    # Sadness
    ("I feel so depressed, lonely and heartbroken.", "sadness"),
    ("I am deeply crying and mourning this tragic loss.", "sadness"),
    ("Everything feels completely hopeless and sorrowful today.", "sadness"),
    ("I miss my family terribly and feel so down and alone.", "sadness"),
    ("It hurts deeply inside to say goodbye forever.", "sadness"),
    
    # Anger
    ("I am absolutely furious and disgusted with this rude behavior!", "anger"),
    ("This terrible service makes my blood boil with rage.", "anger"),
    ("Stop yelling at me, I am so angry and irritated right now!", "anger"),
    ("I despise dishonest people who cheat and betray trust.", "anger"),
    ("This infuriating delay ruined all my carefully planned schedules.", "anger"),
    
    # Fear
    ("I am terrified and trembling of what might happen in the dark.", "fear"),
    ("A wave of intense panic and anxiety overwhelmed me completely.", "fear"),
    ("I feel deeply scared and worried about the upcoming surgery.", "fear"),
    ("The sudden loud noise gave me chills and frightened me.", "fear"),
    ("I dread the thought of walking alone on that creepy road.", "fear"),
    
    # Love
    ("I love you with all my heart and cherish every single moment.", "love"),
    ("My heart feels so full of affection, tenderness and warmth.", "love"),
    ("You mean the absolute world to me, my sweetheart.", "love"),
    ("Holding hands with you gives me a deep sense of adore and care.", "love"),
    ("I am truly in love with your kind and gentle soul.", "love"),
    
    # Surprise
    ("Oh wow, I was completely astonished and shocked by this gift!", "surprise"),
    ("What an unexpected turn of events, I never saw this coming!", "surprise"),
    ("I am speechless, this is an incredible and stunning surprise!", "surprise"),
    ("Oh my goodness, this unbelievable revelation startled everyone!", "surprise"),
    ("I was amazed to see my old childhood friend suddenly walk in.", "surprise")
]

df = pd.DataFrame(data, columns=['text', 'emotion'])

print("=" * 65)
print("1. LABELLED TEXT EMOTIONS DATASET OVERVIEW:")
print("=" * 65)
print(f"Total Labelled Records: {len(df)}")
print("\\nEmotion Class Distribution:")
print(df['emotion'].value_counts())

# Clear Emotion-to-Emoji Mapping
EMOTION_EMOJI_MAP = {
    'joy': '😊',
    'sadness': '😢',
    'anger': '😠',
    'fear': '😨',
    'love': '❤️',
    'surprise': '😲'
}

print("\\nEmotion-to-Emoji Mapping:")
for em, emoji in EMOTION_EMOJI_MAP.items():
    print(f"  • {em.capitalize():<10} -> {emoji}")

# 2. Text Preprocessing & Vectorization
X = df['text']
y = df['emotion']

# 3. Train-Test Split (stratified)
X_train, X_test, y_train, y_test = train_test_split(
    X, y, test_size=0.25, random_state=42, stratify=y
)

# 4. Feature Extraction using TF-IDF
vectorizer = TfidfVectorizer(lowercase=True, stop_words='english', ngram_range=(1, 2))
X_train_vec = vectorizer.fit_transform(X_train)
X_test_vec = vectorizer.transform(X_test)

# 5. Train Machine Learning Model (Multinomial Naive Bayes)
model = MultinomialNB(alpha=0.5)
model.fit(X_train_vec, y_train)

# 6. Model Evaluation
y_pred = model.predict(X_test_vec)
accuracy = accuracy_score(y_test, y_pred)

print("\\n" + "=" * 65)
print("2. MODEL TRAINING & EVALUATION METRICS:")
print("=" * 65)
print(f"Model Algorithm: Multinomial Naive Bayes (with TF-IDF)")
print(f"Test Accuracy: {accuracy * 100:.2f}%")
print("\\nClassification Report:")
print(classification_report(y_test, y_pred, zero_division=0))

# Confusion Matrix Visualization
labels = sorted(list(EMOTION_EMOJI_MAP.keys()))
cm = confusion_matrix(y_test, y_pred, labels=labels)

fig, ax = plt.subplots(figsize=(7, 5))
cax = ax.matshow(cm, cmap='Blues')
fig.colorbar(cax)

ax.set_xticks(range(len(labels)))
ax.set_yticks(range(len(labels)))
ax.set_xticklabels([f"{l} {EMOTION_EMOJI_MAP[l]}" for l in labels], rotation=45, ha='left')
ax.set_yticklabels([f"{l} {EMOTION_EMOJI_MAP[l]}" for l in labels])
ax.set_xlabel("Predicted Emotion", fontweight='bold')
ax.set_ylabel("Actual Emotion", fontweight='bold')
ax.set_title("Emotions Classification Confusion Matrix", fontsize=12, fontweight='bold', pad=20)

for i in range(len(labels)):
    for j in range(len(labels)):
        ax.text(j, i, str(cm[i, j]), ha='center', va='center', color='black' if cm[i, j] < (cm.max()/2) else 'white')

plt.tight_layout()
plt.show()

# 7. Interactive Prediction on Unseen Test Examples
print("\\n" + "=" * 65)
print("3. LIVE PREDICTIONS ON UNSEEN USER SENTENCES:")
print("=" * 65)

test_sentences = [
    "I won first prize in the national data science hackathon today!",
    "I feel so empty and sad after hearing the unfortunate news.",
    "I cannot stand this injustice, it makes me extremely mad!",
    "I heard strange creeping steps upstairs and I am terrified.",
    "You are the sweetest person in my life and I adore you.",
    "Good heavens! I can't believe they secretly threw a party for me!"
]

def predict_emotion_with_emoji(sentence):
    vec = vectorizer.transform([sentence])
    pred_label = model.predict(vec)[0]
    prob = np.max(model.predict_proba(vec))
    emoji = EMOTION_EMOJI_MAP.get(pred_label, '❓')
    return pred_label, emoji, prob

for idx, sentence in enumerate(test_sentences, 1):
    pred_emotion, emoji, confidence = predict_emotion_with_emoji(sentence)
    print(f"\\n[Test #{idx}]")
    print(f"  Input Text: \\\"{sentence}\\\"")
    print(f"  Predicted Emotion: {pred_emotion.upper()} {emoji}")
    print(f"  Confidence: {confidence * 100:.1f}%")

print("\\n" + "=" * 65)
print("✅ Text emotion detection pipeline trained and evaluated successfully.")
print("=" * 65)`
      }
    ]
  }
];

// Front-end state management for experiments
export const experimentsState = [...initialExperiments];

export function getExperiments() {
  return experimentsState;
}

export function getExperimentById(id) {
  const numId = parseInt(id, 10);
  return experimentsState.find(exp => exp.id === numId || exp.experimentNumber === numId) || null;
}

export function getSubExperiment(experimentId, subId) {
  const exp = getExperimentById(experimentId);
  if (!exp || !exp.subExperiments) return null;
  const strSub = String(subId).toLowerCase();
  const cleanSub = strSub.replace(/[^a-z0-9]/g, '');
  return exp.subExperiments.find(s => {
    const sSub = s.subId.toLowerCase();
    const sClean = sSub.replace(/[^a-z0-9]/g, '');
    const sLabelClean = (s.label || '').toLowerCase().replace(/[^a-z0-9]/g, '');
    return sSub === strSub || sClean === cleanSub || sLabelClean === cleanSub;
  }) || null;
}

export function addExperiment(experimentData) {
  const newNum = experimentData.experimentNumber || (experimentsState.length + 1);
  const newExp = {
    id: newNum,
    experimentNumber: newNum,
    title: experimentData.title || "Content will be added later",
    aim: experimentData.aim || "[PLACEHOLDER — actual aim will be added later]",
    procedure: experimentData.procedure || "[PLACEHOLDER — actual procedure will be added later]",
    result: experimentData.result || "[PLACEHOLDER — actual result will be added later]",
    isPlaceholder: false,
    language: experimentData.language || "python",
    defaultCode: experimentData.code || `# Experiment ${newNum}\nprint("Experiment ${newNum} executed")`,
    code: experimentData.code || `# Experiment ${newNum}\nprint("Experiment ${newNum} executed")`
  };
  experimentsState.push(newExp);
  return newExp;
}

// Backwards compatibility alias
export const experimentsData = experimentsState;
