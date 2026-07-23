# OpenClaw Source Performance

Generated: 2026-07-23T15:43:33.782Z

## Gateway Boot

| case | name | readyz p50 | readyz p95 | healthz p50 | http listen p50 | gateway ready p50 | first output p50 | RSS p95 | CPU core p95 |
| --- | --- | --- | --- | --- | --- | --- | --- | --- | --- |
| default | gateway default | 7641.1ms | 7650.3ms | 7641.0ms | 3925.5ms | 7497.7ms | 46.8ms | 914.9MB | 1.310 |
| skipChannels | gateway, skip channels | 6961.2ms | 7915.5ms | 6961.2ms | 3391.3ms | 3438.6ms | 48.3ms | 915.0MB | 1.312 |
| oneInternalHook | gateway, one configured internal hook | 8355.0ms | 8466.4ms | 8354.9ms | 5356.4ms | 5422.5ms | 50.3ms | 967.6MB | 1.317 |
| allInternalHooks | gateway, all internal hooks | 8072.7ms | 9602.0ms | 8072.6ms | 5498.0ms | 5556.4ms | 57.0ms | 943.7MB | 1.343 |
| fiftyPlugins | gateway, 50 manifest plugins | 10603.4ms | 11173.1ms | 10603.4ms | 5406.3ms | 5519.4ms | 50.0ms | 1152.9MB | 1.253 |
| fiftyStartupLazyPlugins | gateway, 50 startup-lazy manifest plugins | 9558.3ms | 9721.3ms | 9558.2ms | 4716.4ms | 4816.2ms | 46.5ms | 1138.3MB | 1.255 |

## Memory Trend

No published source baseline was available for this tested ref.

No data.

## Bundled Plugin Import Memory

| plugin | max RSS | delta from empty process | status |
| --- | --- | --- | --- |
| google-meet | 513.4MB | 466.9MB | ok |
| active-memory | 512.0MB | 465.6MB | ok |
| migrate-hermes | 508.8MB | 462.3MB | ok |
| codex | 508.6MB | 462.1MB | ok |
| llm-task | 506.6MB | 460.2MB | ok |
| voice-call | 506.1MB | 459.6MB | ok |
| anthropic | 504.6MB | 458.1MB | ok |
| teams-meetings | 504.2MB | 457.8MB | ok |
| workboard | 504.0MB | 457.5MB | ok |
| memory-lancedb | 502.8MB | 456.3MB | ok |

## Startup Hotspots

| case | phase | p50 | p95 |
| --- | --- | --- | --- |
| default | sidecars.session-locks.total | 4730.9ms | 4790.8ms |
| default | post-ready.agent-runtime-plugins.total | 4721.3ms | 4762.3ms |
| default | post-attach.update-check.total | 4717.6ms | 4758.4ms |
| default | post-attach.update-sentinel.total | 4706.2ms | 4747.0ms |
| default | sidecars.restart-sentinel.total | 4704.7ms | 4745.5ms |
| skipChannels | sidecars.session-locks.total | 4421.7ms | 4864.7ms |
| skipChannels | post-ready.agent-runtime-plugins.total | 4419.5ms | 4862.6ms |
| skipChannels | post-attach.update-sentinel.total | 4413.5ms | 4850.4ms |
| skipChannels | sidecars.restart-sentinel.total | 4412.1ms | 4849.0ms |
| skipChannels | sidecars.ready.total | 4375.7ms | 4828.7ms |
| oneInternalHook | cli.main.gateway-run-bootstrap.total | 3993.6ms | 4120.0ms |
| oneInternalHook | sidecars.session-locks.total | 3825.1ms | 4071.5ms |
| oneInternalHook | post-ready.agent-runtime-plugins.total | 3822.9ms | 4068.7ms |
| oneInternalHook | post-attach.update-sentinel.total | 3805.6ms | 4053.5ms |
| oneInternalHook | sidecars.restart-sentinel.total | 3803.8ms | 4051.9ms |
| allInternalHooks | cli.main.gateway-run-bootstrap.total | 4236.3ms | 5207.4ms |
| allInternalHooks | sidecars.session-locks.total | 3685.6ms | 3960.6ms |
| allInternalHooks | post-ready.agent-runtime-plugins.total | 3682.4ms | 3957.4ms |
| allInternalHooks | post-attach.update-sentinel.total | 3670.1ms | 3945.9ms |
| allInternalHooks | sidecars.restart-sentinel.total | 3668.6ms | 3944.6ms |
| fiftyPlugins | sidecars.session-locks.total | 6427.4ms | 6910.1ms |
| fiftyPlugins | post-ready.maintenance.total | 6322.1ms | 6809.2ms |
| fiftyPlugins | post-ready.agent-runtime-plugins.total | 6277.8ms | 6757.0ms |
| fiftyPlugins | post-attach.update-sentinel.total | 6041.7ms | 6472.0ms |
| fiftyPlugins | sidecars.restart-sentinel.total | 6040.7ms | 6471.0ms |
| fiftyStartupLazyPlugins | sidecars.session-locks.total | 5469.5ms | 5518.7ms |
| fiftyStartupLazyPlugins | post-ready.maintenance.total | 5368.7ms | 5419.0ms |
| fiftyStartupLazyPlugins | post-ready.agent-runtime-plugins.total | 5326.1ms | 5377.0ms |
| fiftyStartupLazyPlugins | post-attach.update-sentinel.total | 5083.5ms | 5150.9ms |
| fiftyStartupLazyPlugins | sidecars.restart-sentinel.total | 5082.5ms | 5149.6ms |

## Fake Model Hello Loops

| run | status | pass | wall | gateway CPU core | RSS start | RSS end | RSS delta | model |
| --- | --- | --- | --- | --- | --- | --- | --- | --- |
| run-001 | pass | 1/1 | 10778.0ms | 0.000 | 2472.2MB | 960.2MB | -1512.1MB | mock-openai/gpt-5.6-luna |
| run-002 | pass | 1/1 | 10515.0ms | 0.190 | 808.9MB | 1013.6MB | 204.7MB | mock-openai/gpt-5.6-luna |
| run-003 | pass | 1/1 | 10514.0ms | 0.190 | 869.0MB | 939.2MB | 70.2MB | mock-openai/gpt-5.6-luna |

## CLI Against Booted Gateway

| case | command | duration p50 | duration p95 | RSS p95 | exits |
| --- | --- | --- | --- | --- | --- |
| gatewayHealthJson | gateway health --json | 3950.8ms | 4327.1ms | 60.9MB | code:0 x3 |
| configGetGatewayPort | config get gateway.port | 895.9ms | 975.6ms | 60.2MB | code:0 x3 |

## SQLite State Smoke

| profile | state rows | agent rows | integrity | WAL before | WAL after | query p95 max | total |
| --- | --- | --- | --- | --- | --- | --- | --- |
| smoke | 4100 | 1000 | ok | 3.2MB | 0.0MB | 0.1ms | 81.2ms |

## Observations

No data.

