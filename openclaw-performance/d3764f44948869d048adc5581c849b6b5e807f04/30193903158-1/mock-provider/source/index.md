# OpenClaw Source Performance

Generated: 2026-07-26T08:09:18.354Z

## Gateway Boot

| case | name | readyz p50 | readyz p95 | healthz p50 | http listen p50 | gateway ready p50 | first output p50 | RSS p95 | CPU core p95 |
| --- | --- | --- | --- | --- | --- | --- | --- | --- | --- |
| default | gateway default | 6117.0ms | 6216.2ms | 6116.9ms | 3211.6ms | 6014.2ms | 43.8ms | 1058.0MB | 1.322 |
| skipChannels | gateway, skip channels | 6180.2ms | 6207.9ms | 6180.2ms | 3195.9ms | 3234.7ms | 44.0ms | 1013.7MB | 1.294 |
| oneInternalHook | gateway, one configured internal hook | 4671.8ms | 6823.0ms | 4671.4ms | 4543.2ms | 4584.8ms | 41.4ms | 1051.4MB | 1.319 |
| allInternalHooks | gateway, all internal hooks | 4675.3ms | 6774.0ms | 4675.0ms | 4535.3ms | 4579.1ms | 44.1ms | 1172.1MB | 1.301 |
| fiftyPlugins | gateway, 50 manifest plugins | 8385.7ms | 8427.5ms | 8385.5ms | 4425.2ms | 4502.1ms | 42.7ms | 1173.4MB | 1.212 |
| fiftyStartupLazyPlugins | gateway, 50 startup-lazy manifest plugins | 8226.1ms | 8353.0ms | 8226.1ms | 4143.3ms | 4233.6ms | 40.3ms | 1135.3MB | 1.228 |

## Memory Trend

No published source baseline was available for this tested ref.

No data.

## Bundled Plugin Import Memory

| plugin | max RSS | delta from empty process | status |
| --- | --- | --- | --- |
| google-meet | 539.6MB | 493.1MB | ok |
| memory-lancedb | 537.8MB | 491.3MB | ok |
| opencode | 517.7MB | 471.2MB | ok |
| active-memory | 516.6MB | 470.1MB | ok |
| migrate-hermes | 516.4MB | 469.9MB | ok |
| zoom-meetings | 516.1MB | 469.6MB | ok |
| llm-task | 514.1MB | 467.6MB | ok |
| workboard | 511.1MB | 464.7MB | ok |
| voice-call | 509.5MB | 463.1MB | ok |
| codex | 508.5MB | 462.0MB | ok |

## Startup Hotspots

| case | phase | p50 | p95 |
| --- | --- | --- | --- |
| default | sidecars.session-locks.total | 3865.8ms | 3951.6ms |
| default | post-ready.agent-runtime-plugins.total | 3841.8ms | 3928.2ms |
| default | post-attach.update-check.total | 3839.2ms | 3925.7ms |
| default | post-attach.update-sentinel.total | 3830.7ms | 3917.0ms |
| default | sidecars.restart-sentinel.total | 3829.7ms | 3916.0ms |
| skipChannels | sidecars.session-locks.total | 3951.2ms | 3988.8ms |
| skipChannels | post-ready.agent-runtime-plugins.total | 3949.3ms | 3986.8ms |
| skipChannels | post-attach.update-sentinel.total | 3945.2ms | 3982.5ms |
| skipChannels | sidecars.restart-sentinel.total | 3944.1ms | 3981.4ms |
| skipChannels | sidecars.ready.total | 3932.7ms | 3969.8ms |
| oneInternalHook | cli.main.gateway-run-bootstrap.total | 3391.0ms | 3467.2ms |
| oneInternalHook | sidecars.session-locks.total | 3119.9ms | 3119.9ms |
| oneInternalHook | post-ready.agent-runtime-plugins.total | 3118.3ms | 3118.3ms |
| oneInternalHook | post-attach.update-sentinel.total | 3114.2ms | 3114.2ms |
| oneInternalHook | sidecars.restart-sentinel.total | 3113.2ms | 3113.2ms |
| allInternalHooks | cli.main.gateway-run-bootstrap.total | 3396.3ms | 3447.9ms |
| allInternalHooks | sidecars.session-locks.total | 3026.8ms | 3026.8ms |
| allInternalHooks | post-ready.agent-runtime-plugins.total | 3025.1ms | 3025.1ms |
| allInternalHooks | post-attach.update-sentinel.total | 3020.6ms | 3020.6ms |
| allInternalHooks | sidecars.restart-sentinel.total | 3019.6ms | 3019.6ms |
| fiftyPlugins | sidecars.session-locks.total | 4848.2ms | 4897.1ms |
| fiftyPlugins | post-ready.maintenance.total | 4762.7ms | 4805.1ms |
| fiftyPlugins | post-ready.agent-runtime-plugins.total | 4727.4ms | 4770.6ms |
| fiftyPlugins | post-attach.update-sentinel.total | 4538.9ms | 4569.0ms |
| fiftyPlugins | sidecars.restart-sentinel.total | 4537.9ms | 4568.0ms |
| fiftyStartupLazyPlugins | sidecars.session-locks.total | 4725.6ms | 4772.3ms |
| fiftyStartupLazyPlugins | post-ready.maintenance.total | 4638.5ms | 4684.1ms |
| fiftyStartupLazyPlugins | post-ready.agent-runtime-plugins.total | 4606.2ms | 4651.0ms |
| fiftyStartupLazyPlugins | post-attach.update-sentinel.total | 4411.4ms | 4452.4ms |
| fiftyStartupLazyPlugins | sidecars.restart-sentinel.total | 4410.6ms | 4451.4ms |

## Fake Model Hello Loops

| run | status | pass | wall | gateway CPU core | RSS start | RSS end | RSS delta | model |
| --- | --- | --- | --- | --- | --- | --- | --- | --- |
| run-001 | pass | 1/1 | 10968.0ms | 0.000 | 2496.1MB | 1057.1MB | -1439.0MB | mock-openai/gpt-5.6-luna |
| run-002 | pass | 1/1 | 10661.0ms | 0.094 | 878.0MB | 1033.5MB | 155.5MB | mock-openai/gpt-5.6-luna |
| run-003 | pass | 1/1 | 10405.0ms | 0.096 | 869.2MB | 1034.0MB | 164.9MB | mock-openai/gpt-5.6-luna |

## CLI Against Booted Gateway

| case | command | duration p50 | duration p95 | RSS p95 | exits |
| --- | --- | --- | --- | --- | --- |
| gatewayHealthJson | gateway health --json | 3455.1ms | 3478.9ms | 61.8MB | code:0 x3 |
| configGetGatewayPort | config get gateway.port | 836.4ms | 855.0ms | 61.7MB | code:0 x3 |

## SQLite State Smoke

| profile | state rows | agent rows | integrity | WAL before | WAL after | query p95 max | total |
| --- | --- | --- | --- | --- | --- | --- | --- |
| smoke | 4100 | 1000 | ok | 3.2MB | 0.0MB | 0.3ms | 134.9ms |

## Observations

No data.

