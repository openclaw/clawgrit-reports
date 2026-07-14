# OpenClaw Source Performance

Generated: 2026-07-14T01:39:02.248Z

## Gateway Boot

| case | name | readyz p50 | readyz p95 | healthz p50 | http listen p50 | gateway ready p50 | first output p50 | RSS p95 | CPU core p95 |
| --- | --- | --- | --- | --- | --- | --- | --- | --- | --- |
| default | gateway default | 3122.8ms | 3214.6ms | 3107.6ms | 2921.0ms | 2989.3ms | 42.7ms | 757.0MB | 1.366 |
| skipChannels | gateway, skip channels | 2987.1ms | 3174.8ms | 2986.6ms | 2909.6ms | 2955.2ms | 44.1ms | 758.0MB | 1.364 |
| oneInternalHook | gateway, one configured internal hook | 4443.9ms | 4534.1ms | 4443.7ms | 4371.1ms | 4411.7ms | 50.8ms | 864.3MB | 1.380 |
| allInternalHooks | gateway, all internal hooks | 4365.0ms | 4452.0ms | 4365.0ms | 4275.5ms | 4329.8ms | 41.1ms | 871.7MB | 1.396 |
| fiftyPlugins | gateway, 50 manifest plugins | 5091.8ms | 5512.1ms | 5091.7ms | 4666.9ms | 4767.0ms | 45.9ms | 928.4MB | 1.375 |
| fiftyStartupLazyPlugins | gateway, 50 startup-lazy manifest plugins | 4588.7ms | 5742.0ms | 4588.6ms | 4097.2ms | 4181.9ms | 44.7ms | 920.5MB | 1.393 |

## Memory Trend

No published source baseline was available for this tested ref.

No data.

## Bundled Plugin Import Memory

| plugin | max RSS | delta from empty process | status |
| --- | --- | --- | --- |
| qa-lab | 630.4MB | 584.0MB | ok |
| anthropic | 524.0MB | 477.6MB | ok |
| llm-task | 522.2MB | 475.7MB | ok |
| xai | 519.7MB | 473.3MB | ok |
| codex | 514.5MB | 468.1MB | ok |
| migrate-hermes | 508.1MB | 461.6MB | ok |
| active-memory | 508.0MB | 461.5MB | ok |
| voice-call | 427.1MB | 380.7MB | ok |
| openai | 426.9MB | 380.4MB | ok |
| google | 424.6MB | 378.1MB | ok |

## Startup Hotspots

| case | phase | p50 | p95 |
| --- | --- | --- | --- |
| default | cli.main.gateway-run-bootstrap.total | 829.6ms | 844.1ms |
| default | post-attach.update-sentinel.total | 804.9ms | 814.9ms |
| default | sidecars.restart-sentinel.total | 804.2ms | 814.2ms |
| default | sidecars.session-locks.total | 803.5ms | 811.6ms |
| default | post-ready.agent-runtime-plugins.total | 801.6ms | 809.7ms |
| skipChannels | post-ready.agent-runtime-plugins.total | 924.7ms | 924.7ms |
| skipChannels | sidecars.plugin-services.total | 846.5ms | 846.5ms |
| skipChannels | sidecars.plugin-services.phone-control.phone-control-expiry.total | 845.3ms | 845.3ms |
| skipChannels | sidecars.plugin-services.device-pair.device-pair-notifier.total | 844.2ms | 844.2ms |
| skipChannels | sidecars.plugin-services.canvas.canvas-host.total | 839.8ms | 839.8ms |
| oneInternalHook | cli.main.gateway-run-bootstrap.total | 3556.2ms | 3626.3ms |
| oneInternalHook | cli.main.gateway-run-bootstrap | 2831.4ms | 2841.4ms |
| oneInternalHook | cli.bootstrap.plugin-plan.total | 2793.6ms | 2811.7ms |
| oneInternalHook | cli.bootstrap.plugin-plan-import.total | 2792.7ms | 2810.6ms |
| oneInternalHook | memory.ready.rssMb | 820.4ms | 861.1ms |
| allInternalHooks | cli.main.gateway-run-bootstrap.total | 3475.0ms | 3574.6ms |
| allInternalHooks | cli.main.gateway-run-bootstrap | 2785.3ms | 2885.0ms |
| allInternalHooks | cli.bootstrap.plugin-plan.total | 2757.6ms | 2854.2ms |
| allInternalHooks | cli.bootstrap.plugin-plan-import.total | 2756.7ms | 2853.2ms |
| allInternalHooks | memory.ready.rssMb | 821.2ms | 863.3ms |
| fiftyPlugins | cli.main.gateway-run-bootstrap.total | 3349.4ms | 3865.2ms |
| fiftyPlugins | cli.main.gateway-run-bootstrap | 2588.6ms | 3019.4ms |
| fiftyPlugins | cli.bootstrap.plugin-plan.total | 2555.2ms | 2985.7ms |
| fiftyPlugins | cli.bootstrap.plugin-plan-import.total | 2554.1ms | 2984.6ms |
| fiftyPlugins | post-attach.update-sentinel.total | 1219.9ms | 1299.0ms |
| fiftyStartupLazyPlugins | cli.main.gateway-run-bootstrap.total | 3330.1ms | 4342.1ms |
| fiftyStartupLazyPlugins | cli.main.gateway-run-bootstrap | 2579.8ms | 3508.3ms |
| fiftyStartupLazyPlugins | cli.bootstrap.plugin-plan.total | 2548.5ms | 3450.8ms |
| fiftyStartupLazyPlugins | cli.bootstrap.plugin-plan-import.total | 2547.3ms | 3449.6ms |
| fiftyStartupLazyPlugins | post-attach.update-sentinel.total | 902.3ms | 979.4ms |

## Fake Model Hello Loops

| run | status | pass | wall | gateway CPU core | RSS start | RSS end | RSS delta | model |
| --- | --- | --- | --- | --- | --- | --- | --- | --- |
| run-001 | pass | 1/1 | 10258.0ms | 0.000 | 2413.2MB | 939.1MB | -1474.2MB | mock-openai/gpt-5.6-luna |
| run-002 | pass | 1/1 | 9634.0ms | 0.208 | 864.0MB | 1006.0MB | 142.0MB | mock-openai/gpt-5.6-luna |
| run-003 | pass | 1/1 | 9966.0ms | 0.100 | 891.9MB | 919.3MB | 27.5MB | mock-openai/gpt-5.6-luna |

## CLI Against Booted Gateway

| case | command | duration p50 | duration p95 | RSS p95 | exits |
| --- | --- | --- | --- | --- | --- |
| gatewayHealthJson | gateway health --json | 3961.6ms | 5428.0ms | 62.9MB | code:0 x3 |
| configGetGatewayPort | config get gateway.port | 940.9ms | 995.8ms | 63.2MB | code:0 x3 |

## SQLite State Smoke

| profile | state rows | agent rows | integrity | WAL before | WAL after | query p95 max | total |
| --- | --- | --- | --- | --- | --- | --- | --- |
| smoke | 4100 | 1000 | ok | 2.9MB | 0.0MB | 0.1ms | 60.4ms |

## Observations

No data.

