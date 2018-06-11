import { Tree } from '@angular-devkit/schematics';
import { SchematicTestRunner } from '@angular-devkit/schematics/testing';
import * as path from 'path';


const collectionPath = path.join(__dirname, '../collection.json');


describe('ng-new', () => {
  it('works', () => {
    const runner = new SchematicTestRunner('schematics', collectionPath);
    const options = {
      name: 'bar'
    };
    const tree = runner.runSchematic('ng-new', options, Tree.empty());
    const files = tree.files;

    expect(files.indexOf('/bar/angular.json')).toBeGreaterThanOrEqual(0);
    
  });
});
