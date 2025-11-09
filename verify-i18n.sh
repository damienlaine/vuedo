#!/bin/bash

# Vue&Do i18n Verification Script
# This script verifies the i18n implementation is correct

echo "=========================================="
echo "Vue&Do i18n Verification"
echo "=========================================="
echo ""

# Color codes
GREEN='\033[0;32m'
RED='\033[0;31m'
YELLOW='\033[1;33m'
NC='\033[0m' # No Color

# Counter for tests
PASSED=0
FAILED=0

# Test 1: Check no old span lang tags remain
echo -n "Test 1: Checking for old <span lang> tags... "
if grep -q '<span lang=' index.html 2>/dev/null; then
    OLD_SPANS=$(grep -c '<span lang=' index.html)
    echo -e "${RED}FAIL${NC} ($OLD_SPANS found)"
    ((FAILED++))
else
    echo -e "${GREEN}PASS${NC} (0 found)"
    ((PASSED++))
fi

# Test 2: Count data-i18n attributes
echo -n "Test 2: Checking data-i18n attributes... "
DATA_I18N_COUNT=$(grep -c 'data-i18n=' index.html 2>/dev/null || echo "0")
if [ "$DATA_I18N_COUNT" -gt "100" ]; then
    echo -e "${GREEN}PASS${NC} ($DATA_I18N_COUNT found)"
    ((PASSED++))
else
    echo -e "${RED}FAIL${NC} (Only $DATA_I18N_COUNT found, expected >100)"
    ((FAILED++))
fi

# Test 3: Validate JavaScript syntax
echo -n "Test 3: Validating JavaScript syntax... "
if node -c js/i18n.js 2>/dev/null; then
    echo -e "${GREEN}PASS${NC}"
    ((PASSED++))
else
    echo -e "${RED}FAIL${NC} (JavaScript has syntax errors)"
    ((FAILED++))
fi

# Test 4: Check translation object exists
echo -n "Test 4: Checking translation object... "
if grep -q "const translations = {" js/i18n.js; then
    echo -e "${GREEN}PASS${NC}"
    ((PASSED++))
else
    echo -e "${RED}FAIL${NC} (Translation object not found)"
    ((FAILED++))
fi

# Test 5: Check both language objects exist
echo -n "Test 5: Checking English translations... "
if grep -q "en: {" js/i18n.js; then
    echo -e "${GREEN}PASS${NC}"
    ((PASSED++))
else
    echo -e "${RED}FAIL${NC} (English translations not found)"
    ((FAILED++))
fi

echo -n "Test 6: Checking French translations... "
if grep -q "fr: {" js/i18n.js; then
    echo -e "${GREEN}PASS${NC}"
    ((PASSED++))
else
    echo -e "${RED}FAIL${NC} (French translations not found)"
    ((FAILED++))
fi

# Test 7: Check applyTranslations function exists
echo -n "Test 7: Checking applyTranslations function... "
if grep -q "function applyTranslations(lang)" js/i18n.js; then
    echo -e "${GREEN}PASS${NC}"
    ((PASSED++))
else
    echo -e "${RED}FAIL${NC} (applyTranslations function not found)"
    ((FAILED++))
fi

# Test 8: Check switchLanguage function exists
echo -n "Test 8: Checking switchLanguage function... "
if grep -q "function switchLanguage(lang)" js/i18n.js; then
    echo -e "${GREEN}PASS${NC}"
    ((PASSED++))
else
    echo -e "${RED}FAIL${NC} (switchLanguage function not found)"
    ((FAILED++))
fi

# Test 9: Check HTML structure
echo -n "Test 9: Checking HTML structure... "
if [ -f "index.html" ] && grep -q "<!DOCTYPE html>" index.html; then
    echo -e "${GREEN}PASS${NC}"
    ((PASSED++))
else
    echo -e "${RED}FAIL${NC} (HTML structure invalid)"
    ((FAILED++))
fi

# Test 10: Check i18n.js is loaded in HTML
echo -n "Test 10: Checking i18n.js is loaded... "
if grep -q 'src="/js/i18n.js"' index.html || grep -q "src='/js/i18n.js'" index.html; then
    echo -e "${GREEN}PASS${NC}"
    ((PASSED++))
else
    echo -e "${RED}FAIL${NC} (i18n.js not loaded in HTML)"
    ((FAILED++))
fi

# Summary
echo ""
echo "=========================================="
echo "Summary"
echo "=========================================="
echo "Tests passed: ${GREEN}$PASSED${NC}"
echo "Tests failed: ${RED}$FAILED${NC}"
echo ""

if [ "$FAILED" -eq "0" ]; then
    echo -e "${GREEN}✓ All tests passed! i18n implementation is correct.${NC}"
    echo ""
    echo "Next steps:"
    echo "1. Open index.html in a browser"
    echo "2. Verify content is visible immediately"
    echo "3. Click EN/FR buttons to test language switching"
    echo "4. Open test-i18n.html for detailed testing"
    exit 0
else
    echo -e "${RED}✗ Some tests failed. Please review the errors above.${NC}"
    exit 1
fi
