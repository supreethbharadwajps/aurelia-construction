#!/bin/bash

echo "=== Checking all component exports ==="
echo ""

# Check each file for proper exports
for file in src/pages/*.js src/components/*.js; do
  if [ -f "$file" ]; then
    echo "File: $file"
    echo "First line: $(head -1 $file)"
    echo "Last line: $(tail -1 $file)"
    
    # Check for export default
    if grep -q "export default" "$file"; then
      echo "✓ Has export default"
    else
      echo "✗ MISSING export default"
    fi
    
    # Check for function/component definition
    if grep -q "function\|const.*=.*()" "$file"; then
      echo "✓ Has component definition"
    else
      echo "✗ MISSING component definition"
    fi
    
    echo "---"
  fi
done
