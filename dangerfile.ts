// dangerfile.js
import eslint from '@seadub/danger-plugin-eslint'
import compilerOptions from './tsconfig.json'
import { keepachangelog } from 'danger-plugin-keepachangelog'

keepachangelog()
eslint(compilerOptions)
