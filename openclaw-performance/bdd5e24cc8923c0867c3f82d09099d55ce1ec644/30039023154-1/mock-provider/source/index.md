# OpenClaw Source Performance

Generated: 2026-07-23T19:49:37.627Z

## Gateway Boot

| case | name | readyz p50 | readyz p95 | healthz p50 | http listen p50 | gateway ready p50 | first output p50 | RSS p95 | CPU core p95 |
| --- | --- | --- | --- | --- | --- | --- | --- | --- | --- |
| default | gateway default | 7272.4ms | 7487.4ms | 7272.3ms | 3594.2ms | 7125.4ms | 55.3ms | 886.9MB | 1.375 |
| skipChannels | gateway, skip channels | 7552.4ms | 8005.0ms | 7552.3ms | 3703.9ms | 3759.5ms | 51.5ms | 926.5MB | 1.374 |
| oneInternalHook | gateway, one configured internal hook | 9524.2ms | 10250.6ms | 9524.2ms | 6150.4ms | 6226.8ms | 63.0ms | 959.5MB | 1.366 |
| allInternalHooks | gateway, all internal hooks | 9094.7ms | 9457.8ms | 9078.4ms | 6129.3ms | 6199.0ms | 66.7ms | 1094.0MB | 1.319 |
| fiftyPlugins | gateway, 50 manifest plugins | 10150.8ms | 13721.7ms | 10150.7ms | 4827.6ms | 4912.8ms | 48.4ms | 1140.2MB | 1.281 |
| fiftyStartupLazyPlugins | gateway, 50 startup-lazy manifest plugins | 8907.5ms | 8951.1ms | 8907.2ms | 4186.9ms | 4289.3ms | 46.3ms | 1146.0MB | 1.235 |

## Memory Trend

No published source baseline was available for this tested ref.

No data.

## Bundled Plugin Import Memory

| plugin | max RSS | delta from empty process | status |
| --- | --- | --- | --- |
| active-memory | 531.3MB | 484.8MB | ok |
| voice-call | 512.0MB | 465.5MB | ok |
| codex | 510.6MB | 464.2MB | ok |
| zoom-meetings | 510.6MB | 464.1MB | ok |
| memory-lancedb | 508.6MB | 462.1MB | ok |
| anthropic | 507.8MB | 461.3MB | ok |
| teams-meetings | 506.7MB | 460.3MB | ok |
| google-meet | 505.6MB | 459.1MB | ok |
| workboard | 505.3MB | 458.9MB | ok |
| llm-task | 505.3MB | 458.8MB | ok |

## Startup Hotspots

| case | phase | p50 | p95 |
| --- | --- | --- | --- |
| default | sidecars.session-locks.total | 4548.5ms | 4631.2ms |
| default | post-ready.agent-runtime-plugins.total | 4525.8ms | 4593.3ms |
| default | post-attach.update-check.total | 4521.6ms | 4587.4ms |
| default | post-attach.update-sentinel.total | 4511.1ms | 4572.3ms |
| default | sidecars.restart-sentinel.total | 4509.6ms | 4570.6ms |
| skipChannels | sidecars.session-locks.total | 4944.5ms | 5008.7ms |
| skipChannels | post-ready.agent-runtime-plugins.total | 4942.0ms | 5005.5ms |
| skipChannels | post-attach.update-sentinel.total | 4928.8ms | 4987.7ms |
| skipChannels | sidecars.restart-sentinel.total | 4927.3ms | 4985.6ms |
| skipChannels | sidecars.ready.total | 4893.9ms | 4954.8ms |
| oneInternalHook | cli.main.gateway-run-bootstrap.total | 4671.0ms | 5440.9ms |
| oneInternalHook | sidecars.session-locks.total | 4324.2ms | 4364.1ms |
| oneInternalHook | post-ready.agent-runtime-plugins.total | 4321.9ms | 4361.4ms |
| oneInternalHook | post-attach.update-sentinel.total | 4308.2ms | 4345.0ms |
| oneInternalHook | sidecars.restart-sentinel.total | 4306.6ms | 4343.5ms |
| allInternalHooks | cli.main.gateway-run-bootstrap.total | 4647.4ms | 4679.6ms |
| allInternalHooks | sidecars.session-locks.total | 3923.2ms | 4316.8ms |
| allInternalHooks | post-ready.agent-runtime-plugins.total | 3921.1ms | 4312.7ms |
| allInternalHooks | post-attach.update-sentinel.total | 3907.1ms | 4290.4ms |
| allInternalHooks | sidecars.restart-sentinel.total | 3905.2ms | 4288.3ms |
| fiftyPlugins | sidecars.session-locks.total | 6340.1ms | 9342.3ms |
| fiftyPlugins | post-ready.maintenance.total | 6219.8ms | 9230.8ms |
| fiftyPlugins | post-ready.agent-runtime-plugins.total | 6167.0ms | 9184.3ms |
| fiftyPlugins | post-attach.update-sentinel.total | 5849.3ms | 8536.4ms |
| fiftyPlugins | sidecars.restart-sentinel.total | 5847.8ms | 8534.8ms |
| fiftyStartupLazyPlugins | sidecars.session-locks.total | 5156.6ms | 5310.1ms |
| fiftyStartupLazyPlugins | post-ready.maintenance.total | 5057.4ms | 5212.4ms |
| fiftyStartupLazyPlugins | post-ready.agent-runtime-plugins.total | 5018.4ms | 5165.9ms |
| fiftyStartupLazyPlugins | post-attach.update-sentinel.total | 4809.3ms | 4950.6ms |
| fiftyStartupLazyPlugins | sidecars.restart-sentinel.total | 4808.5ms | 4949.7ms |

## Fake Model Hello Loops

| run | status | pass | wall | gateway CPU core | RSS start | RSS end | RSS delta | model |
| --- | --- | --- | --- | --- | --- | --- | --- | --- |
| run-001 | pass | 1/1 | 11808.0ms | 0.000 | 2498.7MB | 1051.3MB | -1447.4MB | mock-openai/gpt-5.6-luna |
| run-002 | pass | 1/1 | 10181.0ms | 0.098 | 813.0MB | 1010.2MB | 197.1MB | mock-openai/gpt-5.6-luna |
| run-003 | pass | 1/1 | 11261.0ms | 0.178 | 853.9MB | 1020.7MB | 166.7MB | mock-openai/gpt-5.6-luna |

## CLI Against Booted Gateway

| case | command | duration p50 | duration p95 | RSS p95 | exits |
| --- | --- | --- | --- | --- | --- |
| gatewayHealthJson | gateway health --json | 3753.4ms | 3760.0ms | 61.6MB | code:0 x3 |
| configGetGatewayPort | config get gateway.port | 840.0ms | 877.6ms | 61.5MB | code:0 x3 |

## SQLite State Smoke

| profile | state rows | agent rows | integrity | WAL before | WAL after | query p95 max | total |
| --- | --- | --- | --- | --- | --- | --- | --- |
| smoke | 4100 | 1000 | ok | 3.2MB | 0.0MB | 0.0ms | 80.1ms |

## Observations

No data.

