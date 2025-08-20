// Mirror of the course's all_checks.py, but in JavaScript (Node.js)

const fs = require('fs');
const path = require('path');

// On many Linux systems, this file exists when a reboot is required.
const DEFAULT_REBOOT_PATH = '/run/reboot-required';

// Optional: allow a simulated path via env var (useful on macOS)
const SIM_ENV = 'REBOOT_REQUIRED_FILE';

/** Returns true if the computer has a pending reboot. */
function checkReboot() {
  const simPath = process.env[SIM_ENV];
  const target = simPath && simPath.trim().length > 0 ? simPath : DEFAULT_REBOOT_PATH;
  return fs.existsSync(path.resolve(target));
}

function main() {
  if (checkReboot()) {
    console.log('Pending Reboot.');
    process.exit(1); // exit with non-zero like the Python example
  }
  // no output if all good (to match the course’s behavior)
}

main();
