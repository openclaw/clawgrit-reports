# OpenClaw Source Performance

Generated: 2026-07-23T22:17:09.789Z

## Gateway Boot

| case | name | readyz p50 | readyz p95 | healthz p50 | http listen p50 | gateway ready p50 | first output p50 | RSS p95 | CPU core p95 |
| --- | --- | --- | --- | --- | --- | --- | --- | --- | --- |
| default | gateway default | 6356.8ms | 6447.2ms | 6323.6ms | 3232.6ms | 6226.2ms | 44.0ms | 919.1MB | 1.310 |
| skipChannels | gateway, skip channels | 3142.2ms | 3161.7ms | 3141.9ms | 3065.0ms | 3108.0ms | 46.4ms | 765.1MB | 1.279 |
| oneInternalHook | gateway, one configured internal hook | 6888.6ms | 6889.9ms | 6888.6ms | 4518.8ms | 4560.4ms | 49.1ms | 967.0MB | 1.373 |
| allInternalHooks | gateway, all internal hooks | 6661.2ms | 6790.5ms | 6661.1ms | 4473.0ms | 4528.3ms | 42.4ms | 973.6MB | 1.249 |
| fiftyPlugins | gateway, 50 manifest plugins | 8378.5ms | 9670.0ms | 8376.1ms | 4272.0ms | 4352.7ms | 44.7ms | 1134.2MB | 1.241 |
| fiftyStartupLazyPlugins | gateway, 50 startup-lazy manifest plugins | 8215.8ms | 8234.2ms | 8215.8ms | 3918.8ms | 4006.4ms | 43.7ms | 1130.9MB | 1.262 |

## Memory Trend

No published source baseline was available for this tested ref.

No data.

## Bundled Plugin Import Memory

| plugin | max RSS | delta from empty process | status |
| --- | --- | --- | --- |
| teams-meetings | 513.3MB | 466.9MB | ok |
| codex | 512.6MB | 466.2MB | ok |
| active-memory | 510.8MB | 464.4MB | ok |
| llm-task | 507.1MB | 460.7MB | ok |
| migrate-hermes | 506.2MB | 459.7MB | ok |
| google-meet | 506.1MB | 459.6MB | ok |
| zoom-meetings | 505.2MB | 458.8MB | ok |
| anthropic | 504.1MB | 457.7MB | ok |
| voice-call | 503.5MB | 457.0MB | ok |
| workboard | 503.0MB | 456.6MB | ok |

## Startup Hotspots

| case | phase | p50 | p95 |
| --- | --- | --- | --- |
| default | sidecars.session-locks.total | 3998.8ms | 4113.6ms |
| default | post-ready.agent-runtime-plugins.total | 3983.8ms | 4100.4ms |
| default | post-attach.update-check.total | 3980.2ms | 4097.8ms |
| default | post-attach.update-sentinel.total | 3969.8ms | 4088.4ms |
| default | sidecars.restart-sentinel.total | 3968.2ms | 4087.1ms |
| skipChannels | sidecars.internal-hooks.total | 958.3ms | 967.2ms |
| skipChannels | post-attach.update-check.total | 892.6ms | 900.4ms |
| skipChannels | cli.main.gateway-run-bootstrap.total | 888.2ms | 896.1ms |
| skipChannels | ready.total | 876.0ms | 883.3ms |
| skipChannels | runtime.post-attach.total | 874.5ms | 881.9ms |
| oneInternalHook | cli.main.gateway-run-bootstrap.total | 3449.1ms | 3849.8ms |
| oneInternalHook | sidecars.session-locks.total | 3116.6ms | 3132.2ms |
| oneInternalHook | post-ready.agent-runtime-plugins.total | 3115.0ms | 3130.6ms |
| oneInternalHook | post-attach.update-sentinel.total | 3110.5ms | 3126.3ms |
| oneInternalHook | sidecars.restart-sentinel.total | 3109.4ms | 3125.3ms |
| allInternalHooks | cli.main.gateway-run-bootstrap.total | 3438.8ms | 3600.4ms |
| allInternalHooks | sidecars.session-locks.total | 2990.3ms | 3012.0ms |
| allInternalHooks | post-ready.agent-runtime-plugins.total | 2988.8ms | 3010.6ms |
| allInternalHooks | post-attach.update-sentinel.total | 2984.5ms | 3006.3ms |
| allInternalHooks | sidecars.restart-sentinel.total | 2983.5ms | 3005.3ms |
| fiftyPlugins | sidecars.session-locks.total | 4863.0ms | 6006.4ms |
| fiftyPlugins | post-ready.maintenance.total | 4770.3ms | 5912.1ms |
| fiftyPlugins | post-ready.agent-runtime-plugins.total | 4732.7ms | 5873.8ms |
| fiftyPlugins | post-attach.update-sentinel.total | 4530.9ms | 5665.6ms |
| fiftyPlugins | sidecars.restart-sentinel.total | 4530.0ms | 5664.7ms |
| fiftyStartupLazyPlugins | sidecars.session-locks.total | 4772.7ms | 4789.5ms |
| fiftyStartupLazyPlugins | post-ready.maintenance.total | 4676.4ms | 4697.0ms |
| fiftyStartupLazyPlugins | post-ready.agent-runtime-plugins.total | 4639.4ms | 4660.8ms |
| fiftyStartupLazyPlugins | post-attach.update-sentinel.total | 4438.4ms | 4458.5ms |
| fiftyStartupLazyPlugins | sidecars.restart-sentinel.total | 4437.5ms | 4457.6ms |

## Fake Model Hello Loops

| run | status | pass | wall | gateway CPU core | RSS start | RSS end | RSS delta | model |
| --- | --- | --- | --- | --- | --- | --- | --- | --- |
| run-001 | pass | 1/1 | 10094.0ms | 0.000 | 2417.9MB | 1037.5MB | -1380.3MB | mock-openai/gpt-5.6-luna |
| run-002 | pass | 1/1 | 9400.0ms | 0.106 | 877.6MB | 943.3MB | 65.7MB | mock-openai/gpt-5.6-luna |
| run-003 | pass | 1/1 | 9329.0ms | 0.214 | 877.0MB | 948.7MB | 71.7MB | mock-openai/gpt-5.6-luna |

## CLI Against Booted Gateway

| case | command | duration p50 | duration p95 | RSS p95 | exits |
| --- | --- | --- | --- | --- | --- |
| gatewayHealthJson | gateway health --json | 3222.6ms | 3237.7ms | 61.5MB | code:0 x3 |
| configGetGatewayPort | config get gateway.port | 768.3ms | 781.6ms | 61.4MB | code:0 x3 |

## SQLite State Smoke

| profile | state rows | agent rows | integrity | WAL before | WAL after | query p95 max | total |
| --- | --- | --- | --- | --- | --- | --- | --- |
| smoke | 4100 | 1000 | ok | 3.2MB | 0.0MB | 0.0ms | 63.5ms |

## Observations

No data.

