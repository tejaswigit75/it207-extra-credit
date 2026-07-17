# dirwc — Directory Line Counter

A lightweight, custom command-line tool built as an optional extra credit activity for **IT 207: Applied IT Programming** at George Mason University. 

---

## Section 1 — Command Description

### What It Does
`dirwc` (Directory Word/Line Counter) acts as an automated folder auditor. It combines the capabilities of two standard Linux filesystem commands:
1. **`ls`** (Listing directory contents)
2. **`wc -l`** (Counting the lines of a file)

Instead of forcing a developer to manually list files and run individual line counts on each one, `dirwc` accepts a directory path as a command-line argument, filters out subdirectories, and outputs a formatted terminal grid displaying every individual file name alongside its total line count. It concludes by presenting a cumulative summary of the total files processed and the grand total of lines calculated.

### How to Run It
Run the tool using Node.js from your terminal:

```bash
node newfile.js [directory_path]
