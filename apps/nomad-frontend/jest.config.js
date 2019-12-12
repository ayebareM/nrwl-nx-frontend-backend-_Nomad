module.exports = {
  name: 'nomad-frontend',
  preset: '../../jest.config.js',
  coverageDirectory: '../../coverage/apps/nomad-frontend',
  snapshotSerializers: [
    'jest-preset-angular/AngularSnapshotSerializer.js',
    'jest-preset-angular/HTMLCommentSerializer.js'
  ]
};
