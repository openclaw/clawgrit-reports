# OpenClaw Source Performance

Generated: 2026-07-25T05:17:05.231Z

## Gateway Boot

| case | name | readyz p50 | readyz p95 | healthz p50 | http listen p50 | gateway ready p50 | first output p50 | RSS p95 | CPU core p95 |
| --- | --- | --- | --- | --- | --- | --- | --- | --- | --- |
| default | gateway default | 5997.7ms | 6052.9ms | 5989.7ms | 3066.7ms | 5899.1ms | 41.7ms | 932.5MB | 1.345 |
| skipChannels | gateway, skip channels | 3121.3ms | 3153.0ms | 3120.9ms | 3046.3ms | 3090.7ms | 43.0ms | 916.5MB | 1.288 |
| oneInternalHook | gateway, one configured internal hook | 4484.6ms | 4620.6ms | 4484.4ms | 4414.2ms | 4456.0ms | 42.4ms | 930.6MB | 1.341 |
| allInternalHooks | gateway, all internal hooks | 4536.1ms | 4591.3ms | 4535.9ms | 4459.8ms | 4503.8ms | 41.7ms | 937.4MB | 1.333 |
| fiftyPlugins | gateway, 50 manifest plugins | 8391.4ms | 8421.0ms | 8391.3ms | 4314.0ms | 4387.5ms | 41.1ms | 1141.2MB | 1.198 |
| fiftyStartupLazyPlugins | gateway, 50 startup-lazy manifest plugins | 8206.0ms | 8251.5ms | 8206.0ms | 4076.7ms | 4159.2ms | 40.9ms | 1088.7MB | 1.221 |

## Memory Trend

No published source baseline was available for this tested ref.

No data.

## Bundled Plugin Import Memory

| plugin | max RSS | delta from empty process | status |
| --- | --- | --- | --- |
| active-memory | 520.3MB | 473.9MB | ok |
| codex | 513.7MB | 467.2MB | ok |
| workboard | 507.8MB | 461.4MB | ok |
| migrate-hermes | 507.6MB | 461.2MB | ok |
| llm-task | 505.8MB | 459.4MB | ok |
| anthropic | 504.3MB | 457.9MB | ok |
| google-meet | 503.3MB | 456.8MB | ok |
| voice-call | 502.3MB | 455.9MB | ok |
| zoom-meetings | 500.9MB | 454.4MB | ok |
| teams-meetings | 500.7MB | 454.2MB | ok |

## Startup Hotspots

| case | phase | p50 | p95 |
| --- | --- | --- | --- |
| default | sidecars.session-locks.total | 3809.2ms | 3905.0ms |
| default | post-ready.agent-runtime-plugins.total | 3798.2ms | 3886.3ms |
| default | post-attach.update-check.total | 3795.5ms | 3883.7ms |
| default | post-attach.update-sentinel.total | 3787.1ms | 3875.5ms |
| default | sidecars.restart-sentinel.total | 3785.9ms | 3874.5ms |
| skipChannels | sidecars.internal-hooks.total | 1019.3ms | 1060.9ms |
| skipChannels | post-attach.update-check.total | 953.5ms | 991.7ms |
| skipChannels | ready.total | 940.9ms | 977.8ms |
| skipChannels | runtime.post-attach.total | 939.4ms | 976.2ms |
| skipChannels | post-attach.log.total | 938.4ms | 975.2ms |
| oneInternalHook | cli.main.gateway-run-bootstrap.total | 3330.8ms | 3411.6ms |
| oneInternalHook | cli.main.gateway-run-bootstrap | 2647.7ms | 2713.5ms |
| oneInternalHook | cli.bootstrap.plugin-plan.total | 2622.8ms | 2687.6ms |
| oneInternalHook | cli.bootstrap.plugin-plan-import.total | 2622.0ms | 2686.7ms |
| oneInternalHook | sidecars.internal-hooks.total | 922.1ms | 964.9ms |
| allInternalHooks | cli.main.gateway-run-bootstrap.total | 3338.8ms | 3391.6ms |
| allInternalHooks | cli.main.gateway-run-bootstrap | 2635.9ms | 2677.6ms |
| allInternalHooks | cli.bootstrap.plugin-plan.total | 2596.2ms | 2651.4ms |
| allInternalHooks | cli.bootstrap.plugin-plan-import.total | 2595.3ms | 2650.6ms |
| allInternalHooks | sidecars.internal-hooks.total | 955.8ms | 970.0ms |
| fiftyPlugins | sidecars.session-locks.total | 4936.4ms | 5019.5ms |
| fiftyPlugins | post-ready.maintenance.total | 4843.2ms | 4930.1ms |
| fiftyPlugins | post-ready.agent-runtime-plugins.total | 4806.0ms | 4894.7ms |
| fiftyPlugins | post-attach.update-sentinel.total | 4608.2ms | 4704.6ms |
| fiftyPlugins | sidecars.restart-sentinel.total | 4607.3ms | 4703.6ms |
| fiftyStartupLazyPlugins | sidecars.session-locks.total | 4749.3ms | 4754.9ms |
| fiftyStartupLazyPlugins | post-ready.maintenance.total | 4657.2ms | 4663.7ms |
| fiftyStartupLazyPlugins | post-ready.agent-runtime-plugins.total | 4620.6ms | 4627.8ms |
| fiftyStartupLazyPlugins | post-attach.update-sentinel.total | 4416.7ms | 4428.0ms |
| fiftyStartupLazyPlugins | sidecars.restart-sentinel.total | 4415.7ms | 4427.0ms |

## Fake Model Hello Loops

| run | status | pass | wall | gateway CPU core | RSS start | RSS end | RSS delta | model |
| --- | --- | --- | --- | --- | --- | --- | --- | --- |
| run-001 | pass | 1/1 | 10166.0ms | 0.000 | 2437.1MB | 1116.2MB | -1320.9MB | mock-openai/gpt-5.6-luna |
| run-002 | pass | 1/1 | 10195.0ms | 0.196 | 830.4MB | 1007.3MB | 177.0MB | mock-openai/gpt-5.6-luna |
| run-003 | pass | 1/1 | 9778.0ms | 0.205 | 912.2MB | 1056.1MB | 143.9MB | mock-openai/gpt-5.6-luna |

## CLI Against Booted Gateway

| case | command | duration p50 | duration p95 | RSS p95 | exits |
| --- | --- | --- | --- | --- | --- |
| gatewayHealthJson | gateway health --json | 3347.8ms | 3359.4ms | 61.5MB | code:0 x3 |
| configGetGatewayPort | config get gateway.port | 783.2ms | 794.0ms | 61.4MB | code:0 x3 |

## SQLite State Smoke

| profile | state rows | agent rows | integrity | WAL before | WAL after | query p95 max | total |
| --- | --- | --- | --- | --- | --- | --- | --- |
| smoke | 4100 | 1000 | ok | 3.2MB | 0.0MB | 0.1ms | 121.7ms |

## Observations

No data.

