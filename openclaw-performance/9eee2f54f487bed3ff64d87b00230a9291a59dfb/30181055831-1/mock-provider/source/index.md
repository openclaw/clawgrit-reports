# OpenClaw Source Performance

Generated: 2026-07-26T00:28:55.807Z

## Gateway Boot

| case | name | readyz p50 | readyz p95 | healthz p50 | http listen p50 | gateway ready p50 | first output p50 | RSS p95 | CPU core p95 |
| --- | --- | --- | --- | --- | --- | --- | --- | --- | --- |
| default | gateway default | 6033.1ms | 6135.9ms | 6033.0ms | 3162.1ms | 5895.8ms | 42.0ms | 1067.3MB | 1.328 |
| skipChannels | gateway, skip channels | 6186.0ms | 6266.3ms | 6185.9ms | 3154.1ms | 3195.2ms | 42.2ms | 1016.4MB | 1.293 |
| oneInternalHook | gateway, one configured internal hook | 4596.7ms | 6881.5ms | 4595.5ms | 4514.3ms | 4552.9ms | 42.8ms | 1164.6MB | 1.312 |
| allInternalHooks | gateway, all internal hooks | 4612.3ms | 4625.9ms | 4612.0ms | 4526.4ms | 4567.0ms | 42.5ms | 1030.6MB | 1.316 |
| fiftyPlugins | gateway, 50 manifest plugins | 8278.2ms | 8399.1ms | 8278.1ms | 4415.0ms | 4492.8ms | 40.9ms | 1150.7MB | 1.223 |
| fiftyStartupLazyPlugins | gateway, 50 startup-lazy manifest plugins | 8167.6ms | 8182.5ms | 8167.5ms | 4095.7ms | 4175.0ms | 42.3ms | 1138.9MB | 1.235 |

## Memory Trend

No published source baseline was available for this tested ref.

No data.

## Bundled Plugin Import Memory

| plugin | max RSS | delta from empty process | status |
| --- | --- | --- | --- |
| migrate-hermes | 586.0MB | 539.6MB | ok |
| google-meet | 534.6MB | 488.1MB | ok |
| active-memory | 522.7MB | 476.2MB | ok |
| opencode | 521.9MB | 475.4MB | ok |
| codex | 516.7MB | 470.2MB | ok |
| llm-task | 513.9MB | 467.4MB | ok |
| voice-call | 507.5MB | 461.0MB | ok |
| teams-meetings | 507.4MB | 460.9MB | ok |
| workboard | 505.9MB | 459.4MB | ok |
| zoom-meetings | 505.8MB | 459.3MB | ok |

## Startup Hotspots

| case | phase | p50 | p95 |
| --- | --- | --- | --- |
| default | sidecars.session-locks.total | 3786.3ms | 3873.5ms |
| default | post-ready.agent-runtime-plugins.total | 3761.8ms | 3850.0ms |
| default | post-attach.update-check.total | 3759.0ms | 3847.5ms |
| default | post-attach.update-sentinel.total | 3747.3ms | 3839.0ms |
| default | sidecars.restart-sentinel.total | 3746.0ms | 3838.0ms |
| skipChannels | sidecars.session-locks.total | 4016.6ms | 4065.9ms |
| skipChannels | post-ready.agent-runtime-plugins.total | 4014.5ms | 4063.4ms |
| skipChannels | post-attach.update-sentinel.total | 4009.8ms | 4058.3ms |
| skipChannels | sidecars.restart-sentinel.total | 4008.9ms | 4057.4ms |
| skipChannels | sidecars.ready.total | 3996.3ms | 4044.1ms |
| oneInternalHook | cli.main.gateway-run-bootstrap.total | 3400.8ms | 3451.5ms |
| oneInternalHook | sidecars.session-locks.total | 3093.7ms | 3093.7ms |
| oneInternalHook | post-ready.agent-runtime-plugins.total | 3092.1ms | 3092.1ms |
| oneInternalHook | post-attach.update-sentinel.total | 3087.6ms | 3087.6ms |
| oneInternalHook | sidecars.restart-sentinel.total | 3086.7ms | 3086.7ms |
| allInternalHooks | cli.main.gateway-run-bootstrap.total | 3416.5ms | 3425.7ms |
| allInternalHooks | cli.main.gateway-run-bootstrap | 2673.1ms | 2699.0ms |
| allInternalHooks | cli.bootstrap.plugin-plan.total | 2653.1ms | 2675.2ms |
| allInternalHooks | cli.bootstrap.plugin-plan-import.total | 2652.3ms | 2674.4ms |
| allInternalHooks | sidecars.internal-hooks.total | 926.8ms | 928.0ms |
| fiftyPlugins | sidecars.session-locks.total | 4780.6ms | 4896.2ms |
| fiftyPlugins | post-ready.maintenance.total | 4691.1ms | 4807.9ms |
| fiftyPlugins | post-ready.agent-runtime-plugins.total | 4654.9ms | 4775.6ms |
| fiftyPlugins | post-attach.update-sentinel.total | 4453.5ms | 4573.1ms |
| fiftyPlugins | sidecars.restart-sentinel.total | 4452.5ms | 4572.1ms |
| fiftyStartupLazyPlugins | sidecars.session-locks.total | 4693.1ms | 4749.3ms |
| fiftyStartupLazyPlugins | post-ready.maintenance.total | 4603.2ms | 4662.5ms |
| fiftyStartupLazyPlugins | post-ready.agent-runtime-plugins.total | 4569.4ms | 4630.3ms |
| fiftyStartupLazyPlugins | post-attach.update-sentinel.total | 4362.2ms | 4432.3ms |
| fiftyStartupLazyPlugins | sidecars.restart-sentinel.total | 4361.2ms | 4431.4ms |

## Fake Model Hello Loops

| run | status | pass | wall | gateway CPU core | RSS start | RSS end | RSS delta | model |
| --- | --- | --- | --- | --- | --- | --- | --- | --- |
| run-001 | pass | 1/1 | 10973.0ms | 0.000 | 2460.0MB | 1053.9MB | -1406.0MB | mock-openai/gpt-5.6-luna |
| run-002 | pass | 1/1 | 10296.0ms | 0.097 | 904.2MB | 1054.9MB | 150.7MB | mock-openai/gpt-5.6-luna |
| run-003 | pass | 1/1 | 10554.0ms | 0.095 | 876.1MB | 1042.7MB | 166.5MB | mock-openai/gpt-5.6-luna |

## CLI Against Booted Gateway

| case | command | duration p50 | duration p95 | RSS p95 | exits |
| --- | --- | --- | --- | --- | --- |
| gatewayHealthJson | gateway health --json | 3374.2ms | 3471.6ms | 62.5MB | code:0 x3 |
| configGetGatewayPort | config get gateway.port | 805.3ms | 833.3ms | 61.8MB | code:0 x3 |

## SQLite State Smoke

| profile | state rows | agent rows | integrity | WAL before | WAL after | query p95 max | total |
| --- | --- | --- | --- | --- | --- | --- | --- |
| smoke | 4100 | 1000 | ok | 3.2MB | 0.0MB | 0.0ms | 126.5ms |

## Observations

No data.

