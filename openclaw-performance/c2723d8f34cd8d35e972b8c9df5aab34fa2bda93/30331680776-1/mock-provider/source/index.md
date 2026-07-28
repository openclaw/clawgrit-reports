# OpenClaw Source Performance

Generated: 2026-07-28T05:33:55.760Z

## Gateway Boot

| case | name | readyz p50 | readyz p95 | healthz p50 | http listen p50 | gateway ready p50 | first output p50 | RSS p95 | CPU core p95 |
| --- | --- | --- | --- | --- | --- | --- | --- | --- | --- |
| default | gateway default | 5920.5ms | 6105.7ms | 5920.2ms | 2884.4ms | 5662.6ms | 209.9ms | 1137.0MB | 1.310 |
| skipChannels | gateway, skip channels | 6049.5ms | 7131.9ms | 6049.5ms | 2955.0ms | 3024.5ms | 213.5ms | 1156.7MB | 1.322 |
| oneInternalHook | gateway, one configured internal hook | 6747.3ms | 7005.2ms | 6747.2ms | 4385.3ms | 4424.2ms | 210.8ms | 1311.7MB | 1.285 |
| allInternalHooks | gateway, all internal hooks | 4797.0ms | 6723.5ms | 4796.6ms | 4429.7ms | 4470.8ms | 213.8ms | 1302.5MB | 1.327 |
| fiftyPlugins | gateway, 50 manifest plugins | 8855.5ms | 8965.6ms | 8823.5ms | 4372.8ms | 4454.6ms | 214.5ms | 1176.3MB | 1.247 |
| fiftyStartupLazyPlugins | gateway, 50 startup-lazy manifest plugins | 8368.2ms | 8575.0ms | 8414.6ms | 3971.2ms | 4057.2ms | 209.7ms | 1158.3MB | 1.283 |

## Memory Trend

No published source baseline was available for this tested ref.

No data.

## Bundled Plugin Import Memory

| plugin | max RSS | delta from empty process | status |
| --- | --- | --- | --- |
| memory-lancedb | 568.2MB | 521.7MB | ok |
| codex | 541.7MB | 495.2MB | ok |
| active-memory | 540.2MB | 493.7MB | ok |
| anthropic | 530.6MB | 484.1MB | ok |
| workboard | 525.7MB | 479.2MB | ok |
| opencode | 522.1MB | 475.7MB | ok |
| teams-meetings | 512.0MB | 465.5MB | ok |
| migrate-hermes | 509.9MB | 463.4MB | ok |
| voice-call | 507.4MB | 461.0MB | ok |
| zoom-meetings | 505.2MB | 458.7MB | ok |

## Startup Hotspots

| case | phase | p50 | p95 |
| --- | --- | --- | --- |
| default | post-ready.gateway-handler.channels.total | 3952.8ms | 4008.8ms |
| default | post-ready.gateway-handler.board.total | 3939.8ms | 3997.0ms |
| default | post-ready.gateway-handler.agent-identity.total | 3893.3ms | 3949.7ms |
| default | post-ready.gateway-handler.models-auth-status.total | 3887.2ms | 3943.6ms |
| default | post-ready.gateway-handler.cron.total | 3873.1ms | 3924.8ms |
| skipChannels | post-ready.gateway-handler.channels.total | 4028.8ms | 5120.4ms |
| skipChannels | post-ready.gateway-handler.board.total | 4012.3ms | 5022.4ms |
| skipChannels | post-ready.gateway-handler.agent-identity.total | 3975.5ms | 4979.1ms |
| skipChannels | post-ready.gateway-handler.models-auth-status.total | 3965.9ms | 4964.8ms |
| skipChannels | post-ready.gateway-handler.cron.total | 3956.9ms | 4954.3ms |
| oneInternalHook | cli.main.gateway-run-bootstrap.total | 3290.1ms | 3350.0ms |
| oneInternalHook | post-ready.gateway-handler.channels.total | 3206.0ms | 3243.1ms |
| oneInternalHook | post-ready.gateway-handler.board.total | 3190.3ms | 3218.9ms |
| oneInternalHook | post-ready.gateway-handler.agent-identity.total | 3151.7ms | 3159.2ms |
| oneInternalHook | post-ready.gateway-handler.models-auth-status.total | 3140.9ms | 3152.8ms |
| allInternalHooks | cli.main.gateway-run-bootstrap.total | 3353.5ms | 3543.1ms |
| allInternalHooks | post-ready.gateway-handler.channels.total | 3138.0ms | 3138.0ms |
| allInternalHooks | post-ready.gateway-handler.board.total | 3118.0ms | 3118.0ms |
| allInternalHooks | post-ready.gateway-handler.agent-identity.total | 3079.7ms | 3079.7ms |
| allInternalHooks | post-ready.gateway-handler.models-auth-status.total | 3074.8ms | 3074.8ms |
| fiftyPlugins | post-ready.gateway-handler.channels.total | 5313.7ms | 5351.2ms |
| fiftyPlugins | post-ready.gateway-handler.board.total | 5299.1ms | 5339.4ms |
| fiftyPlugins | post-ready.gateway-handler.agent-identity.total | 5250.4ms | 5289.3ms |
| fiftyPlugins | post-ready.gateway-handler.models-auth-status.total | 5245.9ms | 5285.2ms |
| fiftyPlugins | post-ready.gateway-handler.cron.total | 5231.6ms | 5275.6ms |
| fiftyStartupLazyPlugins | post-ready.gateway-handler.channels.total | 5008.4ms | 5034.1ms |
| fiftyStartupLazyPlugins | post-ready.gateway-handler.board.total | 4994.2ms | 5019.6ms |
| fiftyStartupLazyPlugins | post-ready.gateway-handler.agent-identity.total | 4949.8ms | 4979.4ms |
| fiftyStartupLazyPlugins | post-ready.gateway-handler.models-auth-status.total | 4945.8ms | 4972.0ms |
| fiftyStartupLazyPlugins | post-ready.gateway-handler.cron.total | 4936.4ms | 4962.8ms |

## Fake Model Hello Loops

| run | status | pass | wall | gateway CPU core | RSS start | RSS end | RSS delta | model |
| --- | --- | --- | --- | --- | --- | --- | --- | --- |
| run-001 | pass | 1/1 | 10778.0ms | 0.000 | 2404.5MB | 1159.7MB | -1244.8MB | mock-openai/gpt-5.6-luna |
| run-002 | pass | 1/1 | 10286.0ms | 0.194 | 989.1MB | 1046.4MB | 57.3MB | mock-openai/gpt-5.6-luna |
| run-003 | pass | 1/1 | 10319.0ms | 0.194 | 950.2MB | 1030.1MB | 79.9MB | mock-openai/gpt-5.6-luna |

## CLI Against Booted Gateway

| case | command | duration p50 | duration p95 | RSS p95 | exits |
| --- | --- | --- | --- | --- | --- |
| gatewayHealthJson | gateway health --json | 3563.9ms | 3722.3ms | 187.6MB | code:0 x3 |
| configGetGatewayPort | config get gateway.port | 811.2ms | 831.7ms | 187.6MB | code:0 x3 |

## SQLite State Smoke

| profile | state rows | agent rows | integrity | WAL before | WAL after | query p95 max | total |
| --- | --- | --- | --- | --- | --- | --- | --- |
| smoke | 4100 | 1000 | ok | 3.2MB | 0.0MB | 0.0ms | 129.8ms |

## Observations

No data.

