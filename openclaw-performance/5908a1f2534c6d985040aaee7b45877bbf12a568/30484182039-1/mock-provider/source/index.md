# OpenClaw Source Performance

Generated: 2026-07-29T19:31:26.137Z

## Gateway Boot

| case | name | readyz p50 | readyz p95 | healthz p50 | http listen p50 | gateway ready p50 | first output p50 | RSS p95 | CPU core p95 |
| --- | --- | --- | --- | --- | --- | --- | --- | --- | --- |
| default | gateway default | 8195.2ms | 8243.9ms | 8032.0ms | 3943.2ms | 7266.8ms | 278.4ms | 1056.5MB | 1.456 |
| skipChannels | gateway, skip channels | 7962.4ms | 9203.7ms | 7962.3ms | 3821.1ms | 3838.1ms | 272.2ms | 1014.7MB | 1.412 |
| oneInternalHook | gateway, one configured internal hook | 5028.1ms | 5114.9ms | 5027.8ms | 4960.1ms | 4968.8ms | 263.9ms | 926.6MB | 1.392 |
| allInternalHooks | gateway, all internal hooks | 7936.8ms | 10108.7ms | 7936.8ms | 5038.4ms | 5050.1ms | 270.8ms | 1166.5MB | 1.371 |
| fiftyPlugins | gateway, 50 manifest plugins | 9636.2ms | 9691.7ms | 9635.9ms | 3685.0ms | 3734.0ms | 256.5ms | 1074.3MB | 1.341 |
| fiftyStartupLazyPlugins | gateway, 50 startup-lazy manifest plugins | 12424.6ms | 13166.8ms | 12428.4ms | 4395.1ms | 4471.3ms | 333.7ms | 1042.7MB | 1.367 |

## Memory Trend

No published source baseline was available for this tested ref.

No data.

## Bundled Plugin Import Memory

| plugin | max RSS | delta from empty process | status |
| --- | --- | --- | --- |
| codex | 581.7MB | 535.9MB | ok |
| opencode | 558.5MB | 512.7MB | ok |
| memory-lancedb | 539.3MB | 493.5MB | ok |
| voice-call | 529.3MB | 483.5MB | ok |
| openai | 527.4MB | 481.5MB | ok |
| acpx | 521.6MB | 475.8MB | ok |
| xai | 513.0MB | 467.2MB | ok |
| anthropic | 512.0MB | 466.2MB | ok |
| google-meet | 511.1MB | 465.3MB | ok |
| migrate-hermes | 507.8MB | 462.0MB | ok |

## Startup Hotspots

| case | phase | p50 | p95 |
| --- | --- | --- | --- |
| default | post-ready.maintenance.total | 5594.9ms | 5623.2ms |
| default | post-ready.gateway-data.session-catalog.main.total | 5524.6ms | 5530.7ms |
| default | post-ready.gateway-data.plugins.total | 5478.0ms | 5483.2ms |
| default | sidecars.session-locks.total | 5285.6ms | 5323.5ms |
| default | post-ready.agent-runtime-plugins.total | 5157.6ms | 5163.4ms |
| skipChannels | post-ready.gateway-data.plugins.total | 5626.7ms | 6613.4ms |
| skipChannels | sidecars.session-locks.total | 5474.6ms | 6422.6ms |
| skipChannels | post-ready.agent-runtime-plugins.total | 5400.3ms | 6195.7ms |
| skipChannels | post-ready.gateway-data.sessions.main.total | 5396.9ms | 6187.6ms |
| skipChannels | post-ready.maintenance.total | 5108.4ms | 6230.4ms |
| oneInternalHook | cli.main.gateway-run-bootstrap.total | 3760.1ms | 3779.6ms |
| oneInternalHook | cli.main.gateway-run-bootstrap | 3039.4ms | 3079.4ms |
| oneInternalHook | cli.bootstrap.plugin-plan.total | 3016.0ms | 3060.5ms |
| oneInternalHook | cli.bootstrap.plugin-plan-import.total | 3015.0ms | 3059.5ms |
| oneInternalHook | sidecars.internal-hooks.total | 1020.6ms | 1093.9ms |
| allInternalHooks | post-ready.gateway-data.plugins.total | 4370.3ms | 4772.5ms |
| allInternalHooks | sidecars.session-locks.total | 4221.3ms | 4621.5ms |
| allInternalHooks | post-ready.agent-runtime-plugins.total | 4135.6ms | 4527.3ms |
| allInternalHooks | post-ready.gateway-data.sessions.main.total | 4131.6ms | 4523.7ms |
| allInternalHooks | post-attach.update-sentinel.total | 3801.9ms | 4211.6ms |
| fiftyPlugins | post-ready.gateway-data.plugins.total | 7123.1ms | 7318.5ms |
| fiftyPlugins | sidecars.session-locks.total | 6964.1ms | 7027.0ms |
| fiftyPlugins | post-ready.maintenance.total | 6887.3ms | 7074.9ms |
| fiftyPlugins | post-ready.agent-runtime-plugins.total | 6745.5ms | 6936.7ms |
| fiftyPlugins | post-ready.gateway-data.sessions.main.total | 6741.4ms | 6931.7ms |
| fiftyStartupLazyPlugins | post-ready.gateway-data.session-catalog.main.total | 9349.2ms | 9683.2ms |
| fiftyStartupLazyPlugins | post-ready.gateway-data.plugins.total | 9006.3ms | 9669.1ms |
| fiftyStartupLazyPlugins | sidecars.session-locks.total | 8810.8ms | 9485.0ms |
| fiftyStartupLazyPlugins | post-ready.agent-runtime-plugins.total | 8674.3ms | 9357.0ms |
| fiftyStartupLazyPlugins | post-ready.gateway-data.sessions.main.total | 8665.1ms | 9349.5ms |

## Fake Model Hello Loops

| run | status | pass | wall | gateway CPU core | RSS start | RSS end | RSS delta | model |
| --- | --- | --- | --- | --- | --- | --- | --- | --- |
| run-001 | pass | 1/1 | 13180.0ms | 0.000 | 2645.4MB | 1082.0MB | -1563.5MB | mock-openai/gpt-5.6-luna |
| run-002 | pass | 1/1 | 12238.0ms | 0.163 | 949.9MB | 966.5MB | 16.6MB | mock-openai/gpt-5.6-luna |
| run-003 | pass | 1/1 | 12205.0ms | 0.164 | 1036.0MB | 1050.7MB | 14.7MB | mock-openai/gpt-5.6-luna |

## CLI Against Booted Gateway

| case | command | duration p50 | duration p95 | RSS p95 | exits |
| --- | --- | --- | --- | --- | --- |
| gatewayHealthJson | gateway health --json | 733.4ms | 764.2ms | 187.3MB | code:0 x3 |
| configGetGatewayPort | config get gateway.port | 916.8ms | 927.0ms | 186.8MB | code:0 x3 |

## SQLite State Smoke

| profile | state rows | agent rows | integrity | WAL before | WAL after | query p95 max | total |
| --- | --- | --- | --- | --- | --- | --- | --- |
| smoke | 4100 | 1000 | ok | 3.2MB | 0.0MB | 0.1ms | 152.7ms |

## Observations

No data.

