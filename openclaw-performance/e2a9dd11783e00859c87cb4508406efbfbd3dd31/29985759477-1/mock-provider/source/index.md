# OpenClaw Source Performance

Generated: 2026-07-23T06:45:55.288Z

## Gateway Boot

| case | name | readyz p50 | readyz p95 | healthz p50 | http listen p50 | gateway ready p50 | first output p50 | RSS p95 | CPU core p95 |
| --- | --- | --- | --- | --- | --- | --- | --- | --- | --- |
| default | gateway default | 5720.9ms | 5845.5ms | 5721.0ms | 2848.1ms | 5621.9ms | 41.9ms | 926.3MB | 1.229 |
| skipChannels | gateway, skip channels | 2962.5ms | 2968.2ms | 2960.1ms | 2887.0ms | 2930.3ms | 43.1ms | 869.3MB | 1.373 |
| oneInternalHook | gateway, one configured internal hook | 4287.6ms | 6474.2ms | 4271.1ms | 4179.4ms | 4229.0ms | 41.7ms | 968.3MB | 1.236 |
| allInternalHooks | gateway, all internal hooks | 6380.0ms | 6398.4ms | 6380.0ms | 4148.0ms | 4199.5ms | 42.3ms | 975.9MB | 1.359 |
| fiftyPlugins | gateway, 50 manifest plugins | 8627.1ms | 8802.9ms | 8627.0ms | 4332.8ms | 4413.5ms | 45.0ms | 1161.9MB | 1.280 |
| fiftyStartupLazyPlugins | gateway, 50 startup-lazy manifest plugins | 8364.0ms | 8603.4ms | 8364.0ms | 4042.7ms | 4136.2ms | 44.9ms | 1142.2MB | 1.279 |

## Memory Trend

No published source baseline was available for this tested ref.

No data.

## Bundled Plugin Import Memory

| plugin | max RSS | delta from empty process | status |
| --- | --- | --- | --- |
| zoom-meetings | 573.4MB | 526.9MB | ok |
| teams-meetings | 515.1MB | 468.6MB | ok |
| codex | 514.4MB | 467.9MB | ok |
| google-meet | 510.5MB | 464.0MB | ok |
| llm-task | 507.1MB | 460.6MB | ok |
| voice-call | 505.7MB | 459.2MB | ok |
| migrate-hermes | 505.5MB | 459.0MB | ok |
| anthropic | 504.8MB | 458.3MB | ok |
| workboard | 504.3MB | 457.8MB | ok |
| active-memory | 504.2MB | 457.7MB | ok |

## Startup Hotspots

| case | phase | p50 | p95 |
| --- | --- | --- | --- |
| default | sidecars.session-locks.total | 3574.9ms | 3659.7ms |
| default | post-ready.agent-runtime-plugins.total | 3554.7ms | 3638.6ms |
| default | post-attach.update-check.total | 3551.9ms | 3636.1ms |
| default | post-attach.update-sentinel.total | 3542.9ms | 3628.4ms |
| default | sidecars.restart-sentinel.total | 3541.7ms | 3627.3ms |
| skipChannels | cli.main.gateway-run-bootstrap.total | 862.6ms | 871.4ms |
| skipChannels | sidecars.internal-hooks.total | 843.9ms | 865.1ms |
| skipChannels | memory.ready.rssMb | 817.1ms | 835.1ms |
| skipChannels | post-attach.update-check.total | 778.8ms | 802.9ms |
| skipChannels | ready.total | 765.0ms | 787.5ms |
| oneInternalHook | cli.main.gateway-run-bootstrap.total | 3260.9ms | 3268.4ms |
| oneInternalHook | sidecars.session-locks.total | 2991.6ms | 2991.6ms |
| oneInternalHook | post-ready.agent-runtime-plugins.total | 2989.3ms | 2989.3ms |
| oneInternalHook | post-attach.update-sentinel.total | 2984.4ms | 2984.4ms |
| oneInternalHook | sidecars.restart-sentinel.total | 2983.2ms | 2983.2ms |
| allInternalHooks | cli.main.gateway-run-bootstrap.total | 3216.4ms | 3239.3ms |
| allInternalHooks | sidecars.session-locks.total | 2846.8ms | 2866.0ms |
| allInternalHooks | post-ready.agent-runtime-plugins.total | 2844.4ms | 2863.4ms |
| allInternalHooks | post-attach.update-sentinel.total | 2833.7ms | 2852.0ms |
| allInternalHooks | sidecars.restart-sentinel.total | 2832.4ms | 2850.8ms |
| fiftyPlugins | sidecars.session-locks.total | 5084.0ms | 5226.1ms |
| fiftyPlugins | post-ready.maintenance.total | 4987.3ms | 5133.8ms |
| fiftyPlugins | post-ready.agent-runtime-plugins.total | 4949.3ms | 5094.1ms |
| fiftyPlugins | post-attach.update-sentinel.total | 4740.5ms | 4875.5ms |
| fiftyPlugins | sidecars.restart-sentinel.total | 4739.5ms | 4874.4ms |
| fiftyStartupLazyPlugins | sidecars.session-locks.total | 4845.6ms | 5083.3ms |
| fiftyStartupLazyPlugins | post-ready.maintenance.total | 4756.7ms | 4983.8ms |
| fiftyStartupLazyPlugins | post-ready.agent-runtime-plugins.total | 4721.1ms | 4942.3ms |
| fiftyStartupLazyPlugins | post-attach.update-sentinel.total | 4527.3ms | 4729.4ms |
| fiftyStartupLazyPlugins | sidecars.restart-sentinel.total | 4526.4ms | 4728.2ms |

## Fake Model Hello Loops

| run | status | pass | wall | gateway CPU core | RSS start | RSS end | RSS delta | model |
| --- | --- | --- | --- | --- | --- | --- | --- | --- |
| run-001 | pass | 1/1 | 9735.0ms | 0.000 | 2415.5MB | 958.8MB | -1456.7MB | mock-openai/gpt-5.6-luna |
| run-002 | pass | 1/1 | 9355.0ms | 0.107 | 854.1MB | 1053.3MB | 199.2MB | mock-openai/gpt-5.6-luna |
| run-003 | pass | 1/1 | 9557.0ms | 0.105 | 855.8MB | 1032.0MB | 176.2MB | mock-openai/gpt-5.6-luna |

## CLI Against Booted Gateway

| case | command | duration p50 | duration p95 | RSS p95 | exits |
| --- | --- | --- | --- | --- | --- |
| gatewayHealthJson | gateway health --json | 3244.8ms | 3280.2ms | 60.1MB | code:0 x3 |
| configGetGatewayPort | config get gateway.port | 764.9ms | 820.7ms | 60.1MB | code:0 x3 |

## SQLite State Smoke

| profile | state rows | agent rows | integrity | WAL before | WAL after | query p95 max | total |
| --- | --- | --- | --- | --- | --- | --- | --- |
| smoke | 4100 | 1000 | ok | 3.1MB | 0.0MB | 0.1ms | 55.5ms |

## Observations

No data.

