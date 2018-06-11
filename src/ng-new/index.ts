import {
    externalSchematic,
    Rule,
    chain
} from '@angular-devkit/schematics';


// You don't have to export the function as default. You can also have more than one rule factory
// per file.
export function ngNew(options: any): Rule {
  
  options.skipInstall = true;
  options.version = '6.0.7';
  console.log('Running your custom schematic');
  return chain([
    externalSchematic('@schematics/angular', 'ng-new', options)
  ]);
}
