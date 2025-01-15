## Expo Camera: onBarCodeScanned returns undefined 'type'

This repository demonstrates a bug in the Expo Camera API where the `type` property of the barcode data returned by `onBarCodeScanned` is sometimes undefined. This leads to runtime errors when accessing this property.

The `bug.js` file shows the problematic code, and `bugSolution.js` provides a solution to handle the undefined `type` property gracefully.

**To reproduce:** Run the `bug.js` example. Scan a barcode. You might encounter an error, or you might not, depending on the inconsistency of this bug.

**Solution:** The `bugSolution.js` file demonstrates how to check for the existence of the `type` property before accessing it.