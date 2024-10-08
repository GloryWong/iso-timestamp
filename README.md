![GitHub License](https://img.shields.io/github/license/GloryWong/iso-timestamp)
![GitHub commit activity](https://img.shields.io/github/commit-activity/w/GloryWong/iso-timestamp)
![GitHub Actions Workflow Status](https://img.shields.io/github/actions/workflow/status/GloryWong/iso-timestamp/release.yml)
![GitHub Release](https://img.shields.io/github/v/release/GloryWong/iso-timestamp)
![GitHub Release Date](https://img.shields.io/github/release-date/GloryWong/iso-timestamp)
![GitHub Issues or Pull Requests](https://img.shields.io/github/issues/GloryWong/iso-timestamp)
![GitHub watchers](https://img.shields.io/github/watchers/GloryWong/iso-timestamp)
![GitHub forks](https://img.shields.io/github/forks/GloryWong/iso-timestamp)
![GitHub Repo stars](https://img.shields.io/github/stars/GloryWong/iso-timestamp)
![NPM Version](https://img.shields.io/npm/v/iso-timestamp)
![NPM Type Definitions](https://img.shields.io/npm/types/iso-timestamp)
![NPM Downloads](https://img.shields.io/npm/dw/iso-timestamp)
![Node Current](https://img.shields.io/node/v/iso-timestamp)

# iso-timestamp

Generate ISO 8601 timestamp: YYYYMMDDhhmmssSSS

### Install

```bash
npm install iso-timestamp
```

or

```bash
yarn add iso-timestamp
```

or

```bash
pnpm add iso-timestamp
```

### API

#### `timestamp(options?)` or `timestamp(date, options?)`

  * `date`: Custom date

  * options:
    * `excludeTime`: Exclude time, i.e. hour, minute and second. *Default: false*
    * `excludeMillisecond`: Exclude millisecond from time. *Default: false*
    * `separator`: Separator among elements of the timestamp. *Default: ''*

```typescript
import timestamp from 'iso-timestamp'
// Or import { timestamp } from 'iso-timestamp'

timestamp()
// return current timestamp: 202408070101123

timestamp({ excludeMillisecond: true })
// return timestamp with millisecond excluded: 202408070101

timestamp({ excludeTime: true })
// return timestamp with time excluded: 20240807

timestamp(new Date('2050-03-04T12:03:04.123'), { excludeMillisecond: true })
// return timestamp with custom Date: 20500304120304

timestamp({ separator: '-', excludeTime: true })
// return timestamp with custom separator: 2024-08-07
```

## Authors

👤 **GloryWong**

* Website: https://glorywong.com
* GitHub: [@GloryWong](https://github.com/GloryWong)

## Show Your Support

Give a ⭐️ if this project helped you!
