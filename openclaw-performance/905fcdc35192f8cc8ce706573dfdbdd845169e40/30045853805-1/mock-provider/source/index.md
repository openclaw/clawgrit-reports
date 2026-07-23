# OpenClaw Source Performance

Generated: 2026-07-23T21:28:43.257Z

## Gateway Boot

| case | name | readyz p50 | readyz p95 | healthz p50 | http listen p50 | gateway ready p50 | first output p50 | RSS p95 | CPU core p95 |
| --- | --- | --- | --- | --- | --- | --- | --- | --- | --- |
| default | gateway default | 7060.9ms | 8455.6ms | 7061.0ms | 3553.2ms | 6936.8ms | 53.3ms | 913.8MB | 1.301 |
| skipChannels | gateway, skip channels | 7611.4ms | 7721.7ms | 7611.3ms | 3766.0ms | 3823.6ms | 43.7ms | 935.2MB | 1.381 |
| oneInternalHook | gateway, one configured internal hook | 7571.4ms | 7879.4ms | 7595.0ms | 5031.3ms | 5067.2ms | 50.7ms | 985.1MB | 1.269 |
| allInternalHooks | gateway, all internal hooks | 7411.7ms | 7672.0ms | 7411.7ms | 4946.8ms | 4997.1ms | 50.1ms | 960.7MB | 1.303 |
| fiftyPlugins | gateway, 50 manifest plugins | 8981.0ms | 9223.4ms | 8981.0ms | 4527.1ms | 4613.3ms | 43.3ms | 1135.8MB | 1.278 |
| fiftyStartupLazyPlugins | gateway, 50 startup-lazy manifest plugins | 8822.0ms | 9217.3ms | 8822.0ms | 4165.1ms | 4253.1ms | 45.7ms | 1124.1MB | 1.302 |

## Memory Trend

No published source baseline was available for this tested ref.

No data.

## Bundled Plugin Import Memory

| plugin | max RSS | delta from empty process | status |
| --- | --- | --- | --- |
| llm-task | 534.8MB | 488.6MB | ok |
| codex | 511.6MB | 465.4MB | ok |
| zoom-meetings | 510.8MB | 464.6MB | ok |
| voice-call | 509.7MB | 463.5MB | ok |
| active-memory | 508.9MB | 462.7MB | ok |
| google-meet | 506.8MB | 460.5MB | ok |
| anthropic | 505.1MB | 458.9MB | ok |
| teams-meetings | 505.0MB | 458.8MB | ok |
| workboard | 505.0MB | 458.8MB | ok |
| migrate-hermes | 502.9MB | 456.7MB | ok |

## Startup Hotspots

| case | phase | p50 | p95 |
| --- | --- | --- | --- |
| default | sidecars.session-locks.total | 4474.9ms | 5352.5ms |
| default | post-ready.agent-runtime-plugins.total | 4450.1ms | 5338.9ms |
| default | post-attach.update-check.total | 4446.4ms | 5336.0ms |
| default | post-attach.update-sentinel.total | 4435.4ms | 5326.1ms |
| default | sidecars.restart-sentinel.total | 4434.1ms | 5324.8ms |
| skipChannels | sidecars.session-locks.total | 4888.1ms | 4890.8ms |
| skipChannels | post-ready.agent-runtime-plugins.total | 4885.8ms | 4888.2ms |
| skipChannels | post-attach.update-sentinel.total | 4875.8ms | 4877.1ms |
| skipChannels | sidecars.restart-sentinel.total | 4874.4ms | 4875.7ms |
| skipChannels | sidecars.ready.total | 4850.1ms | 4853.5ms |
| oneInternalHook | cli.main.gateway-run-bootstrap.total | 3880.5ms | 4089.2ms |
| oneInternalHook | sidecars.session-locks.total | 3335.8ms | 3355.8ms |
| oneInternalHook | post-ready.agent-runtime-plugins.total | 3332.8ms | 3352.7ms |
| oneInternalHook | post-attach.update-sentinel.total | 3321.6ms | 3338.4ms |
| oneInternalHook | sidecars.restart-sentinel.total | 3320.1ms | 3337.2ms |
| allInternalHooks | cli.main.gateway-run-bootstrap.total | 3702.7ms | 3709.6ms |
| allInternalHooks | sidecars.session-locks.total | 3305.5ms | 3589.8ms |
| allInternalHooks | post-ready.agent-runtime-plugins.total | 3303.8ms | 3587.4ms |
| allInternalHooks | post-attach.update-sentinel.total | 3293.6ms | 3575.4ms |
| allInternalHooks | sidecars.restart-sentinel.total | 3292.5ms | 3573.9ms |
| fiftyPlugins | sidecars.session-locks.total | 5280.9ms | 5430.3ms |
| fiftyPlugins | post-ready.maintenance.total | 5188.3ms | 5334.1ms |
| fiftyPlugins | post-ready.agent-runtime-plugins.total | 5148.9ms | 5293.3ms |
| fiftyPlugins | post-attach.update-sentinel.total | 4940.1ms | 5075.5ms |
| fiftyPlugins | sidecars.restart-sentinel.total | 4939.0ms | 5074.3ms |
| fiftyStartupLazyPlugins | sidecars.session-locks.total | 5217.2ms | 5586.8ms |
| fiftyStartupLazyPlugins | post-ready.maintenance.total | 5117.6ms | 5462.7ms |
| fiftyStartupLazyPlugins | post-ready.agent-runtime-plugins.total | 5077.2ms | 5411.2ms |
| fiftyStartupLazyPlugins | post-attach.update-sentinel.total | 4844.7ms | 5127.9ms |
| fiftyStartupLazyPlugins | sidecars.restart-sentinel.total | 4843.6ms | 5126.9ms |

## Fake Model Hello Loops

| run | status | pass | wall | gateway CPU core | RSS start | RSS end | RSS delta | model |
| --- | --- | --- | --- | --- | --- | --- | --- | --- |
| run-001 | pass | 1/1 | 10545.0ms | 0.000 | 2492.4MB | 1036.4MB | -1456.0MB | mock-openai/gpt-5.6-luna |
| run-002 | pass | 1/1 | 10388.0ms | 0.193 | 831.0MB | 1012.0MB | 181.0MB | mock-openai/gpt-5.6-luna |
| run-003 | pass | 1/1 | 10329.0ms | 0.194 | 840.6MB | 1050.1MB | 209.5MB | mock-openai/gpt-5.6-luna |

## CLI Against Booted Gateway

| case | command | duration p50 | duration p95 | RSS p95 | exits |
| --- | --- | --- | --- | --- | --- |
| gatewayHealthJson | gateway health --json | 3583.3ms | 3640.6ms | 61.4MB | code:0 x3 |
| configGetGatewayPort | config get gateway.port | 871.3ms | 924.7ms | 61.4MB | code:0 x3 |

## SQLite State Smoke

| profile | state rows | agent rows | integrity | WAL before | WAL after | query p95 max | total |
| --- | --- | --- | --- | --- | --- | --- | --- |
| smoke | 4100 | 1000 | ok | 3.2MB | 0.0MB | 0.0ms | 67.9ms |

## Observations

No data.

