# OpenClaw Source Performance

Generated: 2026-07-26T15:16:39.546Z

## Gateway Boot

| case | name | readyz p50 | readyz p95 | healthz p50 | http listen p50 | gateway ready p50 | first output p50 | RSS p95 | CPU core p95 |
| --- | --- | --- | --- | --- | --- | --- | --- | --- | --- |
| default | gateway default | 6157.8ms | 6207.1ms | 6157.7ms | 3193.7ms | 6044.5ms | 43.0ms | 1056.1MB | 1.313 |
| skipChannels | gateway, skip channels | 3315.3ms | 6227.3ms | 3315.3ms | 3158.5ms | 3203.3ms | 44.5ms | 996.0MB | 1.508 |
| oneInternalHook | gateway, one configured internal hook | 6740.4ms | 6825.2ms | 6740.3ms | 4552.1ms | 4596.5ms | 39.5ms | 1199.6MB | 1.319 |
| allInternalHooks | gateway, all internal hooks | 6861.3ms | 6887.8ms | 6861.3ms | 4595.5ms | 4637.8ms | 40.4ms | 1183.9MB | 1.322 |
| fiftyPlugins | gateway, 50 manifest plugins | 8356.2ms | 8381.7ms | 8356.1ms | 4396.9ms | 4474.7ms | 42.5ms | 1136.5MB | 1.209 |
| fiftyStartupLazyPlugins | gateway, 50 startup-lazy manifest plugins | 8138.2ms | 8230.4ms | 8138.1ms | 4097.9ms | 4174.7ms | 42.4ms | 1125.7MB | 1.236 |

## Memory Trend

No published source baseline was available for this tested ref.

No data.

## Bundled Plugin Import Memory

| plugin | max RSS | delta from empty process | status |
| --- | --- | --- | --- |
| zoom-meetings | 526.9MB | 480.4MB | ok |
| opencode | 518.2MB | 471.8MB | ok |
| teams-meetings | 518.1MB | 471.7MB | ok |
| active-memory | 515.3MB | 468.8MB | ok |
| xai | 513.7MB | 467.3MB | ok |
| migrate-hermes | 510.3MB | 463.8MB | ok |
| llm-task | 508.6MB | 462.2MB | ok |
| voice-call | 508.6MB | 462.1MB | ok |
| codex | 508.0MB | 461.5MB | ok |
| anthropic | 505.2MB | 458.8MB | ok |

## Startup Hotspots

| case | phase | p50 | p95 |
| --- | --- | --- | --- |
| default | sidecars.session-locks.total | 3891.5ms | 3932.0ms |
| default | post-ready.agent-runtime-plugins.total | 3866.9ms | 3907.1ms |
| default | post-attach.update-check.total | 3864.2ms | 3904.5ms |
| default | post-attach.update-sentinel.total | 3855.5ms | 3895.7ms |
| default | sidecars.restart-sentinel.total | 3854.4ms | 3894.7ms |
| skipChannels | sidecars.session-locks.total | 4032.3ms | 4032.3ms |
| skipChannels | post-ready.agent-runtime-plugins.total | 4027.8ms | 4027.8ms |
| skipChannels | post-attach.update-sentinel.total | 4023.6ms | 4023.6ms |
| skipChannels | sidecars.restart-sentinel.total | 4022.7ms | 4022.7ms |
| skipChannels | sidecars.ready.total | 4015.5ms | 4015.5ms |
| oneInternalHook | cli.main.gateway-run-bootstrap.total | 3437.4ms | 3441.9ms |
| oneInternalHook | sidecars.session-locks.total | 3009.3ms | 3049.0ms |
| oneInternalHook | post-ready.agent-runtime-plugins.total | 3007.7ms | 3047.5ms |
| oneInternalHook | post-attach.update-sentinel.total | 3003.4ms | 3043.2ms |
| oneInternalHook | sidecars.restart-sentinel.total | 3002.5ms | 3042.2ms |
| allInternalHooks | cli.main.gateway-run-bootstrap.total | 3456.3ms | 3464.0ms |
| allInternalHooks | sidecars.session-locks.total | 3071.4ms | 3094.7ms |
| allInternalHooks | post-ready.agent-runtime-plugins.total | 3069.8ms | 3093.0ms |
| allInternalHooks | post-attach.update-sentinel.total | 3065.4ms | 3088.6ms |
| allInternalHooks | sidecars.restart-sentinel.total | 3064.5ms | 3087.6ms |
| fiftyPlugins | sidecars.session-locks.total | 4865.5ms | 4881.0ms |
| fiftyPlugins | post-ready.maintenance.total | 4779.4ms | 4789.3ms |
| fiftyPlugins | post-ready.agent-runtime-plugins.total | 4744.2ms | 4755.3ms |
| fiftyPlugins | post-attach.update-sentinel.total | 4550.0ms | 4552.6ms |
| fiftyPlugins | sidecars.restart-sentinel.total | 4549.1ms | 4551.7ms |
| fiftyStartupLazyPlugins | sidecars.session-locks.total | 4672.4ms | 4715.9ms |
| fiftyStartupLazyPlugins | post-ready.maintenance.total | 4583.0ms | 4624.4ms |
| fiftyStartupLazyPlugins | post-ready.agent-runtime-plugins.total | 4549.3ms | 4590.4ms |
| fiftyStartupLazyPlugins | post-attach.update-sentinel.total | 4347.0ms | 4385.3ms |
| fiftyStartupLazyPlugins | sidecars.restart-sentinel.total | 4346.1ms | 4384.4ms |

## Fake Model Hello Loops

| run | status | pass | wall | gateway CPU core | RSS start | RSS end | RSS delta | model |
| --- | --- | --- | --- | --- | --- | --- | --- | --- |
| run-001 | pass | 1/1 | 11146.0ms | 0.000 | 2514.1MB | 1072.8MB | -1441.3MB | mock-openai/gpt-5.6-luna |
| run-002 | pass | 1/1 | 10348.0ms | 0.097 | 928.3MB | 1044.7MB | 116.5MB | mock-openai/gpt-5.6-luna |
| run-003 | pass | 1/1 | 10344.0ms | 0.097 | 884.1MB | 1047.2MB | 163.1MB | mock-openai/gpt-5.6-luna |

## CLI Against Booted Gateway

| case | command | duration p50 | duration p95 | RSS p95 | exits |
| --- | --- | --- | --- | --- | --- |
| gatewayHealthJson | gateway health --json | 3412.9ms | 3455.7ms | 61.8MB | code:0 x3 |
| configGetGatewayPort | config get gateway.port | 862.0ms | 868.0ms | 61.9MB | code:0 x3 |

## SQLite State Smoke

| profile | state rows | agent rows | integrity | WAL before | WAL after | query p95 max | total |
| --- | --- | --- | --- | --- | --- | --- | --- |
| smoke | 4100 | 1000 | ok | 3.2MB | 0.0MB | 0.0ms | 125.4ms |

## Observations

No data.

