# OpenClaw Source Performance

Generated: 2026-07-18T19:01:29.363Z

## Gateway Boot

| case | name | readyz p50 | readyz p95 | healthz p50 | http listen p50 | gateway ready p50 | first output p50 | RSS p95 | CPU core p95 |
| --- | --- | --- | --- | --- | --- | --- | --- | --- | --- |
| default | gateway default | 3122.2ms | 3130.1ms | 3121.5ms | 3002.3ms | 3037.9ms | 31.6ms | 614.8MB | 0.984 |
| skipChannels | gateway, skip channels | 3056.0ms | 3131.7ms | 3053.0ms | 2998.9ms | 3002.6ms | 30.7ms | 606.8MB | 1.005 |
| oneInternalHook | gateway, one configured internal hook | 3055.8ms | 3108.7ms | 3055.4ms | 3000.3ms | 3003.9ms | 30.1ms | 633.8MB | 0.983 |
| allInternalHooks | gateway, all internal hooks | 3048.5ms | 3071.9ms | 3046.3ms | 2997.6ms | 3001.0ms | 29.1ms | 613.7MB | 0.990 |
| fiftyPlugins | gateway, 50 manifest plugins | 3470.5ms | 3625.2ms | 3470.2ms | 3344.2ms | 3379.4ms | 30.9ms | 612.0MB | 1.215 |
| fiftyStartupLazyPlugins | gateway, 50 startup-lazy manifest plugins | 3184.9ms | 3195.6ms | 3183.4ms | 3100.4ms | 3136.8ms | 32.0ms | 619.1MB | 0.957 |

## Memory Trend

No published source baseline was available for this tested ref.

No data.

## Bundled Plugin Import Memory

| plugin | max RSS | delta from empty process | status |
| --- | --- | --- | --- |
| codex | 407.9MB | 364.8MB | ok |
| migrate-hermes | 400.6MB | 357.5MB | ok |
| active-memory | 397.5MB | 354.4MB | ok |
| xai | 395.0MB | 351.9MB | ok |
| migrate-claude | 393.3MB | 350.2MB | ok |
| llm-task | 392.2MB | 349.1MB | ok |
| openai | 351.5MB | 308.4MB | ok |
| google | 349.5MB | 306.4MB | ok |
| voice-call | 331.7MB | 288.6MB | ok |
| minimax | 329.0MB | 286.0MB | ok |

## Startup Hotspots

| case | phase | p50 | p95 |
| --- | --- | --- | --- |
| default | cli.main.gateway-run-bootstrap.total | 2617.1ms | 2624.7ms |
| default | cli.main.gateway-run-bootstrap | 2101.4ms | 2116.2ms |
| default | memory.ready.rssMb | 585.5ms | 585.9ms |
| default | cli.main.gateway-run-pre-bootstrap.total | 508.5ms | 515.6ms |
| default | memory.ready.heapTotalMb | 492.1ms | 492.4ms |
| skipChannels | cli.main.gateway-run-bootstrap.total | 2588.1ms | 2680.8ms |
| skipChannels | cli.main.gateway-run-bootstrap | 2079.7ms | 2141.4ms |
| skipChannels | memory.ready.rssMb | 582.7ms | 582.8ms |
| skipChannels | cli.main.gateway-run-pre-bootstrap.total | 508.3ms | 539.4ms |
| skipChannels | memory.ready.heapTotalMb | 487.6ms | 492.6ms |
| oneInternalHook | cli.main.gateway-run-bootstrap.total | 2611.8ms | 2665.9ms |
| oneInternalHook | cli.main.gateway-run-bootstrap | 2114.9ms | 2153.3ms |
| oneInternalHook | memory.ready.rssMb | 605.2ms | 615.7ms |
| oneInternalHook | memory.ready.heapTotalMb | 507.1ms | 527.3ms |
| oneInternalHook | cli.main.gateway-run-pre-bootstrap.total | 503.7ms | 512.5ms |
| allInternalHooks | cli.main.gateway-run-bootstrap.total | 2604.8ms | 2622.5ms |
| allInternalHooks | cli.main.gateway-run-bootstrap | 2098.2ms | 2115.0ms |
| allInternalHooks | memory.ready.rssMb | 577.3ms | 582.6ms |
| allInternalHooks | cli.main.gateway-run-pre-bootstrap.total | 507.4ms | 516.2ms |
| allInternalHooks | memory.ready.heapTotalMb | 489.5ms | 490.0ms |
| fiftyPlugins | cli.main.gateway-run-bootstrap.total | 2669.9ms | 2799.7ms |
| fiftyPlugins | cli.main.gateway-run-bootstrap | 2160.6ms | 2255.3ms |
| fiftyPlugins | post-attach.update-sentinel.total | 625.1ms | 667.0ms |
| fiftyPlugins | sidecars.restart-sentinel.total | 624.2ms | 666.4ms |
| fiftyPlugins | sidecars.plugin-services.total | 623.5ms | 642.2ms |
| fiftyStartupLazyPlugins | cli.main.gateway-run-bootstrap.total | 2709.9ms | 2717.6ms |
| fiftyStartupLazyPlugins | cli.main.gateway-run-bootstrap | 2154.9ms | 2155.0ms |
| fiftyStartupLazyPlugins | memory.ready.rssMb | 577.4ms | 583.8ms |
| fiftyStartupLazyPlugins | cli.main.gateway-run-pre-bootstrap.total | 559.3ms | 562.6ms |
| fiftyStartupLazyPlugins | cli.main.gateway-run-imports.total | 493.7ms | 502.7ms |

## Fake Model Hello Loops

| run | status | pass | wall | gateway CPU core | RSS start | RSS end | RSS delta | model |
| --- | --- | --- | --- | --- | --- | --- | --- | --- |
| run-001 | pass | 1/1 | 13136.0ms | 0.761 | 714.6MB | 1283.1MB | 568.4MB | mock-openai/gpt-5.6-luna |
| run-002 | pass | 1/1 | 8965.0ms | 0.446 | 683.0MB | 964.0MB | 281.0MB | mock-openai/gpt-5.6-luna |
| run-003 | pass | 1/1 | 9084.0ms | 0.440 | 681.0MB | 1057.7MB | 376.7MB | mock-openai/gpt-5.6-luna |

## CLI Against Booted Gateway

| case | command | duration p50 | duration p95 | RSS p95 | exits |
| --- | --- | --- | --- | --- | --- |
| gatewayHealthJson | gateway health --json | 2731.2ms | 2819.8ms | 56.6MB | code:0 x3 |
| configGetGatewayPort | config get gateway.port | 608.7ms | 611.0ms | 56.5MB | code:0 x3 |

## SQLite State Smoke

| profile | state rows | agent rows | integrity | WAL before | WAL after | query p95 max | total |
| --- | --- | --- | --- | --- | --- | --- | --- |
| smoke | 4100 | 1000 | ok | 3.8MB | 0.0MB | 0.0ms | 39.5ms |

## Observations

No data.

