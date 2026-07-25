# OpenClaw Source Performance

Generated: 2026-07-25T02:39:02.282Z

## Gateway Boot

| case | name | readyz p50 | readyz p95 | healthz p50 | http listen p50 | gateway ready p50 | first output p50 | RSS p95 | CPU core p95 |
| --- | --- | --- | --- | --- | --- | --- | --- | --- | --- |
| default | gateway default | 5921.1ms | 5959.8ms | 5812.6ms | 2994.9ms | 5868.5ms | 43.3ms | 906.8MB | 1.354 |
| skipChannels | gateway, skip channels | 3084.6ms | 3088.4ms | 3084.1ms | 3016.5ms | 3055.5ms | 42.7ms | 894.9MB | 1.321 |
| oneInternalHook | gateway, one configured internal hook | 4383.2ms | 4388.7ms | 4383.0ms | 4308.5ms | 4352.0ms | 42.6ms | 958.3MB | 1.373 |
| allInternalHooks | gateway, all internal hooks | 4435.7ms | 4483.2ms | 4435.5ms | 4366.6ms | 4404.1ms | 42.6ms | 924.1MB | 1.374 |
| fiftyPlugins | gateway, 50 manifest plugins | 8246.0ms | 8308.0ms | 8245.9ms | 4216.9ms | 4290.8ms | 39.5ms | 1149.9MB | 1.214 |
| fiftyStartupLazyPlugins | gateway, 50 startup-lazy manifest plugins | 8074.2ms | 8119.6ms | 8074.2ms | 3964.8ms | 4047.4ms | 41.5ms | 1179.7MB | 1.262 |

## Memory Trend

No published source baseline was available for this tested ref.

No data.

## Bundled Plugin Import Memory

| plugin | max RSS | delta from empty process | status |
| --- | --- | --- | --- |
| google-meet | 523.7MB | 477.2MB | ok |
| codex | 515.3MB | 468.9MB | ok |
| active-memory | 509.1MB | 462.6MB | ok |
| memory-lancedb | 508.6MB | 462.2MB | ok |
| migrate-hermes | 508.0MB | 461.5MB | ok |
| llm-task | 507.1MB | 460.6MB | ok |
| xai | 507.1MB | 460.6MB | ok |
| workboard | 506.8MB | 460.3MB | ok |
| zoom-meetings | 504.5MB | 458.0MB | ok |
| anthropic | 502.6MB | 456.1MB | ok |

## Startup Hotspots

| case | phase | p50 | p95 |
| --- | --- | --- | --- |
| default | sidecars.session-locks.total | 3806.9ms | 3826.0ms |
| default | post-ready.agent-runtime-plugins.total | 3797.6ms | 3816.4ms |
| default | post-attach.update-check.total | 3795.0ms | 3813.8ms |
| default | post-attach.update-sentinel.total | 3786.9ms | 3805.5ms |
| default | sidecars.restart-sentinel.total | 3785.7ms | 3804.2ms |
| skipChannels | sidecars.internal-hooks.total | 974.1ms | 980.0ms |
| skipChannels | post-attach.update-check.total | 903.3ms | 912.3ms |
| skipChannels | ready.total | 890.9ms | 897.0ms |
| skipChannels | runtime.post-attach.total | 889.4ms | 895.5ms |
| skipChannels | post-attach.log.total | 888.4ms | 894.6ms |
| oneInternalHook | cli.main.gateway-run-bootstrap.total | 3253.8ms | 3303.0ms |
| oneInternalHook | cli.main.gateway-run-bootstrap | 2582.7ms | 2596.5ms |
| oneInternalHook | cli.bootstrap.plugin-plan.total | 2557.7ms | 2562.1ms |
| oneInternalHook | cli.bootstrap.plugin-plan-import.total | 2556.9ms | 2561.3ms |
| oneInternalHook | sidecars.internal-hooks.total | 884.5ms | 920.2ms |
| allInternalHooks | cli.main.gateway-run-bootstrap.total | 3300.1ms | 3371.9ms |
| allInternalHooks | cli.main.gateway-run-bootstrap | 2620.0ms | 2687.1ms |
| allInternalHooks | cli.bootstrap.plugin-plan.total | 2594.3ms | 2651.3ms |
| allInternalHooks | cli.bootstrap.plugin-plan-import.total | 2593.4ms | 2650.5ms |
| allInternalHooks | sidecars.internal-hooks.total | 893.3ms | 894.0ms |
| fiftyPlugins | sidecars.session-locks.total | 4842.2ms | 4910.1ms |
| fiftyPlugins | post-ready.maintenance.total | 4749.8ms | 4817.6ms |
| fiftyPlugins | post-ready.agent-runtime-plugins.total | 4714.0ms | 4781.6ms |
| fiftyPlugins | post-attach.update-sentinel.total | 4512.7ms | 4581.5ms |
| fiftyPlugins | sidecars.restart-sentinel.total | 4511.7ms | 4580.6ms |
| fiftyStartupLazyPlugins | sidecars.session-locks.total | 4579.4ms | 4709.5ms |
| fiftyStartupLazyPlugins | post-ready.maintenance.total | 4490.8ms | 4616.4ms |
| fiftyStartupLazyPlugins | post-ready.agent-runtime-plugins.total | 4456.8ms | 4580.5ms |
| fiftyStartupLazyPlugins | post-attach.update-sentinel.total | 4265.8ms | 4377.7ms |
| fiftyStartupLazyPlugins | sidecars.restart-sentinel.total | 4264.9ms | 4376.7ms |

## Fake Model Hello Loops

| run | status | pass | wall | gateway CPU core | RSS start | RSS end | RSS delta | model |
| --- | --- | --- | --- | --- | --- | --- | --- | --- |
| run-001 | pass | 1/1 | 10172.0ms | 0.000 | 2404.0MB | 1095.0MB | -1309.0MB | mock-openai/gpt-5.6-luna |
| run-002 | pass | 1/1 | 9656.0ms | 0.207 | 851.7MB | 1113.7MB | 262.0MB | mock-openai/gpt-5.6-luna |
| run-003 | pass | 1/1 | 9758.0ms | 0.205 | 901.0MB | 1001.6MB | 100.6MB | mock-openai/gpt-5.6-luna |

## CLI Against Booted Gateway

| case | command | duration p50 | duration p95 | RSS p95 | exits |
| --- | --- | --- | --- | --- | --- |
| gatewayHealthJson | gateway health --json | 3311.7ms | 3314.1ms | 61.5MB | code:0 x3 |
| configGetGatewayPort | config get gateway.port | 789.9ms | 800.1ms | 61.7MB | code:0 x3 |

## SQLite State Smoke

| profile | state rows | agent rows | integrity | WAL before | WAL after | query p95 max | total |
| --- | --- | --- | --- | --- | --- | --- | --- |
| smoke | 4100 | 1000 | ok | 3.2MB | 0.0MB | 0.1ms | 102.7ms |

## Observations

No data.

