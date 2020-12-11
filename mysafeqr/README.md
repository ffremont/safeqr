mysafeqr
========



[![oclif](https://img.shields.io/badge/cli-oclif-brightgreen.svg)](https://oclif.io)
[![Version](https://img.shields.io/npm/v/mysafeqr.svg)](https://npmjs.org/package/mysafeqr)
[![Downloads/week](https://img.shields.io/npm/dw/mysafeqr.svg)](https://npmjs.org/package/mysafeqr)
[![License](https://img.shields.io/npm/l/mysafeqr.svg)](https://github.com/ffremont/safeqr/blob/master/package.json)

<!-- toc -->
* [Usage](#usage)
* [Commands](#commands)
<!-- tocstop -->
# Usage
<!-- usage -->
```sh-session
$ npm install -g mysafeqr
$ mysafeqr COMMAND
running command...
$ mysafeqr (-v|--version|version)
mysafeqr/0.0.0 linux-x64 node-v10.15.1
$ mysafeqr --help [COMMAND]
USAGE
  $ mysafeqr COMMAND
...
```
<!-- usagestop -->
# Commands
<!-- commands -->
* [`mysafeqr hello [FILE]`](#mysafeqr-hello-file)
* [`mysafeqr help [COMMAND]`](#mysafeqr-help-command)

## `mysafeqr hello [FILE]`

describe the command here

```
USAGE
  $ mysafeqr hello [FILE]

OPTIONS
  -f, --force
  -h, --help       show CLI help
  -n, --name=name  name to print

EXAMPLE
  $ mysafeqr hello
  hello world from ./src/hello.ts!
```

_See code: [src/commands/hello.ts](https://github.com/ffremont/safeqr/blob/v0.0.0/src/commands/hello.ts)_

## `mysafeqr help [COMMAND]`

display help for mysafeqr

```
USAGE
  $ mysafeqr help [COMMAND]

ARGUMENTS
  COMMAND  command to show help for

OPTIONS
  --all  see all commands in CLI
```

_See code: [@oclif/plugin-help](https://github.com/oclif/plugin-help/blob/v3.2.0/src/commands/help.ts)_
<!-- commandsstop -->
