const MATRIX = {
  "Forward head posture": {
    "s": "STANDING POSTURE",
    "smr": "Suboccipital Release (Tennis Ball), SCM Self-Release, Upper Trap Foam Roll / Fingertip Release",
    "len": "Doorway Chest Stretch, Chin Tuck",
    "act": "Craniocervical Flexion Progression, Deep Neck Flexor Hold, Chin Tuck",
    "ex": "Suboccipital Release (Tennis Ball), SCM Self-Release, Chin Tuck, Deep Neck Flexor Hold, Craniocervical Flexion Progression, Wall Angels, Prone Y-T-W",
    "fl": "Avoid heavy overhead pressing until scapular control established. Cue neutral head position on all pulls. Include scapular retraction in warm-up."
  },
  "Rounded shoulders / protracted scapulae": {
    "s": "STANDING POSTURE",
    "smr": "Pec Minor Lacrosse Ball Release, Thoracic Spine Foam Roll",
    "len": "Doorway Chest Stretch, Sleeper Stretch",
    "act": "Band Pull-Apart, Prone Y-T-W, Scapular Wall Slides, Face Pull",
    "ex": "Band Pull-Apart, Prone Y-T-W, Scapular Wall Slides, Face Pull, Push-Up Plus (Serratus)",
    "fl": "Prioritize horizontal pulling before pressing. Avoid wide-grip bench until shoulder mobility improves. Include thoracic mobility in every warm-up.  HYPERMOBILITY FLAG — avoid end-range passive stretch"
  },
  "Thoracic kyphosis": {
    "s": "STANDING POSTURE",
    "smr": "Thoracic Extension over Foam Roller",
    "len": "Thoracic Extension over Foam Roller, Lat Stretch (Doorway / Rack), Child's Pose with Lateral Reach, Cat-Cow",
    "act": "Prone Cobra, Resisted Thoracic Extension (Band / Cable), Band Pull-Apart",
    "ex": "Thoracic Extension over Foam Roller, Thread-the-Needle, Prone Cobra, Cat-Cow, Resisted Thoracic Extension (Band / Cable), Lat Stretch (Doorway / Rack)",
    "fl": "Thoracic mobility must precede overhead pressing. Avoid loading into flexion early. Prioritize posterior chain activation.  Note: Internal obliques removed from overactive column — not consistently su"
  },
  "Anterior pelvic tilt": {
    "s": "STANDING POSTURE",
    "smr": "Hip Flexor Foam Roll (TFL / Psoas), TFL Foam Roll, Lumbar Erector Foam Roll",
    "len": "Half-Kneeling Hip Flexor Stretch, Couch Stretch",
    "act": "Glute Bridge, Dead Bug",
    "ex": "Half-Kneeling Hip Flexor Stretch, Couch Stretch, Glute Bridge, Dead Bug, McGill Curl-Up",
    "fl": "Do not load squat pattern until neutral pelvis is established under bodyweight. Begin all lower body sessions with glute activation. Flag for hip flexor length assessment.  REFERENCE STANDARD (Kendall"
  },
  "Knee hyperextension": {
    "s": "STANDING POSTURE",
    "smr": "Quad Foam Roll, Calf Foam Roll",
    "len": "Calf Stretch (Wall — Gastrocnemius + Soleus)",
    "act": "Nordic Curl, Seated Hamstring Curl Machine, Single-Leg Balance",
    "ex": "Nordic Curl, Seated Hamstring Curl Machine, Single-Leg RDL, Single-Leg Balance",
    "fl": "HYPERMOBILITY FLAG — avoid end-range knee extension in all exercises. Cue soft knees on all standing patterns. Prioritize hamstring and posterior chain strength."
  },
  "Foot overpronation / arch collapse": {
    "s": "STANDING POSTURE",
    "smr": "Plantar Fascia Ball Roll, Calf Foam Roll, TFL Foam Roll",
    "len": "Calf Stretch (Wall — Gastrocnemius + Soleus)",
    "act": "Short Foot Exercise, Towel Scrunches, Single-Leg Calf Raise, Banded Hip Abduction",
    "ex": "Short Foot Exercise, Towel Scrunches, Single-Leg Calf Raise, Banded Hip Abduction, Banded Monster Walk",
    "fl": "Flag for knee valgus tendency. Assess foot position on all lower body exercises. Avoid heavy loading before arch stability is established.  HYPERMOBILITY FLAG — intrinsic foot loading only; avoid aggr"
  },
  "Arms fall forward": {
    "s": "OVERHEAD SQUAT",
    "smr": "Lat Foam Roll, Thoracic Spine Foam Roll",
    "len": "Lat Stretch (Doorway / Rack), Thoracic Extension over Foam Roller",
    "act": "Prone Y-T-W, Face Pull",
    "ex": "Lat Stretch (Doorway / Rack), Thoracic Extension over Foam Roller, Prone Y-T-W, Scapular Wall Slides, Band Pull-Apart",
    "fl": "Overhead pressing contraindicated until lat flexibility and thoracic mobility improve. Begin with landmine press or dumbbell incline.  DIFFERENTIATION: Perform lat stretch clearance test first — arms "
  },
  "Excessive forward lean": {
    "s": "OVERHEAD SQUAT",
    "smr": "Calf Foam Roll, Hip Flexor Foam Roll (TFL / Psoas)",
    "len": "Banded Ankle Mobilization, Ankle Circles / Dorsiflexion Drill, Calf Stretch (Wall — Gastrocnemius + Soleus)",
    "act": "Goblet Squat",
    "ex": "Ankle Circles / Dorsiflexion Drill , Banded Ankle Mobilization, Goblet Squat, Box Squat, Bulgarian Split Squat",
    "fl": "Use heel elevation under plates initially if ankle dorsiflexion is limiting. Avoid back squat until pattern is clean. Consider box squat as regression.  DIFFERENTIATION SEQUENCE: (1) Elevate heels 10–"
  },
  "Knee valgus": {
    "s": "OVERHEAD SQUAT",
    "smr": "TFL Foam Roll, Adductor Foam Roll",
    "len": "Not primary driver — this is an activation/motor control problem. Skip lengthen phase unless adductor tightness confirme",
    "act": "Goblet Squat",
    "ex": "Banded Clamshell, Lateral Band Walk, Goblet Squat, Single-Leg Glute Bridge, Lateral Band Walk",
    "fl": "Cue external rotation on all squat patterns. Use band above knees as feedback tool. Do not progress loading until valgus is corrected under bodyweight.  HYPERMOBILITY FLAG — avoid valgus-loading patte"
  },
  "Heel rise": {
    "s": "OVERHEAD SQUAT",
    "smr": "Calf Foam Roll, Plantar Fascia Ball Roll",
    "len": "Calf Stretch (Wall — Gastrocnemius + Soleus), Banded Ankle Mobilization",
    "act": "Ankle Circles / Dorsiflexion Drill, Goblet Squat (heel elevated if needed), Single-Leg Calf Raise",
    "ex": "Calf Stretch (Wall — Gastrocnemius + Soleus), Ankle Circles / Dorsiflexion Drill, Banded Ankle Mobilization, Single-Leg Calf Raise",
    "fl": "Temporarily elevate heels under plates to allow full squat pattern. Prioritize ankle mobility in warm-up. Reassess every 4 weeks."
  },
  "Ipsilateral hip drop": {
    "s": "SINGLE LEG SQUAT",
    "smr": "TFL Foam Roll, Adductor Foam Roll",
    "len": "Not primary driver — glute med weakness is neuromuscular. Lengthen TFL only if palpation confirms tightness.",
    "act": "Banded Clamshell, Single-Leg Glute Bridge, Lateral Band Walk, Step-Up, Single-Leg RDL",
    "ex": "Banded Clamshell, Lateral Band Walk, Single-Leg Glute Bridge, Lateral Band Walk, Step-Up, Single-Leg RDL",
    "fl": "Flag for hip and knee stability. Assess symmetry — L/R differences > 15% suggest unilateral focus needed. Include unilateral work in every lower body session.  THRESHOLD (Crossley et al. 2011 / Stickl"
  },
  "Knee valgus on descent": {
    "s": "SINGLE LEG SQUAT",
    "smr": "TFL Foam Roll, Adductor Foam Roll",
    "len": "Not primary driver — same as bilateral valgus. Activation is the primary intervention.",
    "act": "TRX Single-Leg Squat, Banded Clamshell, Step-Up, Reverse Lunge",
    "ex": "TRX Single-Leg Squat, Banded Clamshell, Step-Up, Reverse Lunge",
    "fl": "Do not load single-leg patterns until bilateral pattern is stable. Use box height as regression. Note any pain — refer if present."
  },
  "Trunk lateral flexion": {
    "s": "SINGLE LEG SQUAT",
    "smr": "QL Lateral Foam Roll, Lateral Trunk Foam Roll",
    "len": "Not primary driver — lateral trunk is compensating, not shortened. QL stretch only if tightness confirmed on palpation.",
    "act": "Banded Clamshell, Single-Leg Glute Bridge, Lateral Band Walk, Side-Lying Hip Abduction",
    "ex": "Banded Clamshell, Single-Leg Glute Bridge, Lateral Band Walk, Side-Lying Hip Abduction",
    "fl": "Often accompanies Trendelenburg. Treat together. Include anti-lateral flexion core work (suitcase carry, side plank)."
  },
  "Scapular winging": {
    "s": "PUSH PATTERN",
    "smr": "Pec Minor Lacrosse Ball Release",
    "len": "Not primary driver — winging is a serratus/lower trap motor control problem, not a shortening problem. Skip lengthen pha",
    "act": "Wall Push-Up Plus, Push-Up Plus (Serratus), Cable Serratus Punch, Bear Crawl Hold",
    "ex": "Wall Push-Up Plus, Push-Up Plus (Serratus), Cable Serratus Punch, Bear Crawl Hold",
    "fl": "Winging on push pattern is a contraindication for loaded pressing. Regress to wall push-up. Reassess before progressing. May warrant PT referral if severe.  HYPERMOBILITY FLAG — prioritize serratus an"
  },
  "Shoulder elevation": {
    "s": "PUSH PATTERN",
    "smr": "Upper Trap Foam Roll / Fingertip Release, Levator Scapulae Foam Roll / Release",
    "len": "Not primary driver — upper trap dominance is a neuromuscular timing problem. SMR upper trap only if palpably tight; prio",
    "act": "Prone Y-T-W, Scapular Depression Hold, Seated Cable Row, Face Pull",
    "ex": "Prone Y-T-W, Scapular Depression Hold, Seated Cable Row, Face Pull",
    "fl": "Cue scapular depression on all pressing. Avoid overhead pressing until lower trap activation is established. Include lower trap work in every session."
  },
  "Elbow flare > 75°": {
    "s": "PUSH PATTERN",
    "smr": "Lat Foam Roll, Posterior Shoulder Capsule Release",
    "len": "Lat Stretch (Doorway / Rack), Doorway Chest Stretch, Sleeper Stretch",
    "act": "Band External Rotation, Band Pull-Apart",
    "ex": "Lat Stretch (Doorway / Rack), Doorway Chest Stretch, Band External Rotation, Sleeper Stretch",
    "fl": "Reduce load until technique corrected. Use closer grip temporarily. Flag shoulder mobility for reassessment."
  },
  "Wrist deviation under load": {
    "s": "PUSH PATTERN",
    "smr": "Forearm Flexor Self-Release",
    "len": "Wrist Flexor Stretch",
    "act": "Dead Hang, Dumbbell Bench Press",
    "ex": "Forearm Flexor Self-Release, Wrist Flexor Stretch, Dead Hang, Dumbbell Bench Press (wrist-neutral grip)",
    "fl": "Flag for carpal tunnel or wrist history — reduce load, assess grip position first. Bar should sit in heel of palm. Dumbbell press preferred over barbell for wrist symptoms. Refer to PT if symptoms per"
  },
  "Asymmetrical press": {
    "s": "PUSH PATTERN",
    "smr": "Pec Minor Lacrosse Ball Release, Upper Trap Foam Roll / Fingertip Release",
    "len": "Doorway Chest Stretch, Sleeper Stretch",
    "act": "Landmine Press, Dumbbell Bench Press (single-arm focus), Prone Y-T-W",
    "ex": "Landmine Press (single arm), Dumbbell Bench Press (unilateral focus), Prone Y-T-W, Face Pull, Band Pull-Apart",
    "fl": "Asymmetrical pressing is a loading risk — unequal force distribution increases lateral spinal load and shoulder joint stress. Prioritise unilateral pressing until symmetry improves.  SCOLIOSIS NOTE: A"
  },
  "Upper trap dominant": {
    "s": "PULL PATTERN",
    "smr": "Upper Trap Foam Roll / Fingertip Release, Levator Scapulae Foam Roll / Release",
    "len": "Not primary driver — upper trap dominance is a neuromuscular timing problem. SMR upper trap only if palpably tight; prio",
    "act": "Prone Y-T-W, Face Pull, Seated Cable Row, Scapular Depression Hold",
    "ex": "Prone Y-T-W, Face Pull, Seated Cable Row, Lat Pulldown",
    "fl": "Reduce load on all rows and pulls until scapular pattern improves. Include lower trap activation in warm-up. Prioritize horizontal pulling over vertical."
  },
  "Limited shoulder extension": {
    "s": "PULL PATTERN",
    "smr": "Pec Minor Lacrosse Ball Release, Anterior Shoulder Lacrosse Ball Release",
    "len": "Doorway Chest Stretch, Thoracic Extension over Foam Roller",
    "act": "Band Pull-Apart, Face Pull",
    "ex": "Doorway Chest Stretch, Thoracic Extension over Foam Roller, Face Pull, Prone Y-T-W, Dumbbell Row (Single-Arm)",
    "fl": "Flag for thoracic mobility work before loaded pulls. Avoid behind-the-neck movements. Prioritize scapular retraction range in program."
  },
  "Bicep dominance": {
    "s": "PULL PATTERN",
    "smr": "Forearm Flexor Self-Release",
    "len": "Not primary driver — bicep dominance is a motor control/lat activation problem. Forearm flexor SMR only if grip fatigue ",
    "act": "Straight-Arm Pulldown, Scapular Retraction Hold, Face Pull",
    "ex": "Straight-Arm Pulldown, Scapular Retraction Hold, Face Pull, Seated Cable Row",
    "fl": "Use pronated grip to reduce bicep involvement on rows. Cue 'elbows to hips' on all pulls. Consider lat-focused isolation before compound pulling."
  },
  "Cervical protrusion on row": {
    "s": "PULL PATTERN",
    "smr": "Suboccipital Release (Tennis Ball), SCM Self-Release, Upper Trap Foam Roll / Fingertip Release",
    "len": "Chin Tuck (active lengthening of posterior cervical chain)",
    "act": "Chin Tuck cue during all pulling exercises; Craniocervical Flexion Progression as pre-session activation; Deep Neck Flex",
    "ex": "Chin Tuck, Craniocervical Flexion Progression, Deep Neck Flexor Hold, Suboccipital Release (Tennis Ball), SCM Self-Release",
    "fl": "Cervical protrusion under load directly loads suboccipital extensors with added resistance — compounding the exact dysfunction present at rest in FHP clients. Cue \"chin tucked\" on all rows and pulls a"
  },
  "Lumbar flexion / rounding": {
    "s": "HIP HINGE",
    "smr": "Hamstring Foam Roll, Calf Foam Roll",
    "len": "Seated Hamstring Stretch (Floor)",
    "act": "Wall Hip Hinge, Romanian Deadlift (RDL), Good Morning, Dead Bug",
    "ex": "Wall Hip Hinge, Romanian Deadlift (RDL), Good Morning",
    "fl": "Do not load deadlift until neutral spine is maintained through full range. Begin with Romanian deadlift from rack. Assess hamstring flexibility.  HYPERMOBILITY FLAG — prioritize neutral spine motor co"
  },
  "Knee dominant pattern": {
    "s": "HIP HINGE",
    "smr": "Hip Flexor Foam Roll (TFL / Psoas), Quad Foam Roll",
    "len": "Not primary driver — knee dominance is a motor pattern issue, not a shortening problem. Stretch hip flexors only if Thom",
    "act": "Wall Hip Hinge, Cable Pull-Through, Glute Bridge, Romanian Deadlift (RDL)",
    "ex": "Wall Hip Hinge, Cable Pull-Through, Glute Bridge, RDL, Trap Bar Deadlift",
    "fl": "Use trap bar deadlift as regression — more upright torso, easier to maintain neutral. Reinforce hinge pattern every session. Cue 'push the floor away' not 'lift the bar.'"
  },
  "Hip shift / asymmetry": {
    "s": "HIP HINGE",
    "smr": "Adductor Foam Roll, QL Lateral Foam Roll",
    "len": "90/90 Hip Stretch, Adductor Rockback, QL Lateral Stretch",
    "act": "Single-Leg RDL, Split Stance RDL, Copenhagen Plank",
    "ex": "90/90 Hip Stretch, Adductor Rockback, QL Lateral Stretch, Single-Leg RDL, Split Stance RDL, Copenhagen Plank",
    "fl": "Note direction of shift. If consistent pattern or pain present, refer to PT for SI joint assessment. Program unilateral hinge patterns.  HYPERMOBILITY FLAG — assess for SI joint involvement. Avoid end"
  },
  "Lateral setup asymmetry": {
    "s": "HIP HINGE",
    "smr": "QL Lateral Foam Roll, TFL Foam Roll",
    "len": "90/90 Hip Stretch (ipsilateral), QL Lateral Stretch (contralateral)",
    "act": "Single-Leg RDL (stance on restricted side), Split Stance RDL, Copenhagen Plank",
    "ex": "90/90 Hip Stretch, QL Lateral Stretch, Single-Leg RDL, Split Stance RDL, Copenhagen Plank, Adductor Rockback",
    "fl": "DISTINCTION FROM MID-MOVEMENT HIP SHIFT: Setup asymmetry occurs before the pull and indicates a structural/mobility restriction. Mid-movement shift (captured in Hip Shift row above) is typically a mot"
  },
  "Hyperextension at top": {
    "s": "HIP HINGE",
    "smr": "Lumbar Erector Foam Roll, TFL Foam Roll",
    "len": "Not primary driver — hyperextension at lockout is an anterior core and glute firing pattern issue. Lumbar erector SMR on",
    "act": "Dead Bug, Tall Kneeling Pallof Press, Barbell Hip Thrust with posterior pelvic tilt cue — cue 'squeeze glutes not arch'",
    "ex": "Dead Bug, Tall Kneeling Pallof Press, Barbell Hip Thrust, Cable Pull-Through",
    "fl": "Common with lower crossed syndrome. Cue 'tall hips' not 'chest up' at lockout. Include anti-extension core work in program."
  },
  "Cervical rotation restriction": {
    "s": "CERVICAL SCREEN",
    "smr": "Suboccipital Release (Tennis Ball), Upper Trap Foam Roll / Fingertip Release, SCM Self-Release",
    "len": "Neck Side Stretch, Levator Scapulae Stretch",
    "act": "Neck CARs, Craniocervical Flexion Progression, Prone Neck Extensor Hold",
    "ex": "Neck CARs, Chin Tuck, Craniocervical Flexion Progression, Levator Scapulae Stretch, Neck Side Stretch",
    "fl": "Refer to PT if restriction is > 20° asymmetry or accompanied by radiating symptoms. Do not load cervical spine. Avoid end-range rotation under load."
  },
  "Cervical flexion/extension restriction": {
    "s": "CERVICAL SCREEN",
    "smr": "Suboccipital Release (Tennis Ball), Upper Trap Foam Roll / Fingertip Release",
    "len": "Chin Tuck",
    "act": "Craniocervical Flexion Progression, Deep Neck Flexor Hold, Prone Neck Extensor Hold",
    "ex": "Chin Tuck, Deep Neck Flexor Hold, Craniocervical Flexion Progression, Prone Neck Extensor Hold, Wall Angels",
    "fl": "Extension restriction that reproduces arm pain or tingling = red flag — refer immediately. Do not prescribe cervical extension exercises until flexion is restored. Avoid loaded overhead pressing."
  },
  "GIRD — glenohumeral internal rotation deficit": {
    "s": "SHOULDER MOBILITY SCREEN",
    "smr": "Posterior Shoulder Capsule Release",
    "len": "Sleeper Stretch (posterior capsule), Doorway Chest Stretch (anterior shoulder)",
    "act": "Side-Lying External Rotation, Prone 90/90 External Rotation, Band External Rotation",
    "ex": "Sleeper Stretch, Side-Lying External Rotation, Prone 90/90 External Rotation, Band External Rotation",
    "fl": "GIRD > 25° asymmetry = high shoulder injury risk — refer to PT before loading overhead. Avoid behind-the-neck movements. Prioritize ER strengthening before pressing volume increases.  HYPERMOBILITY FL"
  },
  "Limited overhead reach": {
    "s": "SHOULDER MOBILITY SCREEN",
    "smr": "Lat Foam Roll, Pec Minor Lacrosse Ball Release, Thoracic Spine Foam Roll",
    "len": "Lat Stretch (Doorway / Rack), Child's Pose with Lateral Reach, Thoracic Extension over Foam Roller",
    "act": "Wall Angels, Scapular Wall Slides, Prone Y-T-W",
    "ex": "Lat Stretch (Doorway / Rack), Child's Pose with Lateral Reach, Thoracic Extension over Foam Roller, Wall Angels, Prone Y-T-W, Scapular Wall Slides",
    "fl": "Overhead pressing is contraindicated until 170°+ of pain-free shoulder flexion is achieved without lumbar extension compensation. Use landmine press as primary push variation in the interim.  HYPERMOB"
  }
};
