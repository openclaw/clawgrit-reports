# OpenClaw Source Performance

Generated: 2026-07-21T21:03:27.317Z

## Gateway Boot

| case | name | readyz p50 | readyz p95 | healthz p50 | http listen p50 | gateway ready p50 | first output p50 | RSS p95 | CPU core p95 |
| --- | --- | --- | --- | --- | --- | --- | --- | --- | --- |
| default | gateway default | 7482.0ms | 7952.9ms | 7481.2ms | 4230.5ms | 7302.0ms | 56.2ms | 913.9MB | 1.383 |
| skipChannels | gateway, skip channels | 6840.1ms | 7987.8ms | 6840.0ms | 3895.6ms | 3959.7ms | 52.6ms | 910.8MB | 1.377 |
| oneInternalHook | gateway, one configured internal hook | 6760.7ms | 8049.5ms | 6760.6ms | 5043.9ms | 5135.9ms | 49.9ms | 965.7MB | 1.367 |
| allInternalHooks | gateway, all internal hooks | 5986.7ms | 7553.1ms | 5986.7ms | 4465.0ms | 4537.3ms | 52.0ms | 955.1MB | 1.336 |
| fiftyPlugins | gateway, 50 manifest plugins | 6747.8ms | 6909.8ms | 6747.8ms | 4457.8ms | 4551.7ms | 41.5ms | 1115.7MB | 1.334 |
| fiftyStartupLazyPlugins | gateway, 50 startup-lazy manifest plugins | 6285.5ms | 6460.3ms | 6284.2ms | 4032.5ms | 4117.2ms | 44.5ms | 1124.6MB | 1.307 |

## Memory Trend

No published source baseline was available for this tested ref.

No data.

## Bundled Plugin Import Memory

| plugin | max RSS | delta from empty process | status |
| --- | --- | --- | --- |
| active-memory | 528.5MB | 482.0MB | ok |
| voice-call | 509.7MB | 463.3MB | ok |
| codex | 509.3MB | 462.8MB | ok |
| migrate-hermes | 509.0MB | 462.6MB | ok |
| zoom-meetings | 508.9MB | 462.4MB | ok |
| teams-meetings | 508.8MB | 462.3MB | ok |
| google-meet | 508.2MB | 461.7MB | ok |
| workboard | 507.4MB | 460.9MB | ok |
| llm-task | 505.0MB | 458.5MB | ok |
| memory-lancedb | 504.3MB | 457.9MB | ok |

## Startup Hotspots

| case | phase | p50 | p95 |
| --- | --- | --- | --- |
| default | sidecars.session-locks.total | 4742.7ms | 5062.0ms |
| default | post-ready.agent-runtime-plugins.total | 4716.0ms | 5032.7ms |
| default | post-attach.update-check.total | 4710.5ms | 5027.1ms |
| default | post-attach.update-sentinel.total | 4699.4ms | 5010.6ms |
| default | sidecars.restart-sentinel.total | 4697.8ms | 5008.8ms |
| skipChannels | sidecars.session-locks.total | 4056.8ms | 4929.2ms |
| skipChannels | post-ready.agent-runtime-plugins.total | 4051.8ms | 4921.8ms |
| skipChannels | post-attach.update-sentinel.total | 4035.8ms | 4900.3ms |
| skipChannels | sidecars.restart-sentinel.total | 4032.0ms | 4898.3ms |
| skipChannels | sidecars.ready.total | 3995.0ms | 4866.5ms |
| oneInternalHook | cli.main.gateway-run-bootstrap.total | 3864.2ms | 4093.0ms |
| oneInternalHook | cli.main.gateway-run-bootstrap | 3110.6ms | 3372.9ms |
| oneInternalHook | cli.bootstrap.plugin-plan.total | 3075.8ms | 3336.8ms |
| oneInternalHook | cli.bootstrap.plugin-plan-import.total | 3074.8ms | 3335.2ms |
| oneInternalHook | sidecars.session-locks.total | 2536.1ms | 3452.4ms |
| allInternalHooks | cli.main.gateway-run-bootstrap.total | 3427.0ms | 4294.0ms |
| allInternalHooks | cli.main.gateway-run-bootstrap | 2807.8ms | 3492.7ms |
| allInternalHooks | cli.bootstrap.plugin-plan.total | 2777.6ms | 3438.5ms |
| allInternalHooks | cli.bootstrap.plugin-plan-import.total | 2776.6ms | 3437.1ms |
| allInternalHooks | sidecars.session-locks.total | 2329.1ms | 2788.2ms |
| fiftyPlugins | sidecars.session-locks.total | 3187.7ms | 3237.3ms |
| fiftyPlugins | cli.main.gateway-run-bootstrap.total | 3159.2ms | 3385.0ms |
| fiftyPlugins | post-ready.maintenance.total | 3102.8ms | 3151.9ms |
| fiftyPlugins | post-ready.agent-runtime-plugins.total | 3088.0ms | 3137.7ms |
| fiftyPlugins | post-attach.update-sentinel.total | 2902.1ms | 2952.7ms |
| fiftyStartupLazyPlugins | cli.main.gateway-run-bootstrap.total | 3214.0ms | 3229.0ms |
| fiftyStartupLazyPlugins | sidecars.session-locks.total | 2766.6ms | 2898.4ms |
| fiftyStartupLazyPlugins | post-ready.maintenance.total | 2685.3ms | 2816.6ms |
| fiftyStartupLazyPlugins | post-ready.agent-runtime-plugins.total | 2671.2ms | 2800.6ms |
| fiftyStartupLazyPlugins | cli.main.gateway-run-bootstrap | 2564.3ms | 2594.7ms |

## Fake Model Hello Loops

| run | status | pass | wall | gateway CPU core | RSS start | RSS end | RSS delta | model |
| --- | --- | --- | --- | --- | --- | --- | --- | --- |
| run-001 | pass | 1/1 | 9603.0ms | 0.000 | 2407.6MB | 934.1MB | -1473.6MB | mock-openai/gpt-5.6-luna |
| run-002 | pass | 1/1 | 9299.0ms | 0.215 | 848.6MB | 925.7MB | 77.1MB | mock-openai/gpt-5.6-luna |
| run-003 | pass | 1/1 | 9285.0ms | 0.108 | 824.8MB | 870.4MB | 45.6MB | mock-openai/gpt-5.6-luna |

## CLI Against Booted Gateway

| case | command | duration p50 | duration p95 | RSS p95 | exits |
| --- | --- | --- | --- | --- | --- |
| gatewayHealthJson | gateway health --json | 3447.2ms | 3502.3ms | 60.1MB | code:0 x3 |
| configGetGatewayPort | config get gateway.port | 844.9ms | 875.3ms | 60.1MB | code:0 x3 |

## SQLite State Smoke

| profile | state rows | agent rows | integrity | WAL before | WAL after | query p95 max | total |
| --- | --- | --- | --- | --- | --- | --- | --- |
| smoke | 4100 | 1000 | ok | 3.0MB | 0.0MB | 0.1ms | 66.0ms |

## Observations

No data.

