# OpenClaw Source Performance

Generated: 2026-07-23T22:51:15.071Z

## Gateway Boot

| case | name | readyz p50 | readyz p95 | healthz p50 | http listen p50 | gateway ready p50 | first output p50 | RSS p95 | CPU core p95 |
| --- | --- | --- | --- | --- | --- | --- | --- | --- | --- |
| default | gateway default | 7183.1ms | 7800.8ms | 7183.0ms | 3587.9ms | 7030.9ms | 46.8ms | 912.5MB | 1.392 |
| skipChannels | gateway, skip channels | 6548.9ms | 6615.2ms | 6548.9ms | 3244.0ms | 3286.9ms | 44.4ms | 895.8MB | 1.276 |
| oneInternalHook | gateway, one configured internal hook | 6583.5ms | 7492.9ms | 6583.5ms | 4284.0ms | 4328.5ms | 43.9ms | 975.2MB | 1.375 |
| allInternalHooks | gateway, all internal hooks | 4318.6ms | 6730.1ms | 4318.4ms | 4253.2ms | 4286.3ms | 42.8ms | 977.1MB | 1.390 |
| fiftyPlugins | gateway, 50 manifest plugins | 10307.6ms | 10411.9ms | 10307.5ms | 5036.2ms | 5133.3ms | 53.4ms | 1137.6MB | 1.261 |
| fiftyStartupLazyPlugins | gateway, 50 startup-lazy manifest plugins | 8682.1ms | 8756.4ms | 8675.4ms | 4216.0ms | 4301.8ms | 43.7ms | 1128.5MB | 1.267 |

## Memory Trend

No published source baseline was available for this tested ref.

No data.

## Bundled Plugin Import Memory

| plugin | max RSS | delta from empty process | status |
| --- | --- | --- | --- |
| codex | 511.9MB | 465.3MB | ok |
| active-memory | 510.2MB | 463.6MB | ok |
| anthropic | 508.9MB | 462.4MB | ok |
| zoom-meetings | 508.3MB | 461.7MB | ok |
| teams-meetings | 507.1MB | 460.6MB | ok |
| memory-lancedb | 506.1MB | 459.5MB | ok |
| voice-call | 506.1MB | 459.5MB | ok |
| workboard | 504.8MB | 458.2MB | ok |
| google-meet | 504.8MB | 458.2MB | ok |
| migrate-hermes | 504.6MB | 458.0MB | ok |

## Startup Hotspots

| case | phase | p50 | p95 |
| --- | --- | --- | --- |
| default | sidecars.session-locks.total | 4370.5ms | 4436.2ms |
| default | post-ready.agent-runtime-plugins.total | 4350.3ms | 4397.4ms |
| default | post-attach.update-check.total | 4347.7ms | 4393.1ms |
| default | post-attach.update-sentinel.total | 4339.2ms | 4380.4ms |
| default | sidecars.restart-sentinel.total | 4338.1ms | 4378.6ms |
| skipChannels | sidecars.session-locks.total | 4209.5ms | 4224.3ms |
| skipChannels | post-ready.agent-runtime-plugins.total | 4207.6ms | 4222.5ms |
| skipChannels | post-attach.update-sentinel.total | 4202.9ms | 4218.0ms |
| skipChannels | sidecars.restart-sentinel.total | 4201.8ms | 4216.8ms |
| skipChannels | sidecars.ready.total | 4184.3ms | 4199.9ms |
| oneInternalHook | cli.main.gateway-run-bootstrap.total | 3271.6ms | 3810.2ms |
| oneInternalHook | sidecars.session-locks.total | 3155.5ms | 3332.9ms |
| oneInternalHook | post-ready.agent-runtime-plugins.total | 3153.8ms | 3331.1ms |
| oneInternalHook | post-attach.update-sentinel.total | 3145.8ms | 3319.5ms |
| oneInternalHook | sidecars.restart-sentinel.total | 3144.6ms | 3318.3ms |
| allInternalHooks | cli.main.gateway-run-bootstrap.total | 3260.1ms | 3358.5ms |
| allInternalHooks | sidecars.session-locks.total | 3031.3ms | 3031.3ms |
| allInternalHooks | post-ready.agent-runtime-plugins.total | 3029.8ms | 3029.8ms |
| allInternalHooks | post-attach.update-sentinel.total | 3025.6ms | 3025.6ms |
| allInternalHooks | sidecars.restart-sentinel.total | 3024.7ms | 3024.7ms |
| fiftyPlugins | sidecars.session-locks.total | 6131.8ms | 6252.7ms |
| fiftyPlugins | post-ready.maintenance.total | 6041.3ms | 6150.8ms |
| fiftyPlugins | post-ready.agent-runtime-plugins.total | 6002.7ms | 6111.3ms |
| fiftyPlugins | post-attach.update-sentinel.total | 5796.9ms | 5875.7ms |
| fiftyPlugins | sidecars.restart-sentinel.total | 5795.8ms | 5874.2ms |
| fiftyStartupLazyPlugins | sidecars.session-locks.total | 4886.2ms | 5169.0ms |
| fiftyStartupLazyPlugins | post-ready.maintenance.total | 4794.2ms | 5068.5ms |
| fiftyStartupLazyPlugins | post-ready.agent-runtime-plugins.total | 4757.7ms | 5029.2ms |
| fiftyStartupLazyPlugins | post-attach.update-sentinel.total | 4548.1ms | 4810.9ms |
| fiftyStartupLazyPlugins | sidecars.restart-sentinel.total | 4547.2ms | 4809.9ms |

## Fake Model Hello Loops

| run | status | pass | wall | gateway CPU core | RSS start | RSS end | RSS delta | model |
| --- | --- | --- | --- | --- | --- | --- | --- | --- |
| run-001 | pass | 1/1 | 10370.0ms | 0.000 | 2463.0MB | 1044.9MB | -1418.1MB | mock-openai/gpt-5.6-luna |
| run-002 | pass | 1/1 | 10072.0ms | 0.099 | 843.6MB | 1063.3MB | 219.7MB | mock-openai/gpt-5.6-luna |
| run-003 | pass | 1/1 | 10336.0ms | 0.097 | 824.9MB | 1013.7MB | 188.8MB | mock-openai/gpt-5.6-luna |

## CLI Against Booted Gateway

| case | command | duration p50 | duration p95 | RSS p95 | exits |
| --- | --- | --- | --- | --- | --- |
| gatewayHealthJson | gateway health --json | 3661.2ms | 3661.5ms | 62.1MB | code:0 x3 |
| configGetGatewayPort | config get gateway.port | 847.7ms | 884.9ms | 61.5MB | code:0 x3 |

## SQLite State Smoke

| profile | state rows | agent rows | integrity | WAL before | WAL after | query p95 max | total |
| --- | --- | --- | --- | --- | --- | --- | --- |
| smoke | 4100 | 1000 | ok | 3.2MB | 0.0MB | 0.0ms | 70.3ms |

## Observations

No data.

