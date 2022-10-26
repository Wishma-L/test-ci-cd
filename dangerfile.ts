// dangerfile.js
import eslint from '@seadub/danger-plugin-eslint'
import compilerOptions from './tsconfig.json'
import { keepachangelog } from 'danger-plugin-keepachangelog'
import { message, warn, fail, markdown } from "danger"


// Add a message to the table
message("You have added 2 more modules to the app")

//  Adds a warning to the table
warn("You have not included a CHANGELOG entry.")

// Declares a blocking 
fail(`ESLint has failed with few fails.`)

// Show markdown under the table:
markdown("## New module Danger")

keepachangelog()
eslint(compilerOptions)
